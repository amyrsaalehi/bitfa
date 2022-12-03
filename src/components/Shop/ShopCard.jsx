import Image from "next/image";
import Link from "next/link";
import ArticleImage from "src/images/Article.png";

export default function ShopCard({
  image = ArticleImage,
  title = "دوره کریپتو",
}) {
  return (
    <Link
      href="/shop/free-course"
      className="card glass bg-base-300 transition-all shadow-sm hover:shadow-lg cursor-pointer"
    >
      <figure className="relative w-full p-2 px-3">
        <Image
          src={image}
          alt={title}
          placeholder="blur"
          className="rounded-2xl object-cover transition-transform hover:scale-110 hover:rounded-none"
          priority
        />
      </figure>
      <div className="card-body py-2 px-2 lg:px-4 gap-0">
        <h2 className="w-full card-title f-bold text-xl">{title}</h2>
        <div className="flex justify-end">
          <h3 className="bg-base-100 px-2 rounded-xl">
            <span className="f-bold text-lg">۲۱۰,۰۰۰</span> <span>تومان</span>
          </h3>
        </div>
        <div className="card-actions p-0 mt-2">
          <button className="btn btn-sm btn-block btn-primary">
            مشاهده و خرید دوره
          </button>
        </div>
      </div>
    </Link>
  );
}
