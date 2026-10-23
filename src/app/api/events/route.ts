import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

/** GET /api/events — upcoming headline events (max 12). */
export async function GET() {
  try {
    const events = await db.event.findMany({
      where: { date: { gte: new Date() } },
      orderBy: { date: "asc" },
      take: 12,
    });
    return NextResponse.json({ ok: true, events });
  } catch (err) {
    console.error("events error", err);
    return NextResponse.json({ ok: false, events: [] }, { status: 500 });
  }
}
