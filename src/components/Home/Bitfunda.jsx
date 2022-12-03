import Image from "next/image";
import Link from "next/link";
import BitfundaImage from "src/images/Bitfunda.png";

export default function Bitfunda() {
  return (
    <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-2 lg:px-4 mt-8">
      <div className="col-span-2">
        <div className="relative h-[300px] overflow-hidden">
          <Image
            src={BitfundaImage}
            alt="بیتفاندا"
            className="rounded-2xl object-contain h-[300px] scale-110"
          />
        </div>
      </div>
      <div className="col-span-3">
        <h2 className="divider f-bold text-3xl md:text-4xl px-4 lg:px-0">
          بیتفاندا
        </h2>
        <p className="leading-8 text-justify my-8 px-4 lg:px-0">
          حتما با خودتون میگین که در زمان هایی که بازار ارزهای دیجیتال منفی هست
          و ریزش های شدیدی داریم نمیشه از بازار سود گرفت، اما باید بگیم که اصلا
          اینطور نیست! شما اگر دانش بنیادی خوبی داشته باشین و به خوبی بتونین از
          تحلیل فانداکنتال استفاده کنید، میتونین پروژه ها و ارز های سود آوری رو
          پیدا کنید و حتی در بازار منفی هم سودده باشین
        </p>
        <div className="flex justify-center px-4 lg:px-0">
          <Link
            href={"/bitfunda"}
            className="btn btn-block md:btn-wide btn-primary btn-outline "
          >
            اطلاعات بیشتر
          </Link>
        </div>
      </div>
    </div>
  );
}
