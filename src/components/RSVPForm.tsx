import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// EDITABLE: Update contact information
const GROOM_PHONE = "7708914890";
const BRIDE_PHONE = "7358887333";
const RSVP_EMAIL = "victorcalwin@gmail.com"; // Update with actual email

const RSVPForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Option 1: Open mailto link with pre-filled data
      const subject = encodeURIComponent(`RSVP: ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nNumber of Guests: ${formData.guests}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${RSVP_EMAIL}?subject=${subject}&body=${body}`;

      // Option 2: You can replace this with an actual API call to a serverless function
      // Example: await fetch('/api/rsvp', { method: 'POST', body: JSON.stringify(formData) });

      toast({
        title: "Thank you for your RSVP!",
        description: "We look forward to celebrating with you.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        guests: "1",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description:
          "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="py-20 px-4 section-romantic relative overflow-hidden"
      id="rsvp"
    >
      {/* Decorative hearts */}
      <motion.div
        className="absolute top-10 left-5 opacity-10"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 15, 0],
        }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <Heart className="w-32 h-32 text-primary" fill="currentColor" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-5 opacity-10"
        animate={{
          y: [0, 30, 0],
          rotate: [0, -15, 0],
        }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      >
        <Heart className="w-40 h-40 text-primary" fill="currentColor" />
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
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <Heart
              className="w-16 h-16 text-primary mx-auto animate-float"
              fill="currentColor"
            />
          </motion.div>

          {/* <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            RSVP
          </h2>
          <p className="text-lg text-muted-foreground">
            Please let us know if you can join us on our special day
          </p> */}
        </motion.div>

        <div className="grid  gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">
                Contact Us
              </h3>
              <div className="space-y-4">
                <a
                  href={`tel:${GROOM_PHONE}`}
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Benjamin Timothy</p>
                    <p className="text-muted-foreground">{GROOM_PHONE}</p>
                  </div>
                </a>

                <a
                  href={`tel:${BRIDE_PHONE}`}
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Joy Priya</p>
                    <p className="text-muted-foreground">{BRIDE_PHONE}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${RSVP_EMAIL}`}
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">{RSVP_EMAIL}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-accent/30 rounded-2xl p-6">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> If you
                prefer, you can also reach out to us directly via phone or
                WhatsApp. We'd love to hear from you!
              </p>
            </div>
          </motion.div>

          {/* RSVP Form */}
          {/* <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label
                  htmlFor="guests"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Number of Guests *
                </label>
                <select
                  id="guests"
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Any special requests or messages..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 disabled:from-primary/50 disabled:to-primary/40 text-primary-foreground rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-2xl group"
              >
                {isSubmitting ? "Sending..." : "Send RSVP"}
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default RSVPForm;
