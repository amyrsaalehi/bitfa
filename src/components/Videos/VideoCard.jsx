import Image from "next/image";
import Link from "next/link";
import { IoMdPlayCircle } from "react-icons/io";
import VideoImage from "src/images/Article.png";

export default function VideoCard({}) {
  return (
    <Link
      href="/videos/what-is-nft"
      className="card bg-base-200 shadow-xl image-full cursor-pointer hover:shadow-xl hover:scale-105 transition"
    >
      <figure className={"object-cover rounded-xl"}>
        <Image
          src={VideoImage}
          alt="ویدیو"
          className={"object-cover rounded-xl w-full h-full"}
        />
      </figure>
      <div className="card-body relative">
        <div className="w-full flex justify-center">
          <h2 className="card-title f-bold">بازارساز خودکار چیست</h2>
        </div>
        <IoMdPlayCircle
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3 text-primary/80 hover:text-primary"
          size={50}
        />
      </div>
    </Link>
  );
}
