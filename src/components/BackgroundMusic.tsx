// import { useState, useRef, useEffect } from 'react';
// import { Music, Volume2, VolumeX } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// const BackgroundMusic = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [showControls, setShowControls] = useState(true);
//   const audioRef = useRef<HTMLAudioElement>(null);

//   // Note: Add your wedding music file to public folder
//   // Example: public/wedding-music.mp3
//   const musicUrl = '/wedding-music.mp3';

//   useEffect(() => {
//     const audio = audioRef.current;
//     if (!audio) return;

//     if (isPlaying) {
//       audio.play().catch(err => {
//         console.log('Audio play failed:', err);
//         setIsPlaying(false);
//       });
//     } else {
//       audio.pause();
//     }
//   }, [isPlaying]);

//   const toggleMusic = () => {
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <>
//       <audio ref={audioRef} loop>
//         <source src={musicUrl} type="audio/mpeg" />
//       </audio>

//       <AnimatePresence>
//         {showControls && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             className="fixed bottom-8 right-8 z-50"
//           >
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={toggleMusic}
//               className="relative group bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-lg transition-all duration-300"
//               aria-label={isPlaying ? 'Pause music' : 'Play music'}
//             >
//               {isPlaying ? (
//                 <Volume2 className="w-6 h-6" />
//               ) : (
//                 <VolumeX className="w-6 h-6" />
//               )}

//               <motion.div
//                 animate={isPlaying ? { scale: [1, 1.2, 1] } : {}}
//                 transition={{ repeat: Infinity, duration: 1.5 }}
//                 className="absolute inset-0 rounded-full bg-primary opacity-30 blur-md"
//               />
//             </motion.button>

//             {/* Music note animation when playing */}
//             {isPlaying && (
//               <motion.div
//                 initial={{ opacity: 0, y: 0 }}
//                 animate={{ opacity: [0, 1, 0], y: -30 }}
//                 transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
//                 className="absolute -top-8 left-1/2 -translate-x-1/2"
//               >
//                 <Music className="w-5 h-5 text-primary" />
//               </motion.div>
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default BackgroundMusic;

import { useState, useRef, useEffect } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import weddingMusic from "../assets/music/wedding-music.mp3";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [autoplayAttempted, setAutoplayAttempted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const musicUrl = weddingMusic;

  // Try autoplay when component mounts - EVERY TIME
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.7;
    audio.muted = false;
    setAutoplayAttempted(true);

    // Multiple attempts to play
    const attemptPlay = async () => {
      try {
        // First attempt
        await audio.play();
        setIsPlaying(true);
        console.log("Autoplay successful");
      } catch (err) {
        console.log("Autoplay blocked:", err);
        setIsPlaying(false);

        // Try again after a short delay
        setTimeout(async () => {
          try {
            await audio.play();
            setIsPlaying(true);
            console.log("Delayed autoplay successful");
          } catch (err2) {
            console.log("Delayed autoplay also failed:", err2);
          }
        }, 500);
      }
    };

    // Try immediately
    attemptPlay();

    // Also try after DOM is fully loaded
    setTimeout(attemptPlay, 100);
    setTimeout(attemptPlay, 1000);
  }, []); // Empty dependency array - runs on every mount

  // Handle play/pause when isPlaying state changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((err) => {
        console.log("Play failed:", err);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const toggleMusic = () => {
    // setIsPlaying((prev) => !prev);
    setIsPlaying(!isPlaying);
  };

  // Hide controls after some time if music is playing
  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        setShowControls(false);
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      setShowControls(true);
    }
  }, [isPlaying]);

  // Show controls on mouse movement
  useEffect(() => {
    const handleMouseMove = () => {
      setShowControls(true);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smart fallback: only try to play on popup interaction if autoplay failed
  useEffect(() => {
    if (autoplayAttempted && !isPlaying) {
      let hasTriedFallback = false;

      const handlePopupInteraction = async () => {
        if (hasTriedFallback) return;
        hasTriedFallback = true;

        const audio = audioRef.current;
        if (audio && audio.paused) {
          try {
            await audio.play();
            setIsPlaying(true);
            console.log("Popup interaction autoplay successful");
          } catch (err) {
            console.log("Popup interaction autoplay failed:", err);
          }
        }

        // Remove listener after first attempt
        document.removeEventListener("click", handlePopupInteraction);
      };

      // Only listen for clicks (popup interaction)
      document.addEventListener("click", handlePopupInteraction);

      return () => {
        document.removeEventListener("click", handlePopupInteraction);
      };
    }
  }, [autoplayAttempted, isPlaying]);

  return (
    <>
      <audio ref={audioRef} loop autoPlay muted={false} preload="auto">
        <source src={musicUrl} type="audio/mpeg" />
      </audio>

      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMusic}
              className="relative group bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-lg transition-all duration-300"
              aria-label={isPlaying ? "Pause music" : "Play music"}
            >
              {isPlaying ? (
                <Volume2 className="w-6 h-6" />
              ) : (
                <VolumeX className="w-6 h-6" />
              )}

              <motion.div
                animate={isPlaying ? { scale: [1, 1.2, 1] } : {}}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute inset-0 rounded-full bg-primary opacity-30 blur-md"
              />
            </motion.button>

            {isPlaying && (
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: [0, 1, 0], y: -30 }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                className="absolute -top-8 left-1/2 -translate-x-1/2"
              >
                <Music className="w-5 h-5 text-primary" />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BackgroundMusic;
