import Image from "next/image";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import useUISafe from "src/helpers/useUISafe";

export default function CoinCard({ title, description, image, links }) {
  const mounted = useUISafe();

  if (!mounted) return null;

  if (isMobile) {
    return (
      <div className="card md:max-w-xs bg-base-100 shadow-xl image-full">
        <figure className="relative h-[240px]">
          <Image
            src={image}
            alt={title}
            placeholder="blur"
            className="rounded-lg"
            priority
            style={{
              objectFit: "contain",
            }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title f-bold text-2xl px-2 lg:px-4 mb-2">
            {title}
          </h2>
          <p className="px-2 lg:px-4 mb-4">{description}</p>
          <div className="card-actions">
            <Link className="btn btn-block btn-primary" href={links[0].href}>
              {links[0].title}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card md:max-w-xs glass bg-base-300 transition-all shadow-sm hover:shadow-lg">
      <figure className="relative h-[240px]">
        <Image
          src={image}
          alt={title}
          placeholder="blur"
          className="rounded-lg p-10 pt-12"
          priority
          style={{
            objectFit: "cover",
          }}
        />
      </figure>
      <div className="card-body pt-0">
        <h2 className="card-title f-bold text-2xl px-2 lg:px-4 mb-2">
          {title}
        </h2>
        <p className="px-2 lg:px-4 mb-4">{description}</p>
        <div className="card-actions">
          <Link className="btn btn-block btn-primary" href={links[0].href}>
            {links[0].title}
          </Link>
        </div>
      </div>
    </div>
  );
}
