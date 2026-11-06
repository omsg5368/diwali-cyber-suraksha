import confetti from 'canvas-confetti';

/**
 * Festive Gold Coin & Saffron Petals Shower (Dhanteras / Diwali Blessing)
 */
export function triggerGoldShower() {
  const count = 70;
  const defaults = {
    origin: { y: 0.2 },
    colors: ['#F59E0B', '#FBBF24', '#D97706', '#E11D48', '#EA580C'],
    shapes: ['circle', 'square'] as confetti.Shape[],
    scalar: 1.2,
  };

  confetti({
    ...defaults,
    particleCount: count,
    spread: 60,
    startVelocity: 35,
  });

  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: Math.floor(count * 0.7),
      spread: 90,
      startVelocity: 45,
    });
  }, 250);
}

/**
 * Grand Diwali Cracker Blast / Celebration Fireworks
 */
export function triggerDiwaliCracker(x: number = 0.5, y: number = 0.5) {
  confetti({
    particleCount: 80,
    angle: 90,
    spread: 100,
    origin: { x, y },
    colors: ['#FF1493', '#FFD700', '#00FFFF', '#FF4500', '#7B68EE', '#32CD32'],
    ticks: 200,
    gravity: 0.9,
    startVelocity: 40,
  });
}

/**
 * Quiz Completion Celebration
 */
export function triggerVictoryConfetti() {
  const duration = 2.5 * 1000;
  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#F59E0B', '#10B981', '#E11D48'],
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#F59E0B', '#10B981', '#E11D48'],
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };
  frame();
}

