"use client";

import Image from "next/image";
import { MdMenu } from "react-icons/md";

import LayoutNavigation from "./LayoutNavigation";
import { useState } from "react";

export default function LayoutHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center px-8 py-4 md:px-16 md:space-x-8">
      <div className="flex-1 md:flex-none">
        <Image
          src="/favicon.ico"
          width={40}
          height={40}
          alt="CoinValueGuild"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
      <LayoutNavigation
        visible={menuOpen}
        setVisible={setMenuOpen}
      />
      <div onClick={() => setMenuOpen(!menuOpen)}>
        <button className="p-2 bg-white/10 border border-white/20 rounded-md cursor-pointer">
          <MdMenu className="text-2xl" />
        </button>
      </div>
    </header>
  );
}
