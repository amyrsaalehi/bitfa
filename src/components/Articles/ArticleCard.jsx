import Image from "next/image";
import Link from "next/link";
import Chips from "src/components/Shared/Chips";
import Date from "./Date";
import Time from "./TIme";

export default function ArticleCard({ image, title }) {
  return (
    <Link
      href={"/articles/what-is-nft"}
      className="card glass bg-base-200/60 transition-all shadow-md hover:shadow-xl cursor-pointer"
    >
      <figure className="relative">
        <Image
          src={image}
          alt={title}
          placeholder="blur"
          className="rounded-lg"
          priority
          style={{
            objectFit: "cover",
          }}
        />
      </figure>
      <div className="card-body p-2">
        <h2 className="card-title f-bold text-xl px-2 lg:px-4 mb-2">{title}</h2>
        <div className="px-2 lg:px-4 mb-4"></div>
        <div className="flex flex-wrap items-center gap-3">
          <Time />
          <Date />
          <Chips title={"پیشرفته"} color="error" noplus />
        </div>
      </div>
    </Link>
  );
}
