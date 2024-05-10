"use client";
import Image from "next/image";
import { contacts } from "@/config/contact";

export default function HomeContactSection() {
  return (
    <div
      id="contact-us"
      className="flex flex-col bg-gradient-to-r from-secondary to-primary px-8 py-24"
    >
      <div className="self-center flex flex-col space-y-4">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="flex space-x-8 items-center bg-black/80 p-8 rounded-xl"
          >
            <div className="flex-1 opacity-80">{contact.description}</div>
            <div className="shrink-0">
              <button>
                <Image
                  src={contact.icon}
                  width={48}
                  height={48}
                  alt={contact.description}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
