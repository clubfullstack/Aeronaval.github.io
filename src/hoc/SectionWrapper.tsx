import { FC } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

interface SectionWrapperProps {
  idName: string;
}

const SectionWrapper = (Component: FC, idName: string): FC<SectionWrapperProps> => {
  const WrappedComponent: FC = () => {
    return (
      <motion.section
        variants={staggerContainer(1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="">
        <span id={idName}>
        </span>
        <Component />
      </motion.section>
    );
  };

  return WrappedComponent;
};

export default SectionWrapper;
