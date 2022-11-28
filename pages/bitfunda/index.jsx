import Image from "next/image";
import BitfundaCard from "src/components/Bitfunda/BitfundaCard";
import Opportunities from "src/components/Bitfunda/Opportunities";
import Percentages from "src/components/Bitfunda/Percentages";
import Layout from "src/components/Layout";
import ArticleImage from "src/images/Article.png";
import BitfundaImage from "src/images/Bitfunda.png";

export default function BitfundaPage() {
  return (
    <Layout title={"بیتفاندا"}>
      <div className="flex flex-col py-8">
        <div className="flex flex-col lg:flex-row gap-8 px-2 lg:px-8 mb-10">
          <div className="relative h-[60vh] lg:h-[86vh] overflow-hidden">
            <Image
              src={BitfundaImage}
              alt="بیتفاندا"
              className="rounded-2xl object-contain h-[60vh] lg:h-[86vh] scale-110"
            />
          </div>
          <div className="flex flex-col gap-4 lg:pt-16">
            <h1 className="f-fat text-center text-6xl text-shadow">بیتفاندا</h1>
            <h2 className="f-bold text-center text-primary text-2xl">
              بازار ارزهای دیجیتال همیشه سود میده
            </h2>
            <p className="leading-8 mb-8 text-justify">
              حتما با خودتون میگین که در زمان هایی که بازار ارزهای دیجیتال منفی
              هست و ریزش های شدیدی داریم نمیشه از بازار سود گرفت، اما باید بگیم
              که اصلا اینطور نیست! شما اگر دانش بنیادی خوبی داشته باشین و به
              خوبی بتونین از تحلیل فانداکنتال استفاده کنید، میتونین پروژه ها و
              ارز های سود آوری رو پیدا کنید و حتی در بازار منفی هم سودده باشین
            </p>
            <Percentages />
            <Opportunities />
          </div>
        </div>
        <div className="container grid grid-cols-1 gap-12 mt-2">
          {[0, 1, 2, 3, 4, 5].map((_, idx, arr) => (
            <BitfundaCard
              key={idx}
              image={ArticleImage}
              title={arr.length - idx}
              defaultOpen={idx === 0}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <div className="btn-group" dir="ltr">
            <button className="btn btn-active">1</button>
            <button className="btn ">2</button>
            <button className="btn">3</button>
            <button className="btn">4</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
