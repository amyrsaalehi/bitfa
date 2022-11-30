import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper } from "swiper/react";

export default function Carousel({ children }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      centerInsufficientSlides
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        1280: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        520: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={false}
    >
      {children}
    </Swiper>
  );
}
