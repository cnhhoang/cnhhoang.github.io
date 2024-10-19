import { useEffect, useState } from "react";

// ====================================================================================================
async function getIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const IP = data.ip;
        return IP;
    } 
    catch (error) {
        console.error('Error fetching the IP address:', error);
        return null;
    }
}

// --------------------------

//****************************************************************************************************
function InfoLogger() {
    const [IP, setIP] = useState(null);
    useEffect(() => {
        async function fetchAndSetIP() {
            const ip = await getIP();
            setIP(ip); 
        }
        fetchAndSetIP();
    }, []);

    // POST API
    useEffect(() => {
        if (IP) {
            console.log("Attempt to POST data...:", IP);

            fetch("https://vercel-api-git-main-hoang-chungs-projects.vercel.app/api/postInfo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    time: new Date().toISOString(),
                    ip: IP,
                }),
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => console.error("Error:", error));
        }
    }, [IP]); 

    return (<></>);
}
