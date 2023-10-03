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
    <>
      <nav className="py-4 flex items-center justify-between w-full absolute top-0 left-0 right-0 z-10 bg-transparent p-2">
        <Link href="/">
          <div className="flex flex-col items-center justify-center text-center gap-1">
            <div className="flex gap-4">
              <Image
                src="assets/unnLogo.svg"
                alt="UNN Logo"
                width={36}
                height={36}
              />
              <Image
                src="assets/medicalLogo.svg"
                alt="Medical Logo"
                width={30}
                height={30}
              />
            </div>
            {/* <p className="text-white text-[0.4rem]">
              University of Nigeria College of Medicine Alumni Association NA
            </p> */}
          </div>
        </Link>
        <div onClick={handleNav} className="block lg:hidden">
          {nav ? <div></div> : <AiOutlineMenu size={20} color="white" />}
        </div>
        <div className="hidden lg:flex gap-10 text-white text-xs items-center px-10">
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
        <div className="lg:flex gap-2 hidden">
          <button className="px-[18px] py-[11px] bg-primary-green text-white font-normal text-xs rounded-[5px]">
            Donate!
          </button>
          <button className="px-[18px] py-[11px] bg-primary-green text-white font-normal text-xs rounded-[5px]">
            Join
          </button>
          <button className="px-[18px] py-[11px] bg-primary-green text-white font-normal text-xs rounded-[5px]">
            Dues
          </button>
        </div>

        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[100%] h-[100vh] border-r border-r-gray-900 bg-white ease-in-out duration-500 "
              : "fixed left-[-100%]"
          }
        >
          {nav ? (
            <div className="fixed right-2 top-8 lg:hidden" onClick={handleNav}>
              <AiOutlineClose size={20} />
            </div>
          ) : (
            <div></div>
          )}
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
      {!nav ? (
        <div className="mt-20 flex items-center justify-between w-full absolute top-0 left-0 right-0 z-10 bg-transparent p-2">
          <div className="lg:hidden flex gap-2 justify-between w-full">
            <button className="flex-grow py-4 bg-primary-green text-white font-normal text-xs rounded-[5px]">
              Donate!
            </button>
            <button className="flex-grow py-4 bg-primary-green text-white font-normal text-xs rounded-[5px]">
              Join
            </button>
            <button className="flex-grow py-4 bg-primary-green text-white font-normal text-xs rounded-[5px]">
              Dues
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default NavBar;
