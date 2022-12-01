import Image from "next/image";
import Link from "next/link";
import Layout from "src/components/Layout";
import ShopCard from "src/components/Shop/ShopCard";
import ArticleImage from "src/images/Article.png";

export default function ShopPage() {
  return (
    <Layout title={"فروشگاه"}>
      <div className="max-w-[1280px] mx-auto flex flex-col py-16">
        <div className="breadcrumbs mt-2 px-4">
          <ul>
            <li>
              <Link href="/">خانه</Link>
            </li>
            <li className="text-base-content/60">فروشگاه</li>
          </ul>
        </div>
        <h1 className="f-fat text-5xl text-center my-8 px-4">فروشگاه بیتفا</h1>
        <div className="relative w-full max-h-[400px] rounded-3xl transition-shadow cursor-pointer shadow-sm hover:shadow-xl overflow-hidden">
          <Image
            src={ArticleImage}
            alt={"محصول"}
            className="max-h-[400px] rounded-3xl transition-transform hover:scale-105"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="masonary gap-4 mt-12 px-4">
          {[...Array(12).keys()].map((key) => {
            return <ShopCard key={key} />;
          })}
        </div>
      </div>
    </Layout>
  );
}
