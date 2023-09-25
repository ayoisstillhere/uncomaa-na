"use client";

import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="mt-10 bg-white text-black p-7 rounded-lg flex items-center justify-between">
      <Link href="/">
        <Image src="assets/unnLogo.svg" alt="UNN Logo" width={48} height={48} />
      </Link>
      <div className="flex gap-4 font-medium text-[#828297] text-sm">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`${
                isActive && "text-primary-green"
              } hover:text-primary-green`}
            >
              <p>{link.label}</p>
            </Link>
          );
        })}
      </div>
      <div className="flex gap-6">
        <Image
          src="assets/medicalLogo.svg"
          alt="medical"
          width={48}
          height={48}
        />
        <button className="px-7 py-4 bg-primary-green text-white rounded-md">
          Donate!
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
