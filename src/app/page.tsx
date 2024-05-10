import Image from "next/image";
import HomeHeroSection from "@/components/HomeHeroSection";
import HomeServiceSection from "@/components/HomeServiceSection";
import HomeContactSection from "@/components/HomeContactSection";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col space-y-32">
      <div className="flex flex-col space-y-8">
        <HomeHeroSection />
        <HomeServiceSection />
      </div>
      <HomeContactSection />
    </main>
  );
}
