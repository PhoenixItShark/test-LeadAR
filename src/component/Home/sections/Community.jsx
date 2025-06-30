import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import css from "@/style/Home/community/index.module.scss";

import girl1 from "@/assets/img/1girl.png";
import girl2 from "@/assets/img/2girl.png";
import girl3 from "@/assets/img/3girl.png";
import girl4 from "@/assets/img/4girl.png";
import girl5 from "@/assets/img/5girl.png";
import girl6 from "@/assets/img/img1.png";

const Community = () => {
  const slides = [girl1, girl2, girl3, girl4, girl5, girl6];
  function handleClick(e) {
    document.getElementById("header").scrollIntoView({ behavior: "smooth" });
  }
  return (
    <section className={`${css.community_container} container`}>
      <div className={css.wrapper}>
        <p className={css.title}>
          It’s a universe of communication and streaming without borders!
        </p>
        <p className={css.subTitle}>
          Let yourself to be free – share your thoughts, delight, and fears with
          beautiful strangers!
        </p>
      </div>
      <div className={css.slider_wrapper}>
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
      </div>
      <div className={css.wrapper}>
        <button
          type='button'
          onClick={() => handleClick()}
          className={css.button}
        >
          Join for free
        </button>
      </div>
      <div className={css.gradient_rectangle}></div>
    </section>
  );
};

export default Community;
