import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/wedding1.png";
import gallery5 from "@/assets/wedding2.png";
import gallery6 from "@/assets/wedding3.png";
import gallery7 from "@/assets/wedding4.png";
import gallery8 from "@/assets/coupleimage.png";
import gallery9 from "@/assets/coupleimage2.png";
import gallery10 from "@/assets/coupleimage3.png";
import gallery11 from "@/assets/coupleimage4.png";

// EDITABLE: Add more gallery images here
const galleryImages = [
  {
    src: gallery8,
    alt: "Embrace of Forever",
    caption: "Embrace of Forever",
  },
  {
    src: gallery11,
    alt: "Whispers of Togetherness",
    caption: "Whispers of Togetherness",
  },
  {
    src: gallery10,
    alt: "Bound by Love",
    caption: "Bound by Love",
  },
];

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  return (
    <section className="py-20 px-4 bg-accent/20" id="gallery">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            A Glimpse Into Tomorrow
          </h2>
          <p className="text-lg text-muted-foreground">
            The future unfolds where innovation meets imagination.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-medium p-6">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50"
              onClick={closeLightbox}
            />

            {/* Lightbox Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 text-white hover:text-primary transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-12 h-12" />
              </button>

              {/* Image */}
              <div className="max-w-5xl w-full">
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                />
                <p className="text-white text-center mt-4 text-lg">
                  {galleryImages[selectedImage].caption}
                </p>
                <p className="text-white/60 text-center mt-2">
                  {selectedImage + 1} / {galleryImages.length}
                </p>
              </div>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 text-white hover:text-primary transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-12 h-12" />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;
