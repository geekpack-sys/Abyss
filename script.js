function copyIP(){

    navigator.clipboard.writeText(
        "mc.abyss.work.gd"
    );

    alert("IP copied!");
}

async function updateStatus(){

    try{

        const res =
        await fetch(
        "https://api.mcsrvstat.us/3/mc.abyss.work.gd"
        );

        const data =
        await res.json();

        const status =
        document.getElementById(
        "status-text"
        );

        if(data.online){

            status.innerHTML =
            `Online • ${data.players.online} players`;

        }else{

            status.innerHTML =
            "Offline";
        }

    }catch{

        document.getElementById(
        "status-text"
        ).innerHTML =
        "Status unavailable";
    }
}

updateStatus();
setInterval(updateStatus,30000);