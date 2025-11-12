import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

import location1 from "../assets/location1.png";
import location2 from "../assets/location2.png";

// EDITABLE: Update these with actual locations and Google Maps API key
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";

const locations = [
  {
    name: "CSI St.Paul Church",
    address: "CSI St.Paul Church, Gobichettipalayam, Tamil Nadu ",
    image: location2,
    mapUrl: "https://maps.google.com/?q=CSI+Church+Gobichettipalayam",
    // Update with actual coordinates when available
    embedUrl: `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=CSI+Church+Gobichettipalayam`,
  },
  {
    name: "Karthikeya Mahal",
    address: "Sathy Rd, Karattadipalayam, Gobichettipalayam, Tamil Nadu",
    image: location1,
    mapUrl:
      "https://maps.google.com/?q=Karthikeya+Mahal+Sathy+Rd+Karattadipalayam+Gobichettipalayam+Tamil+Nadu+638453",
    embedUrl: `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=Karthikeya+Mahal+Sathy+Rd+Karattadipalayam+Gobichettipalayam+Tamil+Nadu+638453`,
  },
];

const MapSection = () => {
  return (
    <section
      className="py-20 px-4 section-story relative overflow-hidden"
      id="venue"
    >
      {/* Decorative cross and light animations */}
      <motion.div
        className="absolute top-10 left-10 opacity-20"
        animate={{
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <MapPin className="w-24 h-24 text-primary" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, y: 50 }}
            whileInView={{ scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <Navigation className="w-16 h-16 text-primary mx-auto" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Wedding Venue
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Join us at our beautiful venue
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-foreground/70 italic max-w-3xl mx-auto"
          >
            "Let all that you do be done in love."
            <br />
            <span className="text-primary font-semibold">
              — 1 Corinthians 16:14
            </span>
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 border border-primary/10"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Map */}
                <div className="h-80 md:h-auto relative">
                  {GOOGLE_MAPS_API_KEY ? (
                    <iframe
                      src={location.embedUrl}
                      className="w-full h-full"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map of ${location.name}`}
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <div className="text-center p-8 w-full h-full">
                        <a
                          href={location.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full h-full"
                        >
                          <img
                            src={location.image}
                            alt="Location Icon"
                            className="w-full h-full object-cover rounded-lg opacity-70 hover:opacity-100 transition-opacity duration-300"
                          />
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
                    {location.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {location.address}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <motion.a
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl group"
                    >
                      <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      Get Directions
                    </motion.a>
                  </div>

                  <div className="border-t border-border pt-6">
                    <p className="text-sm font-medium text-foreground mb-3">
                      Scan QR Code for Directions:
                    </p>
                    <div className="bg-white p-4 rounded-lg inline-block">
                      <QRCodeSVG value={location.mapUrl} size={150} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapSection;
