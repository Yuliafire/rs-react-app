"use server";

import type { SelectedCharacter } from "../../store/charactersSlice";

interface CSVDownloadResult {
  fileName: string;
  data: string;
}

export async function generateCSV(
  characters: SelectedCharacter[],
): Promise<CSVDownloadResult> {
  try {
    const headers = "ID,Name,Species,Status,Details URL";
    const rows = characters
      .map(
        (char) =>
          `${char.id},"${char.name.replace(/"/g, '""')}",${char.species},${char.status},${char.detailsUrl}`,
      )
      .join("\n");

    const csvContent = `${headers}\n${rows}`;

    return {
      fileName: `${characters.length}_characters.csv`,
      data: csvContent,
    };
  } catch (error) {
    console.error("CSV generation failed:", error);
    throw new Error("Failed to generate CSV");
  }
}
