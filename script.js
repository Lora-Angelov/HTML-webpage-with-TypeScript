function createConfetti() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
    });
}
window.createConfetti = createConfetti;
