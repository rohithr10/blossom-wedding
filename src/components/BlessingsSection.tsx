import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const bibleVerses = [
  {
    text: "Be completely humble and gentle; be patient, bearing with one another in love.",
    reference: "Ephesians 4:2",
  },
  {
    text: "Above all, love each other deeply, because love covers over a multitude of sins.",
    reference: "1 Peter 4:8",
  },
  {
    text: "Two are better than one… If either of them falls down, one can help the other up.",
    reference: "Ecclesiastes 4:9–10",
  },
  {
    text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",
    reference: "1 Corinthians 13:4",
  },
  {
    text: "Therefore what God has joined together, let no one separate.",
    reference: "Mark 10:9",
  },
];

const BlessingsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bibleVerses.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % bibleVerses.length);
  };

  const goToPrevious = () => {
    setIsAutoPlay(false);
    setCurrentIndex(
      (prev) => (prev - 1 + bibleVerses.length) % bibleVerses.length
    );
  };

  return (
    <section
      className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-background via-accent/30 to-background"
      id="blessings"
    >
      {/* Glowing background effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-gold-light/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <BookOpen className="w-16 h-16 text-primary mx-auto" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Blessings & Verses
          </h2>
          <p className="text-lg text-muted-foreground">
            Words of love and wisdom from the Holy Scripture
          </p>
        </motion.div>

        {/* Verse Carousel */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="bg-card/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border border-primary/20 relative overflow-hidden"
            >
              {/* Decorative sparkles */}
              <motion.div
                className="absolute top-4 right-4 opacity-40"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              >
                <Sparkles className="w-8 h-8 text-primary" />
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-4 opacity-40"
                animate={{
                  rotate: [360, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-rose-gold-light" />
              </motion.div>

              <p className="text-xl md:text-2xl lg:text-3xl font-playfair text-foreground text-center mb-6 leading-relaxed">
                "{bibleVerses[currentIndex].text}"
              </p>
              <p className="text-lg md:text-xl text-primary font-semibold text-center">
                — {bibleVerses[currentIndex].reference}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 hover:bg-primary/10"
            aria-label="Previous verse"
          >
            <ChevronLeft className="w-8 h-8 text-primary" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 hover:bg-primary/10"
            aria-label="Next verse"
          >
            <ChevronRight className="w-8 h-8 text-primary" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {bibleVerses.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlay(false);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-primary/30 hover:bg-primary/50"
              }`}
              aria-label={`Go to verse ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlessingsSection;
