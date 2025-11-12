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

        <div className="grid md:grid-cols-1 gap-12">
          <motion.div
            key={1}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 * 0.2 }}
            className="bg-card rounded-2xl shadow-lg p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl  p-8 flex flex-col items-center transition-transform duration-300 hover:scale-105">
                {/* <img
                  src="/assets/family-groom.png"
                  alt="Groom's Family"
                  className="w-32 h-32 object-contain mb-4 opacity-90"
                /> */}
                <h3 className="text-2xl font-semibold text-gray-700">
                  Groom’s Family
                </h3>
                <p className="text-gray-500 mt-2">
                  With heartfelt blessings and love, We stand by Victor as he
                  begins this new journey.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 flex flex-col items-center transition-transform duration-300 hover:scale-105">
                {/* <img
                  src="/assets/family-bride.png"
                  alt="Bride's Family"
                  className="w-32 h-32 object-contain mb-4 opacity-90"
                /> */}
                <h3 className="text-2xl font-semibold text-gray-700">
                  Bride’s Family
                </h3>
                <p className="text-gray-500 mt-2">
                  Showering their blessings and love, We joyfully send Preethi
                  into her new chapter.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    // <section className="py-16 text-center bg-rose-50">
    //   <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Families</h2>
    //   <p className="text-gray-500 mb-10">
    //     With the blessings and love of our beloved families
    //   </p>

    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
    //     <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center transition-transform duration-300 hover:scale-105">
    //       <img
    //         src="/assets/family-groom.png"
    //         alt="Groom's Family"
    //         className="w-32 h-32 object-contain mb-4 opacity-90"
    //       />
    //       <h3 className="text-2xl font-semibold text-gray-700">
    //         Groom’s Family
    //       </h3>
    //       <p className="text-gray-500 mt-2">
    //         With heartfelt blessings and love, they stand by Victor as he begins
    //         this new journey.
    //       </p>
    //     </div>

    //     <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center transition-transform duration-300 hover:scale-105">
    //       <img
    //         src="/assets/family-bride.png"
    //         alt="Bride's Family"
    //         className="w-32 h-32 object-contain mb-4 opacity-90"
    //       />
    //       <h3 className="text-2xl font-semibold text-gray-700">
    //         Bride’s Family
    //       </h3>
    //       <p className="text-gray-500 mt-2">
    //         Showering their blessings and love, they joyfully send Preethi into
    //         her new chapter.
    //       </p>
    //     </div>
    //   </div>
    // </section>
  );
};

export default ParentsSection;
