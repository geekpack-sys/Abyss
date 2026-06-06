const BACKEND = "https://backend-production-6bb3.up.railway.app";

function copyIP() {
    navigator.clipboard.writeText("mc.abyss.work.gd");
    alert("IP copied!");
}

async function updateStatus() {
    try {
        const res = await fetch("https://api.mcsrvstat.us/3/mc.abyss.work.gd");
        const data = await res.json();
        const status = document.getElementById("status-text");
        const dot = document.querySelector(".dot");

        if (data.online) {
            dot.style.background = "#00ff88";
            status.innerHTML = `Online • ${data.players.online} players`;
        } else {
            dot.style.background = "#ff4444";
            status.innerHTML = "Offline";
        }
    } catch {
        document.getElementById("status-text").innerHTML = "Status unavailable";
    }
}

async function startServer() {
    const btn = document.querySelector(".btn.primary");
    btn.textContent = "Starting...";
    btn.disabled = true;

    try {
        await fetch(`${BACKEND}/start-server`, { method: "POST" });
        btn.textContent = "Server started!";
    } catch {
        btn.textContent = "Error!";
    }

    setTimeout(() => {
        btn.textContent = "START SERVER";
        btn.disabled = false;
    }, 5000);
}

updateStatus();
setInterval(updateStatus, 30000);
