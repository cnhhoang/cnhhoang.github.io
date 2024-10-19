export async function updateHistory(id: string, route: string) {
    console.log("Attempt to update history...");

    try {
        const response = await fetch("https://vercel-api-hoang-chungs-projects.vercel.app/api/updateHistory", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                time: new Date().toISOString(),
                id: id,
                route: route,
            }),
        });

        if (!response.ok) {
            console.error(`Error: Failed to update history. Status code: ${response.status}. Problem: ${response}`);
            return null; 
        }

        const data = await response.json();
        console.log("History updated:", data);
        return data;
    } 
    catch (error) {
        console.error("Error updating history:", error);
        return null;
    }
}
