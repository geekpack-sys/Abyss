const Players_online_text = document.getElementById("players")
const Is_server_online = document.getElementById("status")

async function GetData(params) {
    const url = "https://api.mcsrvstat.us/3/"
    const Server_Domein = "BelgianFries2.aternos.me"

    try {
        const response = await fetch(url + Server_Domein)

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);

    } catch (error) {
        console.log(error.message);
    }

}