"use client";

import Image from "next/image";

import { IlAds } from "@/assets";
import HomeHeroSection from "@/components/HomeHeroSection";
import HomeServiceSection from "@/components/HomeServiceSection";
import HomeContactSection from "@/components/HomeContactSection";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col space-y-32">
      <div className="flex flex-col space-y-16">
        <div className="space-y-4">
          <iframe
            src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover="
            width="100%"
            height="36px"
            scrolling="auto"
            marginWidth={0}
            marginHeight={0}
            frameBorder={0}
          />
          <div className="px-4">
            <Image
              src={IlAds}
              alt="ads"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-8">
          <HomeHeroSection />
          <HomeServiceSection />
        </div>
      </div>
      <HomeContactSection />
    </main>
  );
}
