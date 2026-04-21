function celebrate() {
    // 1. Play Music
    const audio = document.getElementById('birthdaySong');
    audio.play();

    // 2. Button text change (optional)
    document.getElementById('surpriseBtn').innerText = "Enjoy! 🎂";

    // 3. Setup Confetti
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const colors = ['#ff0058', '#00d2ff', '#abff00', '#ffea00', '#fff', '#ffa500'];

    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 7 + 3,
            speedX: Math.random() * 4 - 2,
            speedY: Math.random() * 3 + 2,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p) => {
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();

            p.x += p.speedX;
            p.y += p.speedY;

            // Agar particle screen se bahar jaye to wapis upar se laye
            if (p.y > canvas.height) {
                p.y = -20;
                p.x = Math.random() * canvas.width;
            }
        });
        requestAnimationFrame(draw);
    }
    draw();
}
