import { useEffect, useState } from "react";

const makeStars = () => {
  const count = Math.floor((window.innerWidth * window.innerHeight) / 10000);
  return Array.from({ length: count }, (_, id) => ({
    id,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.5,
    duration: Math.random() * 4 + 2,
  }));
};

const makeMeteors = () =>
  Array.from({ length: 4 }, (_, id) => ({
    id,
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    y: Math.random() * 20,
    delay: Math.random() * 15,
    duration: Math.random() * 3 + 3,
  }));

export const StarBackground = () => {
  const [stars, setStars] = useState(makeStars);
  const [meteors] = useState(makeMeteors);

  useEffect(() => {
    const build = () => setStars(makeStars());
    window.addEventListener("resize", build);
    return () => window.removeEventListener("resize", build);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((s) => (
        <div
          key={s.id}
          className="star animate-pulse-subtle"
          style={{
            width: s.size + "px",
            height: s.size + "px",
            left: s.x + "%",
            top: s.y + "%",
            opacity: s.opacity,
            animationDuration: s.duration + "s",
          }}
        />
      ))}
      {meteors.map((m) => (
        <div
          key={m.id}
          className="meteor animate-meteor"
          style={{
            width: m.size * 50 + "px",
            height: m.size + "px",
            left: m.x + "%",
            top: m.y + "%",
            animationDelay: m.delay + "s",
            animationDuration: m.duration + "s",
          }}
        />
      ))}
    </div>
  );
};
