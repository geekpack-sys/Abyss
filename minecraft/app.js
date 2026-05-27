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
        const response = await fetch("https://aternos.org/ajax/server/start?access-credits=false&TOKEN=iGGf0dbSVtxCCBFTG6EF&SEC=uBqXlA1eJyMHGTw8%3ArgdXP87TScAb2cBq&SERVER=dmlaAN2GCtBquU3p", {
            credentials: "include",
            referrer: "https://aternos.org/server/",
            method: "GET",
            mode: "cors"
        });

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to start server:", error);
        throw error;
    }
}
Startbutton.addEventListener("click", start_server())