const Players_online_text = document.getElementById("players")
const Is_server_online = document.getElementById("status")
const Startbutton = document.getElementById("Start")


async function GetData() {
    const url = "https://api.mcstatus.io/v2/status/java/mc.abyss.work.gd:61388"

    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
        return result

    } catch (error) {
        console.log(error.message);
        return error
    }

}

Data = GetData()

isOnline = Data.online;

if (isOnline) {
    Is_server_online.innerHTML = "Online"
} else {
    Is_server_online.innerHTML = "Offline"
}


async function start_server() {
    try {
        const response = await await fetch("https://aternos.org/ajax/server/start?access-credits=false&TOKEN=Vp50tfC3egtZPioS4L85&SEC=QRNJatLCM6ZJP81e%3AjnXtz0Y5KxRkTga8&SERVER=dmlaAN2GCtBquU3p", {
            "credentials": "include",
            "headers": {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0",
                "Accept": "*/*",
                "Accept-Language": "en-US,en;q=0.9",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-origin",
                "Priority": "u=0",
                "Pragma": "no-cache",
                "Cache-Control": "no-cache"
            },
            "referrer": "https://aternos.org/server/",
            "method": "GET",
            "mode": "cors"
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        throw error;
    }
}

if (!response.ok) {
    throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
}

const data = await response.json();
return data;


Startbutton.addEventListener("click", start_server())