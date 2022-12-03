import Image from "next/image";
import Carousel from "src/components/Shared/Carousel";
import ArticleImage from "src/images/Article.png";

export default function FirstGrid() {
  return (
    <div className="max-w-[1280px] mx-auto flex flex-col gap-2">
      <Carousel>
        {Array(10)
          .fill(0)
          .map((_, idx) => (
            <div key={idx} className="carousel-item max-w-[300px]">
              <figure className="relative">
                <Image
                  src={ArticleImage}
                  alt={"اولین ایتم"}
                  placeholder="blur"
                  className="rounded-3xl aspect-square shadow-lg"
                  priority
                  style={{
                    objectFit: "cover",
                  }}
                />
              </figure>
            </div>
          ))}
      </Carousel>
    </div>
  );
}
