function openNav() {
    document.getElementById("side-nav").style.width = "700px";
}

function closeNav() {
    document.getElementById("side-nav").style.width = "0";
}

// Countdown Timer Script
function countdown() {
    const eventDate = new Date("January 26, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
       "Grand Finale In "+ days + " Days " + hours + "h " + minutes + "m " + seconds + "s";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}
setInterval(countdown, 1000);
