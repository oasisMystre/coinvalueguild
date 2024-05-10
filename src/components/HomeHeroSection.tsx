"use client";
import Image from "next/image";

import { IlSpiral } from "@/assets";

export default function HomeHeroSection() {
  return (
    <div className="self-center flex flex-col space-y-16 px-8 md:flex-row md:px-16 md:space-x-8 md:space-y-0">
      <div className="flex flex-col space-y-4 md:w-3/4">
        <div className="flex flex-col space-y-2">
          <h1 className="text-6xl font-extrabold">Coin Value Guild</h1>
          <div className="flex flex-col space-y-4 opacity-80">
            <p>
              We are a professional team of experts that specialises in project
              development, growth, community management and products and
              services to assist upcoming and existing project to scale to new
              heights through the provision of different s trategies based on
              the need of each projects.
            </p>
            <p>
              Coin value aims to provide the needed products, tools and services
              tailored directly to the needs of each Project for both web2 and
              web3 clients.
            </p>
          </div>
        </div>
        <div>
          <button className="bg-gradient-to-r from-secondary to-primary px-4 py-3 rounded">
            Join Community
          </button>
        </div>
      </div>
      <div>
        <Image
          src={IlSpiral}
          alt="spiral"
          className="animate-jump"
        />
      </div>
    </div>
  );
}
