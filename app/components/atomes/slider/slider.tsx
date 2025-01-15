import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const TripleSlider = () => {
  const slides = [
    { id: 1, img: "/images/slide1.jpg", title: "Slide 1" },
    { id: 2, img: "/images/slide2.jpg", title: "Slide 2" },
    { id: 3, img: "/images/slide3.jpg", title: "Slide 3" },
    { id: 4, img: "/images/slide4.jpg", title: "Slide 4" },
    { id: 5, img: "/images/slide5.jpg", title: "Slide 5" },
  ];

  return (
    <div className="container mx-auto">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="h-96"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="flex justify-center items-center"
          >
            <div
              className="w-72 h-72 bg-cover bg-center rounded-lg shadow-lg border border-gray-300"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <h3 className="text-white text-center text-lg font-semibold mt-64 bg-black/50 p-2">
                {slide.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TripleSlider;
