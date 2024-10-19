async function getIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } 
    catch (error) {
        console.error('Error fetching the IP address:', error);
        return null;
    }
}

// --------------------------
export async function updateHistory(id: string, route: string) {
    console.log("Attempt to update history...:");

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

        const data = await response.json();
        console.log("History updated");
        return data;
    } 
    catch (error) {
        console.error("Error:", error);
    }
}
