import { motion } from "framer-motion";
import { Heart } from "lucide-react";

// EDITABLE: Update parent information here
const families = [
  {
    title: "Groom's Family",
    parents: [
      { relation: "Father", name: "Manova" },
      { relation: "Mother", name: "Delsi Manova" },
    ],
    sibling: { relation: "Brother", name: "Joshva" },
  },
  {
    title: "Bride's Family",
    parents: [
      { relation: "Father", name: "Christopher" },
      { relation: "Mother", name: "Joy Priya" },
    ],
    sibling: { relation: "Sister", name: "Kural Ovya" },
  },
];

const ParentsSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Our Families
          </h2>
          <p className="text-lg text-muted-foreground">
            With the blessings of our beloved families
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {families.map((family, familyIndex) => (
            <motion.div
              key={familyIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: familyIndex * 0.2 }}
              className="bg-card rounded-2xl shadow-lg p-8"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-foreground">
                  {family.title}
                </h3>
              </div>

              <div className="space-y-6">
                {/* Parents */}
                <div className="space-y-3">
                  {family.parents.map((parent, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3 border-b border-border last:border-0"
                    >
                      <span className="text-sm text-muted-foreground font-medium">
                        {parent.relation}
                      </span>
                      <span className="text-foreground font-semibold">
                        {parent.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Sibling */}
                {family.sibling && (
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between py-3">
                      <span className="text-sm text-muted-foreground font-medium">
                        {family.sibling.relation}
                      </span>
                      <span className="text-foreground font-semibold">
                        {family.sibling.name}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParentsSection;
