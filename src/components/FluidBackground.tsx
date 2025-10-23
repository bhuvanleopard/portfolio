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
          {/* Blob 1: Top Middle - Currently commented out */}
          {/* <motion.div
            // This is the original blob, left as is.
            className="
              absolute left-1/2 top-0 w-[120vh] h-[120vh] 
              bg-gradient-to-r from-slate-500 via-cyan-900 to-slate-500 
              bg-[radial-gradient(circle_at_center,transparent,transparent,transparent,theme(colors.cyan.800),transparent)]
              blur-[0px]"
            animate={{
              x: ["-120%", "-100%"],
              y: ["-5%", "0%"],
              rotate: [15, 30],
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
          /> */}

          {/* Blob 2: Bottom Right (MODIFIED for more wobble) */}
          <motion.div
            className="
              absolute left-[25%] top-[0%] w-[150vh] h-[150vh]  
              bg-[radial-gradient(circle_at_center,transparent,transparent,transparent,theme(colors.purple.500))]
              blur-[6px]"
            animate={{
              x: ["0%", "-5%"],
              y: ["-15%", "-10%"],
              rotate: [30, 60],
              borderRadius: [
                "60% 90% 70% 80% / 60% 90% 70% 80%", // Original
                "85% 75% 65% 95% / 70% 80% 90% 60%",
                "70% 100% 80% 90% / 90% 70% 80% 100%",
                "95% 65% 75% 85% / 80% 90% 60% 70%",
                "120% 80% 100% 100% / 120% 60% 100% 100%", // Original
                "70% 90% 60% 80% / 100% 80% 70% 90%",
                "80% 60% 90% 70% / 90% 70% 100% 60%",
                "65% 85% 95% 75% / 60% 100% 80% 90%",
                "55% 75% 80% 60% / 65% 70% 60% 65%", // Original
                "90% 60% 70% 100% / 80% 90% 60% 70%",
                "75% 95% 85% 65% / 70% 60% 90% 80%",
                "60% 80% 65% 70% / 60% 65% 70% 75%", // Original
              ],
            }}
            transition={{
              duration: 32, // Increased duration to smooth out more keyframes
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />

          {/* Blob 2: Bottom Right (MODIFIED for more wobble) */}
          <motion.div
            className="
              absolute left-[25%] top-[0%] w-[150vh] h-[150vh]  
              bg-[radial-gradient(circle_at_center,transparent,transparent,transparent,theme(colors.purple.500))]
              blur-[6px]"
            animate={{
              x: ["0%", "-5%"],
              y: ["-15%", "-10%"],
              rotate: [30, 60],
              borderRadius: [
                "60% 90% 70% 80% / 60% 90% 70% 80%", // Original
                "85% 75% 65% 95% / 70% 80% 90% 60%",
                "70% 100% 80% 90% / 90% 70% 80% 100%",
                "95% 65% 75% 85% / 80% 90% 60% 70%",
                "120% 80% 100% 100% / 120% 60% 100% 100%", // Original
                "70% 90% 60% 80% / 100% 80% 70% 90%",
                "80% 60% 90% 70% / 90% 70% 100% 60%",
                "65% 85% 95% 75% / 60% 100% 80% 90%",
                "55% 75% 80% 60% / 65% 70% 60% 65%", // Original
                "90% 60% 70% 100% / 80% 90% 60% 70%",
                "75% 95% 85% 65% / 70% 60% 90% 80%",
                "60% 80% 65% 70% / 60% 65% 70% 75%", // Original
              ],
            }}
            transition={{
              duration: 32, // Increased duration to smooth out more keyframes
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