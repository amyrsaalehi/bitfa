import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import Layout from "src/components/Layout";
import RadialEffect from "src/components/Shared/RadialEffect";
import ContactUsImage from "src/images/Contact-Us.png";

export default function ContactUs() {
  return (
    <Layout title={"تماس با بیتفا"}>
      <div className="relative container flex flex-col gap-2 py-16">
        <RadialEffect top={"120vh"} right={"45%"} className="bg-primary" />
        <div className="relative w-full max-h-[500px]">
          <Image
            src={ContactUsImage}
            alt={"تماس با بیتفا"}
            className="max-h-[500px] rounded-3xl"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <h1 className="text-3xl md:text-5xl text-center text-primary f-fat">
          تماس با بیتفا
        </h1>
        <p className="mt-4 leading-8 text-justify">
          مجموعه آموزشی بیتفا در نظر دارد مشاوره‌‌های رایگانی در زمینه آموزش،
          سرمایه‌گذاری و دوره‌های مجموعه بیتفا ارائه دهد تا سطح علمی شما عزیزان
          ارتقا یابد. در صورت نیاز برای دریافت مشاوره، لطفا اطلاعات تماس خود را
          در فرم زیر پر کرده تا کارشناسان ما در اسرع وقت با شما تماس بگیرند.
        </p>

        <div className="flex gap-4 mt-8">
          <Link
            href="mailto:info@bitfa.ir"
            className="btn btn-primary btn-outline"
          >
            <AiOutlineMail size={25} />
          </Link>
          <Link
            href="tel:+982122882007"
            className="btn btn-primary btn-outline"
          >
            <FiPhoneCall size={25} />
          </Link>
        </div>

        <h2 className="text-3xl md:text-5xl text-center text-primary f-fat mt-12">
          پیام شما به بیتفا
        </h2>

        <div className="flex items-center flex-wrap tracking-wider mt-12">
          <span>سلام من</span>
          <input
            type="text"
            placeholder="علی علوی"
            className="input input-ghost w-full max-w-[100px] text-center rounded-none tracking-wider my-4 border-transparent border-b-primary"
          />
          <span> با شماره تماس</span>

          <input
            type="text"
            placeholder="۰۹۱۲۰۰۰۰۰۰۰"
            className="input input-ghost w-full max-w-[120px] text-center rounded-none tracking-wider my-4 border-transparent border-b-primary"
          />
          <span>هستم.</span>
        </div>
        <div className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="موضوع پیام"
            className="input input-ghost w-full rounded-none tracking-wider my-4 border-transparent border-b-primary"
          />
          <textarea
            className="textarea textarea-ghost rounded-none tracking-wider my-4 border-transparent border-b-primary"
            placeholder="متن پیام شما"
            rows={5}
          ></textarea>
          <button className="self-end btn btn-primary btn-block sm:max-w-[150px]">
            ارسال پیام
          </button>
        </div>
      </div>
    </Layout>
  );
}
