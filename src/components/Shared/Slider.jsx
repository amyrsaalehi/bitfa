import Image from "next/image";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useUISafe from "src/helpers/useUISafe";
import ArticleImage from "src/images/Article.png";
import ArticleImage2 from "src/images/Chart.png";

export default function Slider() {
  const mounted = useUISafe();
  const parentRef = useRef();

  if (!mounted) return null;

  const next = () => {
    parentRef.current.scrollBy(500, 0);
  };

  const prev = () => {
    parentRef.current.scrollBy(-500, 0);
  };

  return (
    <div className="relative">
      <div className="hidden md:flex justify-evenly sticky top-full bottom-0 translate-y-1/2 z-20">
        <div
          className="btn btn-circle btn-primary opacity-50 hover:opacity-100"
          onClick={next}
        >
          <FaChevronRight size={25} />
        </div>
        <div
          className="btn btn-circle btn-primary opacity-50 hover:opacity-100"
          onClick={prev}
        >
          <FaChevronLeft size={25} />
        </div>
      </div>
      <div
        ref={parentRef}
        className="md:-mt-10 carousel carousel-center space-x-4 p-4 pb-8"
        dir="ltr"
      >
        {Array(10)
          .fill(0)
          .map((_, idx) => (
            <div key={idx} id={`ci-${idx}`} className="w-[300px] carousel-item">
              <div className="flex flex-col justify-between items-center gap-2">
                <Image
                  src={idx % 2 === 0 ? ArticleImage2 : ArticleImage2}
                  alt="Article"
                  width={300}
                  height={200}
                  className="rounded-box object-cover"
                />
                <p>مقاله شماره {idx + 1}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}