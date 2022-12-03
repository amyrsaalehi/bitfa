import Image from "next/image";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useUISafe from "src/helpers/useUISafe";
import ArticleImage2 from "src/images/Article.png";
// import ArticleImage from "src/images/Chart.png";

export default function Slider({
  openseaArrows = false,
  Item = null,
  maxWidth = 300,
}) {
  const mounted = useUISafe();
  const parentRef = useRef();

  if (!mounted) return null;

  const next = () => {
    parentRef.current.scrollBy(300, 0);
  };

  const prev = () => {
    parentRef.current.scrollBy(-300, 0);
  };

  return (
    <div className="relative min-h-[250px] grid place-content-center">
      {!openseaArrows && (
        <div className="hidden md:flex justify-evenly sticky top-full bottom-0 translate-y-1/2 z-20">
          <div
            className="btn btn-circle btn-ghost opacity-50 hover:opacity-100"
            onClick={next}
          >
            <FaChevronRight size={25} />
          </div>
          <div
            className="btn btn-circle btn-ghost opacity-50 hover:opacity-100"
            onClick={prev}
          >
            <FaChevronLeft size={25} />
          </div>
        </div>
      )}
      {Item && (
        <div
          ref={parentRef}
          className="md:-mt-10 carousel carousel-center space-x-4 p-4 pb-8"
          dir="ltr"
        >
          {Array(10)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                id={`ci-${idx}`}
                className="carousel-item"
                style={{
                  maxWidth,
                }}
              >
                <Item />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

// const DefaultItem = (idx, minWidth, height) => (
// <div
//   key={idx}
//   id={`ci-${idx}`}
//   className="carousel-item"
//   style={{
//     minWidth,
//   }}
// >
//     <div className="flex flex-col justify-between items-center gap-2">
//       <Image
//         src={ArticleImage2}
//         alt="Article"
//         width={minWidth}
//         height={200}
//         className="rounded-box object-cover"
//       />
//       {/* <p>مقاله شماره {idx + 1}</p> */}
//     </div>
//   </div>
// );
