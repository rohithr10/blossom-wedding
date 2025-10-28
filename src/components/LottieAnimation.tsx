import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

interface LottieAnimationProps {
  animationData: any;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

const LottieAnimation = ({ 
  animationData, 
  className = '', 
  loop = true, 
  autoplay = true 
}: LottieAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
      />
    </motion.div>
  );
};

export default LottieAnimation;
