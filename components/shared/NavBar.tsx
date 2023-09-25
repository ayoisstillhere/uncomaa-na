"use client";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { navBarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const pathname = usePathname();
  return (
    <nav className="py-6 px-20 flex items-center justify-between w-full fixed top-0 left-0 right-0 z-10 bg-white shadow-md">
      <Link href="/">
        <Image src="assets/unnLogo.svg" alt="UNN Logo" width={48} height={48} />
      </Link>
      <div className="hidden lg:flex gap-6 font-bold text-[#828297] text-sm items-center">
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
        <div className="flex gap-4">
          <Link href="/">
            <Image
              src="assets/medicalLogo.svg"
              alt="Medical Logo"
              width={48}
              height={48}
            />
          </Link>
          <button className="px-6 py-2 bg-primary-green text-white rounded-md">
            Donate!
          </button>
        </div>
      </div>
      <div onClick={handleNav} className="block lg:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 "
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-black m-4">MENU</h1>
        <ul className="uppercase p-4">
          {navBarLinks.map((link) => {
            const isActive =
              (pathname.includes(link.route) && link.route.length > 1) ||
              pathname === link.route;
            return (
              <li className="p-4 border-b border-gray-600">
                <Link
                  href={link.route}
                  key={link.label}
                  className={`${
                    isActive && "text-primary-green"
                  } hover:text-primary-green`}
                >
                  <p className="font-medium" onClick={handleNav}>
                    {link.label}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
