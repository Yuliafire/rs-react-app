import { describe, expect, test, vi } from 'vitest';

vi.mock('file-saver', () => ({
  saveAs: vi.fn(),
}));

describe('handleDownloadCSV', () => {
  const selectedCharacters = [
    {
      id: 1,
      name: 'Rick',
      species: 'Human',
      status: 'Alive',
      detailsUrl: 'https://example.com',
    },
    {
      id: 2,
      name: 'Morty',
      species: 'Human',
      status: 'Alive',
      detailsUrl: 'https://example.com',
    },
  ];

  test('generates CSV content correctly', () => {
    const csvContent = [
      ['ID', 'Name', 'Species', 'Status', 'Details URL'],
      ...selectedCharacters.map((item) => [
        item.id,
        `"${item.name.replace(/"/g, '""')}"`,
        item.species,
        item.status,
        item.detailsUrl,
      ]),
    ]
      .map((row) => row.join(','))
      .join('\n');

    expect(csvContent).toMatchSnapshot();
  });
});
