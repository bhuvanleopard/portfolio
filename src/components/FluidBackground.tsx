// src/components/FluidBackground.jsx
import { motion} from "framer-motion";

export const FluidBackground = () => {

  return (
    <div
      id="fluid-container"
      className="relative w-full h-full overflow-hidden z-30 opacity-80"
    >
      {/* Container for 3D perspective */}
      <motion.div
        className="relative inset-0 contrast-[25]"
        style={{
          transformStyle: "preserve-3d",
          perspective: 800,
        }}
      >
        {/* SINGLE container for the gooey effect */}
        <div className="absolute inset-0 filter contrast-8">
          
          {/* Blob 1: Left Side */}
          <motion.div
            className="absolute left-0 top-0 w-128 h-128  blur-[100px] lg:w-192 lg:h-192 bg-gradient-to-r from-cyan-400 to-pink-400 lg:blur-[128px]"
            animate={{
                // Stays fixed horizontally on the left
                x: ["-40%", "-55%"],
                // Animates vertically
                y: ["-40%", "-55%"],
                rotate: [360, 0],
                borderRadius: [
                  "60% 40% 70% 80% / 60% 30% 70% 80%",
                  "120% 80% 140% 160% / 120% 60% 140% 160%",
                  "55% 45% 40% 60% / 65% 40% 60% 45%",
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                ],
            }}
            transition={{
                duration: 27,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
            }}
          />
            
          
        </div>
      </motion.div>
    </div>
  );
};