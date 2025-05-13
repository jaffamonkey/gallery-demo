import React, { useEffect, useState } from "react";

const lines: string[] = [
  "Come to Terrormar, the idyllic island destination where fear is a distant memory",
  "Bask in the beautiful waters and allow all your worries to drift away like blood down a drain",
  "Stroll along the famous Playa del Espanto where the welcoming locals stand with open arms to remind you that, “Death is not the end",
  "Get lost in the magical carnival throng as it leads you through the looking glass of your most treasured illusions down to the Plaza de los Cuerpos",
  "Dine on the internationally acclaimed Food of the Gods and as you lick your lips allow the juice of eternal immortality to run down your contented chin",
];

const displayDuration = 4000; // milliseconds
const fadeDuration = 2000;

export const TextCycle: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false); // Fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % lines.length);
        setVisible(true); // Fade in
      }, fadeDuration);
    }, displayDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={containerStyle}>
      <div
        style={{
          ...textBoxStyle,
          opacity: visible ? 1 : 0,
          transition: `opacity ${fadeDuration}ms ease-in-out`,
        }}
      >
        {lines[currentIndex]}
      </div>
    </div>
  );
};

// Mobile-first container
const containerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  minHeight: "10vh",
  width: "100%",
};

// Mobile-first text box with semi-transparent background
const textBoxStyle: React.CSSProperties = {
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  color: "#fff",
  padding: "0.5rem",
  borderRadius: "1rem",
  fontSize: window.innerWidth > 768 ? "1.25rem" : "1rem",
  textAlign: "center",
  width: "100%",
  maxWidth: "600px",
  // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  fontFamily: "Chalkduster, fantasy",
};