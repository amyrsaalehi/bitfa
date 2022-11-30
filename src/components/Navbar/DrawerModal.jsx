import Link from "next/link";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

export default function DrawerModal({ navLinks }) {
  return (
    <div className="h-full flex flex-col justify-between items-start">
      <ul className="p-2 overflow-y-auto bg-base-100 text-base-content w-full">
        {navLinks.map(({ title, link, Icon }) => (
          <li key={link} className="w-full">
            <Link
              href={link}
              className="btn btn-ghost normal-case pl-2 flex items-center justify-start gap-2 w-full"
            >
              <Icon size={18} />
              <span className="text-lg font-semibold">{title}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="w-full flex flex-col gap-2">
        <Link href="/" className="btn btn-block btn-primary">
          شرکت در دوره رایگان
        </Link>

        <Link
          href="/coins"
          className="relative btn btn-block btn-outline btn-primary"
        >
          <span>قیمت رمزارز ها</span>
          <div className="absolute -top-0.5 -left-0.5 w-2 h-2 rounded-full animate-ping bg-primary" />
        </Link>

        <div className="flex justify-evenly mt-4">
          <a className="btn btn-circle btn-ghost">
            <FaTelegramPlane size={25} />
          </a>
          <a className="btn btn-circle btn-ghost">
            <AiFillInstagram size={25} />
          </a>
          <a className="btn btn-circle btn-ghost">
            <FaDiscord size={25} />
          </a>
          <a className="btn btn-circle btn-ghost">
            <AiOutlineTwitter size={28} />
          </a>
          <a className="btn btn-circle btn-ghost">
            <AiFillYoutube size={25} />
          </a>
        </div>
      </div>
    </div>
  );
}
