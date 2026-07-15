const intro = document.getElementById("intro");
const scene = document.getElementById("scene");
const particles = document.getElementById("particles");

// Açılış ekranına tıklayınca
intro.addEventListener("click", () => {
    intro.classList.add("fade");

    setTimeout(() => {
        intro.style.display = "none";
        scene.classList.remove("hidden");

        createParticles();
    }, 800);
});

// Küçük uçan kalpler
function createParticles() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "particle";
        heart.innerHTML = "💙";

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.fontSize = (10 + Math.random() * 18) + "px";
        heart.style.animationDuration = (3 + Math.random() * 3) + "s";

        particles.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);

    }, 180);

}
