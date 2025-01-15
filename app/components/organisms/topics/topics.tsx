import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper/modules";
import { topics } from "../../../../data/topics";

import "swiper/swiper-bundle.css";

import "swiper/css";
import "swiper/css/navigation";

export const Topics: React.FC = () => {
  return (
    <div className="flex justify-center items-center container mt-4">
      <Swiper
        dir="rtl"
        autoHeight={true}
        breakpoints={{
          0: {
            slidesPerView: 2.5,
          },
          480: {
            slidesPerView: 3.8,
            spaceBetween: 2,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 2,
          },
        }}
        className="container flex justify-start items-center w-[480px]"
        modules={[Navigation, A11y]}
      >
        {topics.map((topic) => (
          <SwiperSlide key={topic.id}>
            <div className="p-1">
              <div className="rounded-md p-2 flex justify-center items-center w-[123px] cursor-pointer border-gray/10 border text-xs bg-gray/5 text-gray">
                {topic.label}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
