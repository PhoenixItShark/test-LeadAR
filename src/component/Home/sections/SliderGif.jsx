import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import css from "@/style/Home/sliderGif/index.module.scss";

import gif1 from "@/assets/gif/gif1.gif";
import gif2 from "@/assets/gif/gif2.gif";
import gif3 from "@/assets/gif/gif3.gif";
import img1 from "@/assets/img/img1.png";
import { useEffect } from "react";
import { useIsMobile } from "@/lib/utils/isMobile";

const SliderGif = () => {
  const slides = [gif1, gif2, gif3, img1];
  // const isMobile = useIsMobile();
  return (
    <section className={`${css.slider_gif_container} container`}>
      <Swiper
        modules={[Autoplay]}
        slidesPerView='auto'
        spaceBetween={50}
        centeredSlides={true}
        centeredSlidesBounds={true}
        autoplay={{ delay: 3000 }}
        grabCursor={true}
        loop={true}
      >
        {slides.map((src, i) => (
          <SwiperSlide key={i} className={css.slide}>
            <img src={src} alt={`slide-${i}`} className={css.slider_item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={css.gradient_rectangle}></div>
    </section>
  );
};

export default SliderGif;
