import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useUISafe from "src/helpers/useUISafe";

export const CarouselArrowType = {
  REGULAR: "REGULAR",
  NO_ARROW: "NO_ARROW",
  OPEN_SEA: "OPEN_SEA",
};

export default function Carousel({
  arrow = CarouselArrowType.OPEN_SEA,
  children,
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

  const renderArrows = () => {
    switch (arrow) {
      case CarouselArrowType.REGULAR:
        return (
          <div className="hidden md:flex justify-center gap-16 sticky top-full bottom-0 translate-y-1/2 z-20">
            <div
              className="btn btn-circle btn-ghost bg-base-100 hover:bg-base-200 shadow-lg"
              onClick={next}
            >
              <FaChevronRight size={25} />
            </div>
            <div
              className="btn btn-circle btn-ghost bg-base-100 hover:bg-base-200 shadow-lg"
              onClick={prev}
            >
              <FaChevronLeft size={25} />
            </div>
          </div>
        );
      case CarouselArrowType.OPEN_SEA:
        return (
          <>
            <div
              className="hidden md:flex absolute top-1/2 right-0 btn btn-circle btn-ghost no-animation bg-base-100 hover:bg-base-200 shadow-lg z-20"
              style={{
                transform: "translateY(-50%)",
              }}
              onClick={next}
            >
              <FaChevronRight size={25} />
            </div>
            <div
              className="hidden md:flex absolute top-1/2 left-0 btn btn-circle btn-ghost no-animation bg-base-100 hover:bg-base-200 shadow-lg z-20"
              style={{
                transform: "translateY(-50%)",
              }}
              onClick={prev}
            >
              <FaChevronLeft size={25} />
            </div>
          </>
        );
      case CarouselArrowType.NO_ARROW:
        return null;
      default:
        return null;
    }
  };

  return (
    <div className="relative grid place-content-center">
      {renderArrows()}
      <div
        ref={parentRef}
        // ${arrow !== CarouselArrowType.NO_ARROW && "md:-mt-10"}
        className={`${
          arrow === CarouselArrowType.REGULAR && "md:-mt-10"
        } carousel carousel-center gap-4 p-4 pb-8`}
      >
        {children}
      </div>
    </div>
  );
}

// {
//   Array(10)
//     .fill(0)
//     .map((_, idx) => (
// <div
//   key={idx}
//   id={`ci-${idx}`}
//   className="carousel-item"
//   style={{
//     minWidth,
//   }}
// >
//         <div className="flex flex-col justify-between items-center gap-2">
//           <Image
//             src={ArticleImage2}
//             alt="Article"
//             width={minWidth}
//             height={200}
//             className="rounded-box object-cover"
//           />
//           {/* <p>مقاله شماره {idx + 1}</p> */}
//         </div>
//       </div>
//     ));
// }
