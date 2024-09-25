import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

interface TechCardProps {
  icon: string;
  label: string;
  index: number;
}

const fadeIn = (direction: string, type: string, delay: number, duration: number) => ({
  hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

const TechCard: React.FC<TechCardProps> = ({ icon, label, index }) => {
  return (
    <Tilt className="p-3">
      <motion.div
        variants={fadeIn("right", "spring", 0.2 * index, 2)}
        initial="hidden"
        animate="show"
        className="
          w-full
          bg-gradient-to-r from-[#004e78] via-[#045f8a] via-[#09709c] via-[#0d80ae] to-[#1191c0]
          p-[3px]
          rounded-[15px]
          shadow-card
          flex
          flex-col
          items-center
          justify-center
          w-[155px]
          h-[155px]
          min-w-[150px]
          
        "
      >
        <div
          className="
            bg-gray-200
            rounded-[15px]
            p-4
            flex
            flex-col
            items-center
            justify-center
            bg-opacity-95
            w-full
            h-full
            w-[150px]
            h-[150px]
          "
        >
          <img src={icon} alt={label} className="w-16 h-16 object-contain mb-2" />
          <h3 className="
            text-black
            text-[14px]
            font-bold
            text-center
            w-full
          ">
            {label}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default TechCard;
