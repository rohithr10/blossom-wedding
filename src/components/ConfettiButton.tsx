import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

const ConfettiButton = () => {
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; y: number; rotation: number; color: string }>>([]);

  const triggerConfetti = () => {
    const newConfetti = Array.from({ length: 50 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100 - 50,
      y: Math.random() * -100 - 20,
      rotation: Math.random() * 360,
      color: ['text-primary', 'text-rose-gold-light', 'text-accent', 'text-champagne'][Math.floor(Math.random() * 4)]
    }));

    setConfetti(newConfetti);

    setTimeout(() => {
      setConfetti([]);
    }, 3000);
  };

  return (
    <div className="relative inline-block">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={triggerConfetti}
          size="lg"
          className="bg-gradient-to-r from-primary to-rose-gold-light hover:from-primary/90 hover:to-rose-gold-light/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-xl relative overflow-hidden group"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Heart className="w-5 h-5" fill="currentColor" />
            Bless the Couple
            <Sparkles className="w-5 h-5" />
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/30 to-white/20"
            animate={{ x: [-200, 200] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
        </Button>
      </motion.div>

      {/* Confetti particles */}
      <div className="absolute inset-0 pointer-events-none">
        {confetti.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute top-1/2 left-1/2 ${particle.color}`}
            initial={{ 
              x: 0, 
              y: 0, 
              opacity: 1, 
              scale: 1,
              rotate: 0 
            }}
            animate={{ 
              x: particle.x * 8, 
              y: particle.y * 8, 
              opacity: 0, 
              scale: 0.5,
              rotate: particle.rotation 
            }}
            transition={{ 
              duration: 2, 
              ease: "easeOut" 
            }}
          >
            {particle.id % 3 === 0 ? (
              <Heart className="w-4 h-4" fill="currentColor" />
            ) : particle.id % 3 === 1 ? (
              <Sparkles className="w-4 h-4" />
            ) : (
              <div className="w-2 h-2 rounded-full bg-current" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ConfettiButton;
