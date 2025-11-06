import { motion } from "framer-motion";
import EventCard from "./EventCard";
import { CalendarEvent } from "@/utils/calendar";
import { Church, Sparkles } from "lucide-react";

// EDITABLE: Update these event details
const events = [
  {
    title: "Engagement",
    date: "Sunday, January 11, 2026",
    time: "6:00 PM onwards",
    venue: "Karthikeya Mahal",
    address: "Sathy Rd, Karattadipalayam, Gobichettipalayam, Tamil Nadu",
    description: "Join us for our engagement ceremony",
    mapUrl:
      "https://maps.google.com/?q=Karthikeya+Mahal+Sathy+Rd+Karattadipalayam+Gobichettipalayam+Tamil+Nadu+638453",
    calendarEvent: {
      title: "Victor & Preethi - Engagement",
      description: "Join us for our engagement ceremony at CSI Church",
      location: "CSI Church, Gobichettipalayam",
      startTime: new Date("2026-01-11T18:00:00+05:30"), // 6:00 PM IST
      endTime: new Date("2026-01-11T20:00:00+05:30"), // 8:00 PM IST (estimated)
    } as CalendarEvent,
  },
  {
    title: "Wedding Ceremony",
    date: "Monday, January 12, 2026",
    time: "10:00 AM - 11:00 AM",
    venue: "CSI Church",
    address: "CSI Church, Gobichettipalayam ",
    description: "Witness our union in holy matrimony",
    mapUrl: "https://maps.google.com/?q=CSI+Church+Gobichettipalayam", // Update with exact location
    calendarEvent: {
      title: "Victor & Preethi - Wedding Ceremony",
      description: "Witness our union in holy matrimony at CSI Church",
      location: "CSI Church, Gobichettipalayam",
      startTime: new Date("2026-01-12T10:00:00+05:30"), // 10:00 AM IST
      endTime: new Date("2026-01-12T11:00:00+05:30"), // 11:00 AM IST
    } as CalendarEvent,
  },
  {
    title: "Reception",
    date: "Monday, January 12, 2026",
    time: "12:00 PM - 4:00 PM",
    venue: "Karthikeya Mahal",
    address: "Sathy Rd, Karattadipalayam, Gobichettipalayam, Tamil Nadu",
    description: "Celebrate with us at the reception",
    mapUrl:
      "https://maps.google.com/?q=Karthikeya+Mahal+Sathy+Rd+Karattadipalayam+Gobichettipalayam+Tamil+Nadu+638453",
    calendarEvent: {
      title: "Victor & Preethi - Reception",
      description: "Celebrate with us at the reception",
      location:
        "Karthikeya Mahal, Sathy Rd, Karattadipalayam, Gobichettipalayam, Tamil Nadu",
      startTime: new Date("2026-01-12T12:00:00+05:30"), // 12:00 PM IST
      endTime: new Date("2026-01-12T16:00:00+05:30"), // 4:00 PM IST
    } as CalendarEvent,
  },
];

const Events = () => {
  return (
    <section
      className="py-20 px-4 section-timeline relative overflow-hidden"
      id="events"
    >
      {/* Decorative stars */}
      <motion.div
        className="absolute top-20 left-10 opacity-20"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      >
        <Sparkles className="w-24 h-24 text-primary" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 opacity-20"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      >
        <Sparkles className="w-32 h-32 text-lavender" />
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
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <Church className="w-16 h-16 text-primary mx-auto" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Wedding Events
          </h2>
          <p className="text-lg text-muted-foreground">
            Join us in celebrating our special day
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-foreground/70 italic max-w-3xl mx-auto mt-6"
          >
            "And now these three remain: faith, hope and love. But the greatest
            of these is love."
            <br />
            <span className="text-primary font-semibold">
              — 1 Corinthians 13:13
            </span>
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
