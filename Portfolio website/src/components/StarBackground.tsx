// Update StarBackground.tsx
import { useState, useEffect } from "react";
import type { starsType } from "@/types/starsType";
import type { meteorsType } from "@/types/meteorsType";

interface StarBackgroundProps {
  isVisible: boolean;
}

export const StarBackground = ({ isVisible }: StarBackgroundProps) => {
  const [stars, setStars] = useState<starsType[]>([]);
  const [meteors, setMeteors] = useState<meteorsType[]>([]);

  useEffect(() => {
    // Generate stars immediately when component mounts (even if not visible)
    generateStars();
    generateMeteors();
    const handleResize=()=>{
      generateStars();
    }
    window.addEventListener("resize",handleResize);
    return window.removeEventListener("resize",handleResize)
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 1000
    );
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  };
  const generateMeteors = () => {
    const numberOfMeteors = 10;
    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setMeteors(newMeteors);
  };

  return (
    <div
      className={`fixed inset-0 overflow-hidden pointer-events-none z-0 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ display: isVisible ? "block" : "none" }}
    >
      {/* Render Stars */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {/* Render Meteors */}
      {meteors.map((meteor) => (
        <div
          key={`meteor-${meteor.id}`}
          className="meteor animate-meteor"
          style={{
            width: meteor.size + "px",
            height: meteor.size + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};