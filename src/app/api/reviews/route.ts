import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

/** GET /api/reviews — approved guest reviews. */
export async function GET() {
  try {
    const reviews = await db.review.findMany({
      where: { approved: true },
      orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
      take: 12,
    });
    return NextResponse.json({ ok: true, reviews });
  } catch (err) {
    console.error("reviews error", err);
    return NextResponse.json({ ok: false, reviews: [] }, { status: 500 });
  }
}
