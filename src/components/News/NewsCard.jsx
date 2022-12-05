import Image from "next/image";
import Link from "next/link";
import Chips from "src/components/Shared/Chips";
import Date from "./Date";
import Time from "./TIme";
import ArticleImage from "src/images/Article.png";

export default function NewsCard({
  title,
  content,
  route,
  image,
  level,
  alt,
  date,
  readingTime,
}) {
  const color = () => {
    switch (level) {
      case "متوسط":
        return "warning";
      case "مبتدی":
        return "success";
      case "حرفه ای":
        return "error";
      default:
        return "warning";
    }
  };
  return (
    <Link
      href={`/news${route}`}
      className="card glass bg-base-200/60 transition-all shadow-md hover:shadow-xl cursor-pointer"
    >
      <figure className="relative">
        <Image
          src={image}
          alt={alt}
          width={300}
          height={300}
          className="rounded-lg object-cover"
        />
      </figure>
      <div className="card-body flex flex-col justify-between p-2">
        <h2 className="card-title f-bold text-xl px-2 lg:px-4 mb-2">{title}</h2>
        <div className="px-2 lg:px-4 mb-4">{content}</div>
        <div className="flex flex-wrap justify-between items-center gap-1">
          <Time readingTime={readingTime} />
          <Date date={date} />
          {level && <Chips title={level} color={color()} noplus />}
        </div>
      </div>
    </Link>
  );
}
