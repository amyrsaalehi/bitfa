import Image from "next/image";
import Carousel from "src/components/Shared/Carousel";
import ArticleImage from "src/images/Article.png";

export default function FirstGrid() {
  return (
    <div className="max-w-[1280px] mx-auto flex flex-col gap-2 h-[350px]">
      <Carousel>
        {Array(10)
          .fill(0)
          .map((_, idx) => (
            <div key={idx} className="carousel-item w-[300px]">
              <figure className="relative">
                <Image
                  src={ArticleImage}
                  alt={"اولین ایتم"}
                  placeholder="blur"
                  width={300}
                  height={300}
                  className="rounded-3xl aspect-square shadow-lg object-cover"
                  priority
                />
              </figure>
            </div>
          ))}
      </Carousel>
    </div>
  );
}
