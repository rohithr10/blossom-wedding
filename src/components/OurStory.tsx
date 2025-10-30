import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Users, Church, Sparkles, Cross } from "lucide-react";

// EDITABLE: Replace these stories with your actual story
const timeline = [
  {
    icon: Users,
    title: "Beginnings",
    date: "2023",
    description:
      "Our paths crossed for the first time, and we knew there was something special between us.",
  },
  {
    icon: Heart,
    title: "Engagement",
    date: "January 11, 2026",
    description:
      "Surrounded by family and friends, we committed to spend our lives together in God's blessing.",
  },
  {
    icon: Church,
    title: "The Wedding",
    date: "January 12, 2026",
    description:
      "We unite in holy matrimony, beginning our journey as husband and wife.",
  },
];

const OurStory = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section
      className="py-20 px-4 section-story relative overflow-hidden"
      id="story"
    >
      {/* Decorative cross */}
      <motion.div
        className="absolute top-10 right-10 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <Cross className="w-32 h-32 text-primary" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          style={{ scale }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <Heart
              className="w-16 h-16 text-primary mx-auto"
              fill="currentColor"
            />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Our Love Story
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey of faith, love, and God's perfect timing
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-foreground/70 italic max-w-3xl mx-auto mt-6"
          >
            "Love is patient, love is kind. It does not envy, it does not boast,
            it is not proud."
            <br />
            <span className="text-primary font-semibold">
              — 1 Corinthians 13:4–7
            </span>
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            style={{ originY: 0 }}
          />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <motion.div
                    className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary/10"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.2, type: "spring" }}
                      className="inline-block mb-2"
                    >
                      <Sparkles className="w-6 h-6 text-primary" />
                    </motion.div>
                    <p className="text-sm text-primary font-semibold mb-2">
                      {item.date}
                    </p>
                    <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </motion.div>
                </div>

                {/* Icon */}
                <motion.div
                  className="relative flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center shadow-lg relative"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 hsl(var(--primary) / 0.4)",
                        "0 0 0 10px hsl(var(--primary) / 0)",
                      ],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      delay: index * 0.3,
                    }}
                  >
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </motion.div>
                </motion.div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
