import { useEffect, useState } from "react";
import Logo from "../Shared/Logo";
import SwapTheme from "./SwapTheme";
import Link from "next/link";
import ModalIcon from "../Shared/ModalIcon";
import DrawerModal from "./DrawerModal";

import { AiOutlineUser } from "react-icons/ai";
import { HiMenuAlt2 } from "react-icons/hi";
import { BiNews } from "react-icons/bi";
import { MdOutlineArticle } from "react-icons/md";
import { TbDeviceAnalytics } from "react-icons/tb";
import { RiVideoLine, RiBitCoinLine } from "react-icons/ri";

const navLinks = [
  {
    title: "اخبار",
    link: "/news",
    Icon: BiNews,
  },
  {
    title: "مقالات",
    link: "/articles",
    Icon: MdOutlineArticle,
  },
  {
    title: "تحلیل رمزارز ها",
    link: "/analysis",
    Icon: TbDeviceAnalytics,
  },
  {
    title: "ویدیو",
    link: "/videos",
    Icon: RiVideoLine,
  },
  {
    title: "بیتفاندا",
    link: "/bitfunda",
    Icon: RiBitCoinLine,
  },
];

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
    <nav
      className={`navbar flex justify-between  ${
        navbar ? "bg-base-100 shadow-lg" : "shadow-none"
      } fixed top-0 right-0 left-0 z-40 transition-shadow duration-300 max-w-full`}
    >
      <div className="flex items-center flex-1 gap-2 ">
        {/* <SearchInput /> */}
        <div className="flex items-center">
          <ModalIcon
            btnClass="rounded-full flex md:hidden justify-center items-center"
            modalClass="md:hidden"
            fullHeight
            btn={<HiMenuAlt2 size={25} />}
            modal={<DrawerModal navLinks={navLinks} />}
          />
          <SwapTheme />
          <Link className="btn btn-ghost btn-circle" href="/sign">
            <AiOutlineUser size={25} />
          </Link>
        </div>
        <div className="items-center gap-4 flex-row-reverse hidden md:flex">
          {navLinks.map(({ title, link }) => (
            <Link
              key={title}
              href={link}
              className="f-bold hover:text-primary transition-colors"
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
      <Logo />
    </nav>
  );
}
