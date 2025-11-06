import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

// EDITABLE: Wedding date and time (IST timezone)
const WEDDING_DATE = new Date("2026-01-12T10:00:00+05:30");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showCelebration, setShowCelebration] = useState(false);
  const [confetti, setConfetti] = useState<
    Array<{ id: number; x: number; y: number; rotation: number; color: string }>
  >([]);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = WEDDING_DATE.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else if (difference <= 0 && !showCelebration) {
        // Countdown completed - trigger celebration!
        setShowCelebration(true);
        triggerCelebration();
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [showCelebration]);

  const triggerCelebration = () => {
    // Create massive confetti burst
    const newConfetti = Array.from({ length: 150 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 200 - 100,
      y: Math.random() * -150 - 50,
      rotation: Math.random() * 720,
      color: [
        "text-primary",
        "text-rose-gold-light",
        "text-accent",
        "text-champagne",
        "text-lavender",
      ][Math.floor(Math.random() * 5)],
    }));

    setConfetti(newConfetti);

    // Keep confetti for longer
    setTimeout(() => {
      setConfetti([]);
      // Trigger another burst
      setTimeout(triggerCelebration, 1000);
    }, 4000);
  };

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  const isCountdownComplete =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-accent/20 to-background relative overflow-hidden">
      {/* Celebration Overlay */}
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center"
          >
            {/* Celebration message */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 1 }}
              className="bg-card/95 backdrop-blur-md rounded-3xl shadow-2xl p-12 max-w-2xl mx-4 border-4 border-primary"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-center"
              >
                <div className="text-8xl mb-6">🎉💒🎊</div>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
                  The Day Has Arrived!
                </h2>
                <p className="text-2xl text-foreground mb-4">
                  Victor & Preethi's Wedding Day
                </p>
                <p className="text-xl text-muted-foreground italic">
                  "May your marriage be blessed with endless love and joy!"
                </p>
              </motion.div>
            </motion.div>

            {/* Confetti particles */}
            {confetti.map((particle) => (
              <motion.div
                key={particle.id}
                className={`absolute top-1/2 left-1/2 ${particle.color}`}
                initial={{
                  x: 0,
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                animate={{
                  x: particle.x * 12,
                  y: particle.y * 12,
                  opacity: 0,
                  scale: 0.3,
                  rotate: particle.rotation,
                }}
                transition={{
                  duration: 4,
                  ease: "easeOut",
                }}
              >
                {particle.id % 4 === 0 ? (
                  <Heart className="w-6 h-6" fill="currentColor" />
                ) : particle.id % 4 === 1 ? (
                  <Sparkles className="w-6 h-6" />
                ) : particle.id % 4 === 2 ? (
                  <div className="text-4xl">🌸</div>
                ) : (
                  <div className="w-3 h-3 rounded-full bg-current" />
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            {isCountdownComplete
              ? "It's Happening Today! 🎉"
              : "Counting Down to Forever"}
          </h2>
          <p className="text-lg text-muted-foreground">
            {isCountdownComplete
              ? "Victor & Preethi are getting married today!"
              : 'Time until we say "I do"'}
          </p>
        </motion.div>

        {!isCountdownComplete && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-lg"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={unit.value}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-2"
                  >
                    {String(unit.value).padStart(2, "0")}
                  </motion.div>
                </AnimatePresence>
                <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
                  {unit.label}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-foreground/70">
            January 12, 2026 • 10:00 AM IST
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;
