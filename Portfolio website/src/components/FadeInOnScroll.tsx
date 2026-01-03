import type { ReactNode } from "react";
import { motion } from "framer-motion";

type FadeInOnScrollProps = {
  children: ReactNode;
};

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;
