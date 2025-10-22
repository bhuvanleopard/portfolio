// src/components/FluidBackground.jsx
import { motion } from "framer-motion";

export const FluidBackground = () => {
  return (
    <div
      id="fluid-container"
      className="relative w-full h-full overflow-hidden z-30 opacity-100"
    >
      {/* Container for 3D perspective */}
      <motion.div
        className="relative inset-0 contrast-[2.5]"
        style={{
          transformStyle: "preserve-3d",
          perspective: 800,
        }}
      >
        {/* SINGLE container for the gooey effect */}
        <div className="absolute inset-0 filter contrast-64">
          

          {/* Blob 1: Top Middle */}
          <motion.div
            // CHANGED: "left-0" is now "left-1/2" for horizontal centering
            className="
              absolute left-1/2 top-0 w-[100vw] h-[100vw] 
              bg-gradient-to-r from-slate-500 via-cyan-900 to-slate-500 
              bg-[radial-gradient(circle_at_center,theme(colors.cyan.50),theme(colors.cyan.500),transparent,transparent)]
              blur-[0px]"
            animate={{
              // CHANGED: x: "-50%" translates it left by half its own width to finish centering
              x: ["-100%", "-95%"],
              // CHANGED: y: "-50%" moves it UP by half its own height, leaving only the bottom half visible
              y: ["-5%", "0%"],
              rotate: [120, 145],
              borderRadius: [
                "60% 90% 70% 80% / 60% 90% 70% 80%",
                "120% 80% 100% 100% / 120% 60% 100% 100%",
                "55% 75% 80% 60% / 65% 70% 60% 65%",
                "60% 80% 65% 70% / 60% 65% 70% 75%",
              ],
            }}
            transition={{
              duration: 16,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          
          {/* Blob 1: Top Middle */}
          <motion.div
            // CHANGED: "left-0" is now "left-1/2" for horizontal centering
            className="absolute left-1/2 top-0 w-[100vw] h-[100vw] bg-gradient-to-r from-cyan-500 via-cyan-900 to-slate-500 
            bg-[radial-gradient(circle_at_center,theme(colors.cyan.50),theme(colors.cyan.900),transparent,transparent)]
            blur-[0px]"
            animate={{
              // CHANGED: x: "-50%" translates it left by half its own width to finish centering
              x: ["10%", "15%"],
              // CHANGED: y: "-50%" moves it UP by half its own height, leaving only the bottom half visible
              y: ["35%", "20%"],
              rotate: [-40, 30],
              borderRadius: [
                "60% 40% 70% 80% / 60% 30% 70% 80%",
                "120% 80% 140% 160% / 120% 60% 140% 160%",
                "55% 45% 40% 60% / 65% 40% 60% 45%",
                "60% 40% 30% 70% / 60% 30% 70% 40%",
              ],
            }}
            transition={{
              duration: 24,
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