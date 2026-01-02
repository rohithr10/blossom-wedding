import { motion, useScroll, useTransform } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import FloatingParticles from "./FloatingParticles";
import { Heart, Sparkles } from "lucide-react";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-hero">
      {/* Floating Particles */}
      <FloatingParticles />

      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-ivory" />
      </motion.div>

      {/* Decorative floating hearts */}
      <motion.div
        className="absolute top-20 left-10 md:left-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <Heart className="w-12 h-12 text-primary/20" fill="currentColor" />
      </motion.div>

      <motion.div
        className="absolute top-40 right-10 md:right-20"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Sparkles className="w-16 h-16 text-rose-gold-light" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-6"
        >
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-foreground mb-4 drop-shadow-lg">
              Victor{" "}
              <motion.span
                className="text-primary"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                style={{ display: "inline-block" }}
              >
                &
              </motion.span>{" "}
              Preethi
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl md:text-2xl text-foreground/80 font-light tracking-wide"
          >
            Are Getting Married
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg md:text-xl text-foreground/80 italic max-w-3xl mx-auto mt-8 px-4"
          >
            "Therefore what God has joined together, let no one separate."
            <br />
            <span className="text-primary font-semibold">— Mark 10:9</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="pt-8"
          >
            <motion.p
              className="text-3xl md:text-4xl font-playfair text-primary font-semibold drop-shadow-md"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
                delay: 2,
              }}
            >
              January 12, 2026
            </motion.p>
            <p className="text-lg md:text-xl text-foreground/70 mt-2">
              CSI St.Paul's Church
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="pt-12"
          >
            <motion.a
              href="#events"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium text-lg transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden group"
            >
              <span className="relative z-10">View Details</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: [-200, 200] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
