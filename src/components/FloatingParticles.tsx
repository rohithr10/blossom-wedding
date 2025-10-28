import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 15 + Math.random() * 10,
    size: 10 + Math.random() * 20,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute animate-particle"
          style={{
            left: `${particle.x}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0.6, 0] }}
        >
          {particle.id % 3 === 0 ? (
            <Heart
              className="text-primary/30"
              size={particle.size}
              fill="currentColor"
            />
          ) : (
            <Sparkles
              className="text-rose-gold-light"
              size={particle.size}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingParticles;
