export async function getGeminiResponse(prompt: string): Promise<string> {
    const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    return data;
}
