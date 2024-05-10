"use client";

import Image from "next/image";
import Link from "next/link";

import { socials } from "@/config/contact";

export default function Socials() {
  return (
    <div className="flex flex-row space-x-2">
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.href}
        >
          <Image
            width={48}
            height={48}
            src={social.icon}
            alt={social.href}
          />
        </Link>
      ))}
    </div>
  );
}
