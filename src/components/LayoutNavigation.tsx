import Link from "next/link";
import { MdClose } from "react-icons/md";

import { layoutNavigations } from "@/config/navigation";
import clsx from "clsx";
import Socials from "./Socials";

type LayoutNavigationProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LayoutNavigation({
  visible,
  setVisible,
}: LayoutNavigationProps) {
  return (
    <div
      className={clsx(
        "inset-0 left-0 w-56 z-10 bg-black via-black/80 to-black/80 flex flex-col md:bg-transparent md:w-auto md:flex-1 md:flex-row md:items-center md:justify-center",
        visible ? "fixed animate-slide-in md:static" : "hidden pointer-events-none md:pointer-events-auto md:flex"
      )}
    >
      <div className="self-end md:hidden">
        <button
          className="p-4"
          onClick={() => setVisible(false)}
        >
          <MdClose className="text-xl" />
        </button>
      </div>
      <div className="flex flex-col md:flex-1 md:flex-row md:items-center md:justify-center md:space-x-4">
        {layoutNavigations.map((navigation, index) => (
          <Link
            key={index}
            href={navigation.href}
            className="p-4 cursor-pointer"
          >
            {navigation.name}
          </Link>
        ))}
      </div>
      <div className="px-4">
        <Socials />
      </div>
    </div>
  );
}
