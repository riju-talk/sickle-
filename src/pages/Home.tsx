import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/features/HeroSection";
import SystemDesignFlow from "@/components/features/SystemDesignFlow";
import VideoSection from "@/components/features/VideoSection";
import KeyContributions from "@/components/features/KeyContributions";
import DataPipeline from "@/components/features/DataPipeline";
import DatasetSection from "@/components/features/DatasetSection";
import PresentationSection from "@/components/features/PresentationSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-sage-50">
      <Navbar />
      <main>
        <HeroSection />
        <SystemDesignFlow />
        <VideoSection />
        <KeyContributions />
        <DataPipeline />
        <DatasetSection />
        <PresentationSection />
      </main>
      <Footer />
    </div>
  );
}
