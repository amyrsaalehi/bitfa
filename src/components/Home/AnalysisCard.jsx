import Image from "next/image";
import Link from "next/link";

export default function AnalysisCard({ title, image, links }) {
  return (
    <div className="card max-w-sm glass bg-base-300 transition-all shadow-sm hover:shadow-lg cursor-pointer">
      <figure className="relative">
        <Image
          src={image}
          alt={title}
          placeholder="blur"
          className="max-w-xs max-h-[300px] rounded-lg"
          style={{
            objectFit: "cover",
          }}
        />
      </figure>
      <div className="card-body p-4">
        <div className="w-full grid place-content-center">
          <h2 className="w-full card-title text-center f-bold text-2xl px-2 lg:px-4 mb-2">
            {title}
          </h2>
        </div>
        <div className="card-actions">
          <Link className="btn btn-block btn-primary" href={links[0].href}>
            {links[0].title}
          </Link>
        </div>
      </div>
    </div>
  );
}
