import css from "@/style/Home/discover/index.module.scss";

import computer_icon from "@/assets/svg/computer.svg";
import email2_icon from "@/assets/svg/email2.svg";
import skates_icon from "@/assets/svg/skates.svg";
import volume_icon from "@/assets/svg/volume.svg";
import women_icon from "@/assets/svg/women.svg";

const Discover = () => {
  return (
    <section className={`${css.discover_container} container`}>
      <p className={css.title}>Here you can find</p>
      <div className={css.card_wrapper}>
        <div className={css.card}>
          <div className={css.card_item}>
            <img
              src={computer_icon}
              alt='computer icon'
              className={css.icon}
            />
            <p className={css.card_text}>
              Watching streams of everyone you really like;
            </p>
          </div>
        </div>

        <div className={css.card}>
          <div className={css.card_item}>
            <img src={women_icon} alt='women icon' className={css.icon} />
            <p className={css.card_text}>
              Free communication with pretty streamers;
            </p>
          </div>
        </div>
        <div className={css.card}>
          <div className={css.card_item}>
            <img
              src={email2_icon}
              alt='email2 icon'
              className={css.icon}
            />
            <p className={css.card_text}>
              Sweet connection with people you match;
            </p>
          </div>
        </div>
        <div className={css.card}>
          <div className={css.card_item}>
            <img
              src={skates_icon}
              alt='skates icon'
              className={css.icon}
            />
            <p className={css.card_text}>
              New acquaintances with someone who has similar interests;
            </p>
          </div>
        </div>
        <div className={css.card}>
          <div className={css.card_item}>
            <img
              src={volume_icon}
              alt='volume icon'
              className={css.icon}
            />
            <p className={css.card_text}>
              Fascinating hobbies and exciting occupations from people you
              fancy.
            </p>
          </div>
        </div>
      </div>
      <div className={css.gradient_rectangle}></div>
      <div className={css.gradient_rectangle}></div>  
    </section>
  );
};

export default Discover;
