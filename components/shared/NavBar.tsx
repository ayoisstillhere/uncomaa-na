"use client";

import { navBarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <div className="mb-20">
      <nav className="py-6 px-20 flex items-center justify-between">
        <Link href="/">
          <Image
            src="assets/unnLogo.svg"
            alt="UNN Logo"
            width={48}
            height={48}
          />
        </Link>
        <div className="flex gap-6 font-bold text-[#828297] text-sm">
          {navBarLinks.map((link) => {
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
          <button className="px-6 my-1 bg-primary-green text-white rounded-md">
            Donate!
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
