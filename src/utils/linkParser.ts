export interface LinkItem {
    name: string;
    url: string;
}

export interface LinkCategory {
    name: string;
    items: LinkItem[];
}

export function parseMarkdownTable(markdown: string): LinkCategory[] {
    const lines = markdown.trim().split('\n');
    const categoriesMap: Record<string, LinkItem[]> = {};

    // Find the header line and determine start index
    let dataStartIndex = 0;

    // Simple check for table separator line (e.g., |---|---|)
    const separatorIndex = lines.findIndex(line => line.includes('---'));
    if (separatorIndex !== -1) {
        dataStartIndex = separatorIndex + 1;
    }

    for (let i = dataStartIndex; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line || !line.includes('|')) continue;

        // Remove leading/trailing pipes and split
        // e.g., "| Cat | Name | URL |" -> ["", "Cat", "Name", "URL", ""]
        const parts = line.split('|').map(p => p.trim()).filter(p => p !== '');

        // Format expected: Category | Name | URL
        if (parts.length >= 3) {
            const category = parts[0];
            const name = parts[1];
            const url = parts[2];

            if (!categoriesMap[category]) {
                categoriesMap[category] = [];
            }

            categoriesMap[category].push({ name, url });
        }
    }

    // Convert map to array
    return Object.entries(categoriesMap).map(([name, items]) => ({
        name,
        items
    }));
}
