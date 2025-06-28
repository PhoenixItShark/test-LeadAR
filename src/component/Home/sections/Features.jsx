import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import css from "@/style/Home/features/index.module.scss";

import ok_icon from "@/assets/svg/ok.svg";
import wind_icon from "@/assets/svg/wind.svg";
import lock_icon from "@/assets/svg/lock.svg";
import explore_icon from "@/assets/svg/explore.svg";
import img from "@/assets/img/4girl.png";

import { useIsMobile } from "@/lib/utils/isMobile";

const cards = [
  {
    icon: wind_icon,
    title: "Chat with attractive streamers for free",
    text: "It’s an excellent web platform for streaming. Write messages to the beautiful streamers for free and explore this magical universe of communication!",
  },
  {
    icon: lock_icon,
    title: "Only verified users",
    text: "We care about the privacy and security of our customers. All accounts are verified so look for an attractive stranger confidently!",
  },
  {
    icon: explore_icon,
    title: "Customized search",
    text: "Match alluring partners for your own preferences. Maybe you will be interested in a hot slender European or shy beautiful Asian? Make your choice…",
  },
  {
    icon: ok_icon,
    title: "Easy to use",
    text: "Forget about hundreds of annoying notifications and inconvenient use. We have created the platform as easy to use and search as possible. Don’t waste your time studying functionality. Just enjoy!",
  },
];

const Features = () => {
  const isMobile = useIsMobile();
  if (isMobile <= "1280") {
    return (
      <section id='features' className={`${css.feature_container} container`}>
        <p className={css.title}>Why join us?</p>
        <Swiper
          modules={[Autoplay]}
          slidesPerView='auto'
          spaceBetween={10}
          centeredSlides={true}
          centeredSlidesBounds={true}
          autoplay={{ delay: 3000 }}
          grabCursor={true}
          loop={true}
        >
          {cards.map((card, i) => (
            <SwiperSlide key={i} className={css.slide}>
              <div className={css.card}>
                <div className={css.head_line_container}>
                  <img src={card.icon} alt='card icon' className={css.icon} />
                  <p className={css.card_title}>{card.title}</p>
                </div>
                <p className={css.card_text}>{card.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={css.img_wrapper}>
          <img src={img} alt='img' className={css.img} />
        </div>
        <div className={css.gradient_rectangle}></div>
      </section>
    );
  }
  return (
    <section id='features' className={`${css.feature_container} container`}>
      <div className={css.wrapper}>
        <p className={css.title}>Why join us?</p>
        <div className={css.card_wrapper}>
          <div className={css.card}>
            <div className={css.head_line_container}>
              <img src={wind_icon} alt='wind icon' className={css.icon} />
              <p className={css.card_title}>
                Chat with attractive streamers for free
              </p>
            </div>
            <p className={css.card_text}>
              It’s an excellent web platform for streaming. Write messages to
              the beautiful streamers for free and explore this magical universe
              of communication!
            </p>
          </div>
          <div className={css.card}>
            <div className={css.head_line_container}>
              <img src={lock_icon} alt='lock icon' className={css.lock_icon} />
              <p className={css.card_title}>Only verified users</p>
            </div>
            <p className={css.card_text}>
              We care about the privacy and security of our customers. All
              accounts are verified so look for an attractive stranger
              confidently!
            </p>
          </div>
          <div className={css.card}>
            <div className={css.head_line_container}>
              <img src={explore_icon} alt='explore icon' className={css.icon} />
              <p className={css.card_title}>Customized search</p>
            </div>
            <p className={css.card_text}>
              Match alluring partners for your own preferences. Maybe you will
              be interested in a hot slender European or shy beautiful Asian?
              Make your choice…
            </p>
          </div>
          <div className={css.card}>
            <div className={css.head_line_container}>
              <img src={ok_icon} alt='ok icon' className={css.icon} />
              <p className={css.card_title}>Easy to use</p>
            </div>
            <p className={css.card_text}>
              Forget about hundreds of annoying notifications and inconvenient
              use. We have created the platform as easy to use and search as
              possible. Don’t waste your time studying functionality. Just
              enjoy!
            </p>
          </div>
        </div>
      </div>
      <div className={css.gradient_rectangle}></div>
      <div className={css.gradient_rectangle}></div>
    </section>
  );
};

export default Features;
