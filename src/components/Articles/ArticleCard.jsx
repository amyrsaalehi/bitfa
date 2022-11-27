import Image from "next/image";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import Chips from "src/components/Shared/Chips";

export default function ArticleCard({ image, title }) {
  return (
    <div className="card glass bg-base-200/60 transition-all shadow-sm hover:shadow-xl cursor-pointer">
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
    </div>
  );
}

const Time = () => {
  return (
    <div className="flex items-center gap-1">
      <AiOutlineClockCircle className="fill-base-content/60" />
      <span className="text-base-content/60">۷ دقیقه</span>
    </div>
  );
};

const Date = () => {
  return (
    <div className="flex items-center gap-1">
      <MdDateRange className="fill-base-content/60" />
      <span className="text-base-content/60">۷ آذر ۱۳۹۹</span>
    </div>
  );
};
