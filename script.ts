declare const confetti: any;

function createConfetti(): void {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
  });
}

(window as any).createConfetti = createConfetti;

