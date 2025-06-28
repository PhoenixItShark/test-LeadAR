import css from "@/style/Home/vision/index.module.scss";
import img from "@/assets/img/handHoldingiPhone.png";


const Vision = () => {
    function handleClick(e) {
    document.getElementById('header').scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <section className={`${css.vision_container} container`}>
      <div className={css.vision_wrapper}>
        <div className={css.content_wrapper}>
          <div className={css.wrapper}>
            <p className={css.title}>
              It’s a dedicated space for your bold fantasies!
            </p>
            <p className={css.subTitle}>
              Hundreds of attractive admirers are already waiting for you here.
              Don’t delay – dive into the world of streaming, flirting, and hot
              communication right now!
            </p>
            <button onClick={() => handleClick()} className={css.button}>Write to her</button>
          </div>
          <div className={css.img_wrapper}>
            <img src={img} alt='handHoldingiPhone' className={css.img} />
            <div className={css.message_wrapper}>
              <span className={css.polygon}></span>
              <div className={css.message}>
                <p className={css.img_text}>
                  free communication with streamers here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={css.gradient_rectangle}></div>
    </section>
  );
};

export default Vision;
