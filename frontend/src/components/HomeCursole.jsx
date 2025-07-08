import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Carousel = () => {
  return (
    <div className="h-[70vh] mx-10 max-md:mx-2 mb-10">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full"
      >
        <SwiperSlide>
          <div className="h-[70vh] w-full">
            <img
              src="/src/assets/cursole1.png"
              alt="slide 1"
              className="h-full w-full object-cover rounded-3xl"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-[70vh] w-full">
            <img
              src="/src/assets/cursole2.png"
              alt="slide 2"
              className="h-full w-full object-cover rounded-3xl"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-[70vh] w-full">
            <img
              src="/src/assets/cursole3.png"
              alt="slide 3"
              className="h-full w-full object-cover rounded-3xl"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
