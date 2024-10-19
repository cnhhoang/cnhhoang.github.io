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

export async function postInfo() {
    const IP = await getIP();

    if (IP) {
        console.log("Attempt to POST data...:", IP);

        try {
            const response = await fetch("https://vercel-api-git-main-hoang-chungs-projects.vercel.app/api/postInfo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    time: new Date().toISOString(),
                    ip: IP,
                    history: [],
                }),
            });

            const data = await response.json();
            console.log("Data received!");
            console.log(data);
            return data;
        } 
        catch (error) {
            console.error("Error:", error);
        }
    }
}
