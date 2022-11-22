import Head from "next/head";
import { useEffect, useState } from "react";

import Logo from "./Logo";
import SwapTheme from "./SwapTheme";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar flex justify-between  ${
          navbar ? "bg-base-100/20 backdrop-blur shadow-lg" : "shadow-none"
        } fixed top-0 right-0 l-0 z-40 transition-shadow duration-300 max-w-full`}
      >
        <Logo />
        <div className="flex justify-end flex-1 gap-2 ">
          {/* <SearchInput /> */}
          {/* <div className="items-center hidden md:flex">
            {navLinks.map((link) => (
            <NavLink key={link.t} link={link} />
          ))}
          </div> */}
          <div className="flex justify-end items-center flex-1 lg:flex-none">
            {/* <ModalIcon
            nobg
            noclose
            nomobile
            top={-200}
            btnClass="flex lg:hidden justify-center items-center"
            btn={<AiOutlineSearch size={20} />}
            modal={<SearchModal search={search} changeSearch={changeSearch} />}
          /> */}
            <div className="block">
              <SwapTheme />
            </div>
            {/* <DropDown
            btn={
              address ? (
                <a className="btn btn-ghost btn-circle">
                  <Image
                    src="https://storage.googleapis.com/opensea-static/opensea-profile/27.png"
                    alt="Account"
                    className="rounded-full"
                    objectFit="cover"
                    width={24}
                    height={24}
                  />
                </a>
              ) : (
                <a className="btn btn-ghost btn-circle">
                  <BiUserCircle size={25} />
                </a>
              )
            }
            dropdownClass="dropdown-end hidden md:block"
            items={<UserDropDown />}
          /> */}
            {/* TODO */}
            {/* <ModalIcon
            btn={<BiWallet size={25} />}
            btnClass="hidden md:flex"
            modal={address ? <WalletModal /> : <ConnectWallet />}
          /> */}

            {/* <ModalIcon
            btnClass="rounded-full flex md:hidden justify-center items-center"
            modalClass="md:hidden"
            fullHeight
            btn={<HiMenuAlt2 size={25} />}
            modal={<DrawerModal navLinks={navLinks} />}
          /> */}
          </div>
        </div>
      </nav>
    </>
  );
}
