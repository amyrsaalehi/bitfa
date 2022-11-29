import { FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import FooterImage from "src/images/Bitfa-Footer.png";

export default function Footer() {
  return (
    <footer className="bg-base-200">
      <div className="container footer p-10 text-base-content">
        <div>
          <span className="footer-title text-2xl">دسترسی آسان</span>
          <a className="link link-hover">خبر فوری</a>
          <a className="link link-hover">آموزش صرافی‌ها</a>
          <a className="link link-hover">مفاهیم پایه</a>
          <a className="link link-hover">اقتصاد</a>
        </div>
        <div>
          <span className="footer-title text-2xl">محصولات</span>
          <a className="link link-hover">فروشگاه</a>
          <a className="link link-hover">بیتفاندا</a>
          <a className="link link-hover">کریپتوشناسی</a>
          <a className="link link-hover">بیتفا ایر</a>
        </div>
        <div>
          <span className="footer-title text-2xl">بیتفا</span>
          <a className="link link-hover">درباره ما</a>
          <a className="link link-hover">تماس با ما</a>
          {/* <a className="link link-hover">Cookie policy</a> */}
        </div>
      </div>
      <div className="container footer px-10 py-4 border-t text-base-content border-base-300">
        <div className="items-center grid-flow-col">
          <div className="relative flex flex-col">
            <Image src={FooterImage} alt="بیتفا" width={100} height={20} />
            <p>استفاده از مطالب با ذکر منبع بلامانع است.</p>
          </div>
        </div>
        <div className="md:place-self-center md:justify-self-end">
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
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>
            تمامی حقوق مادی و معنوی این وبسایت متعلق به مجموعه{" "}
            <span className="f-bold text-primary">بیتفا</span> می‌باشد.
          </p>
        </div>
      </footer>
    </footer>
  );
}
