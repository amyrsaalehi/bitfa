import Image from "next/image";
import Link from "next/link";
import Chips from "src/components/Shared/Chips";
import Date from "./Date";
import Time from "./Time";

export default function NewsCard({ image, title }) {
  return (
    <Link
      href={"/news/what-is-nft"}
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
        <div className="flex flex-wrap justify-between items-center gap-1">
          <Time />
          <Date />
          <Chips title={"فوری"} color="error" noplus />
        </div>
      </div>
    </Link>
  );
}