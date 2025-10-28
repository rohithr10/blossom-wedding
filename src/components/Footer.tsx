import { motion } from "framer-motion";
import { Heart, Instagram, Phone, Cross } from "lucide-react";
import ConfettiButton from "./ConfettiButton";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background via-accent/20 to-secondary/30 py-16 px-4 border-t border-primary/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-10 left-10 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <Cross className="w-40 h-40 text-primary" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10 opacity-10"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        <Heart className="w-32 h-32 text-rose-gold-light" fill="currentColor" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          {/* Bless the Couple Button */}
          <div className="mb-12">
            <ConfettiButton />
          </div>

          {/* Final Blessing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-card/60 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 max-w-3xl mx-auto"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="inline-block mb-4"
            >
              <Heart
                className="w-10 h-10 text-primary mx-auto"
                fill="currentColor"
              />
            </motion.div>
            <p className="text-xl md:text-2xl font-playfair text-foreground italic mb-2">
              "May your marriage be filled with joy, love, and the presence of
              God."
            </p>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-border max-w-md mx-auto" />

          {/* Couple Names */}
          <h3 className="text-2xl md:text-3xl font-playfair font-bold text-foreground">
            Victor & Preethi
          </h3>

          {/* Bible Verse */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl font-playfair italic text-foreground/80 mb-2">
              "Therefore what God has joined together, let no one separate."
            </p>
            <p className="text-base text-primary font-semibold">— Mark 10:9</p>
          </div>

          {/* Copyright */}
          <div className="pt-6 space-y-2">
            <div className="flex items-center justify-center gap-2 text-foreground/70">
              <span>Made with</span>
              <Heart className="w-5 h-5 text-primary fill-primary" />
              <span>for Victor & Preethi</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Love Bloom Wedding. All rights
              reserved
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
