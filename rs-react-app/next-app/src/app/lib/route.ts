import { NextResponse } from "next/server";
import { generateCSV } from "@/app/lib/actions";

export async function POST(request: Request) {
  try {
    const { characters } = await request.json();

    if (!Array.isArray(characters)) {
      return NextResponse.json(
        { error: "Invalid characters data" },
        { status: 400 },
      );
    }

    const { fileName, data } = await generateCSV(characters);

    return new NextResponse(data, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="${fileName}"`,
      },
    });
  } catch (error) {
    console.error("CSV download failed:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
