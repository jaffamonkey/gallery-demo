// TextFader.tsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const lines = [
    "Come to Terrormar, the idyllic island destination where fear is a distant memory",
    "Bask in the beautiful waters and allow all your worries to drift away like blood down a drain",
    "Stroll along the famous Playa del Espanto where the welcoming locals stand with open arms to remind you that, 'Death is not the end'",
    "Get lost in the magical carnival throng as it leads you through the looking glass of your most treasured illusions down to the Plaza de los Cuerpos",
    "Dine on the internationally acclaimed Food of the Gods and as you lick your lips allow the juice of eternal immortality to run down your contented chin"
];

const TextFader: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % lines.length);
    }, 10000);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="text-fader-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="text-fader-line"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.8 }}
        >
          {lines[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TextFader;