'use server';
import { SelectedCharacter } from '../store/charactersSlice';

export async function generateCsvAction(characters: SelectedCharacter[]) {
  // Validate input
  if (!Array.isArray(characters) || characters.some((char) => !char.id)) {
    return new Response('Invalid character data', { status: 400 });
  }

  // Generate CSV
  const headers = ['ID', 'Name', 'Species', 'Status', 'Details URL'];
  const csvRows = [
    headers.join(','), // Header row
    ...characters.map((char) =>
      [
        char.id,
        `"${char.name.replace(/"/g, '""')}"`, // Escape quotes
        char.species,
        char.status,
        char.detailsUrl,
      ].join(',')
    ),
  ];
  const csvContent = csvRows.join('\n');

  // Add UTF-8 BOM for proper encoding
  const bom = '\uFEFF';
  const csvWithBom = bom + csvContent;

  // Return Response with proper headers
  return new Response(csvWithBom, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv;charset=utf-8',
      'Content-Disposition': `attachment; filename="${characters.length}_items.csv"`,
    },
  });
}
