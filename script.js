function nextPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page' + page).classList.add('active');

    if(page === 2){
        startTyping();
    }
}

/* TYPEWRITER */
let message = "Hari ini bukan cuma hari ulang tahunmu... tapi hari dimana dunia beruntung karena kamu lahir 💖";
let i = 0;

function startTyping(){
    document.getElementById("text").innerHTML = "";
    i = 0;
    typeEffect();
}

function typeEffect(){
    if(i < message.length){
        document.getElementById("text").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeEffect, 40);
    }
}

/* GIFT */
function openGift() {
    document.getElementById("giftContent").style.display = "block";
}

/* LOVE TERBANG */
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (10 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 700);

let musicStarted = false;

function playMusic() {
    if (!musicStarted) {
        const music = document.getElementById("bgMusic");
        music.play();
        musicStarted = true;
    }
}

const music = document.getElementById("bgMusic");
music.volume = 0.3;