import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { BRAND, waLink } from "@/lib/brand";
import { dubaiToday } from "@/lib/dubai";

export const dynamic = "force-dynamic";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "name too short").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "phone too short")
    .max(24)
    .regex(/^[+0-9][0-9 ()\-]+$/, "invalid phone"),
  email: z.union([z.email(), z.literal("")]).optional(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  guests: z.coerce.number().int().min(1).max(30),
  tableType: z.enum(["SIGNATURE", "PREMIUM", "ROYAL"]),
  occasion: z.string().trim().max(60).optional().default(""),
  notes: z.string().trim().max(600).optional().default(""),
  consent: z.boolean(),
});

function makeReference(): string {
  const alphabet = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let ref = "";
  for (let i = 0; i < 6; i++) ref += alphabet[Math.floor(Math.random() * alphabet.length)];
  return `XO-${ref}`;
}

/** POST /api/bookings — create a reservation, return reference + WhatsApp confirm link. */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = bookingSchema.safeParse(body);
    if (!parsed.success) {
      const first = parsed.error.issues[0]?.message ?? "Invalid booking data";
      return NextResponse.json({ ok: false, error: first }, { status: 400 });
    }
    const data = parsed.data;

    if (data.date < dubaiToday()) {
      return NextResponse.json({ ok: false, error: "Date is in the past" }, { status: 400 });
    }

    // Unique reference (retry loop)
    let reference = makeReference();
    for (let i = 0; i < 5; i++) {
      const clash = await db.booking.findUnique({ where: { reference } });
      if (!clash) break;
      reference = makeReference();
    }

    const booking = await db.booking.create({
      data: {
        reference,
        name: data.name,
        phone: data.phone,
        email: data.email || null,
        date: data.date,
        guests: data.guests,
        tableType: data.tableType,
        occasion: data.occasion || null,
        notes: data.notes || null,
        status: "PENDING",
        source: "website",
      },
    });

    const confirmMessage = `Hi XO Club Dubai! I just requested a table online. Reference: ${reference} — ${data.tableType} for ${data.guests} guests on ${data.date}. Please send my written quote. Thanks!`;
    const whatsappUrl = waLink(confirmMessage);

    return NextResponse.json({
      ok: true,
      booking: {
        reference: booking.reference,
        date: booking.date,
        guests: booking.guests,
        tableType: booking.tableType,
        status: booking.status,
      },
      whatsappUrl,
      hotline: BRAND.phoneRaw,
    });
  } catch (err) {
    console.error("booking error", err);
    return NextResponse.json({ ok: false, error: "Booking failed — try WhatsApp +971503737162" }, { status: 500 });
  }
}
