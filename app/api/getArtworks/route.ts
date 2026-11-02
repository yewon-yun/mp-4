import { NextResponse } from "next/server";

export async function GET() {
    const apiKey = process.env.HARVARD_API_KEY;

    const upStream = await fetch(
        `https://api.harvardartmuseums.org/object?apikey=${apiKey}&size=50&page=163`,
        { cache: "no-store" }
    );

    if (!upStream.ok) {
        return NextResponse.json(
            { error: "Upstream failed" },
            { status: 502 }
        );
    }

    const data = await upStream.json();

    return NextResponse.json(data.records);
}