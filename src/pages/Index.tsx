import { Helmet } from "react-helmet";
import Hero from "@/components/Hero";
import SaveTheDateModal from "@/components/SaveTheDateModal";
import OurStory from "@/components/OurStory";
import Events from "@/components/Events";
import Countdown from "@/components/Countdown";
import MapSection from "@/components/MapSection";
import BlessingsSection from "@/components/BlessingsSection";
import RSVPForm from "@/components/RSVPForm";
import PhotoGallery from "@/components/PhotoGallery";
import ParentsSection from "@/components/ParentsSection";
import Footer from "@/components/Footer";
import BackgroundMusic from "@/components/BackgroundMusic";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Love Bloom Wedding - Victor & Preethi</title>
        <meta
          name="description"
          content="Join us in celebrating the wedding of Victor and Preethi on January 12, 2026 at Karthikeya Mahal, Gobichettipalayam"
        />
        <meta
          property="og:title"
          content="Love Bloom Wedding - Victor & Preethi"
        />
        <meta
          property="og:description"
          content="Join us in celebrating the wedding of Victor and Preethi on January 12, 2026"
        />
        <meta
          name="twitter:title"
          content="Love Bloom Wedding - Victor & Preethi"
        />
        <meta
          name="twitter:description"
          content="Join us in celebrating the wedding of Victor and Preethi on January 12, 2026"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <BackgroundMusic />
        <SaveTheDateModal />
        <Hero />
        <OurStory />
        <Countdown />
        <Events />
        <MapSection />
        <BlessingsSection />
        <PhotoGallery />
        <ParentsSection />
        <RSVPForm />
        <Footer />
      </div>
    </>
  );
};

export default Index;
