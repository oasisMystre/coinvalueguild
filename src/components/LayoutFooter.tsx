import Image from "next/image";
import Socials from "./Socials";

export default function LayoutFooter() {
  return (
    <footer className="flex flex-col items-center space-y-8 bg-gradient-to-t from-black to-black/10 p-32 md:flex-row">
      <div className="self-center">
        <Image
          src="/favicon.ico"
          width={48}
          height={48}
          alt="CoinValueGuild"
        />
      </div>
      <div className="self-center md:flex-1 md:flex md:flex-col md:items-center md:justify-center">
        <p className="capitalize opacity-80">© 2024. All Right Reserved.</p>
      </div>
      <div className="flex flex-row">
        <Socials />
      </div>
    </footer>
  );
}
