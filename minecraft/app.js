const Players_online_text = document.getElementById("players")
const Is_server_online = document.getElementById("status")

async function GetData() {
    const url = "https://api.mcsrvstat.us/3/"
    const Server_Domein = "BelgianFries2.aternos.me"

    try {
        const response = await fetch(url + Server_Domein)

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

if (isOnline == true) {
    Is_server_online.innerHTML = "Online"
} else {
    Is_server_online.innerHTML = "Offline"
}