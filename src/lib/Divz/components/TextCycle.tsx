import React, { useEffect, useState } from "react";

const lines: string[] = [
  "Come to Terrormar, the idyllic island destination where fear is a distant memory",
  "Bask in the beautiful waters and allow all your worries to drift away like blood down a drain",
  "Stroll along the famous Playa del Espanto where the welcoming locals stand with open arms to remind you that, “Death is not the end",
  "Get lost in the magical carnival throng as it leads you through the looking glass of your most treasured illusions down to the Plaza de los Cuerpos",
  "Dine on the internationally acclaimed Food of the Gods and as you lick your lips allow the juice of eternal immortality to run down your contented chin",
];

const displayDuration = 4000; // Total time per message (ms)
const fadeDuration = 2000;    // Fade in/out duration (ms)

export const TextCycle: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false); // Start fade out

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % lines.length);
        setVisible(true); // Start fade in
      }, fadeDuration);
    }, displayDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={containerStyle}>
      <div
        style={{
          ...textBlockStyle,
          opacity: visible ? 1 : 0,
          transition: `opacity ${fadeDuration}ms ease-in-out`,
        }}
      >
        {lines[currentIndex]}
      </div>
    </div>
  );
};

// Responsive container style
const containerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "0vh",
  padding: "2rem",
  width: "100%",
  // opacity: 0.2
};

// Responsive text block style
const textBlockStyle: React.CSSProperties = {
  backgroundColor: "rgba(239, 229, 229, 0.4)",
  color: "#f0f0f0",
  padding: "1rem",
  borderRadius: "12px",
  fontSize: "1.2rem",
  fontFamily: "sans-serif",
  textAlign: "center",
  maxWidth: "75%",
  // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
};

