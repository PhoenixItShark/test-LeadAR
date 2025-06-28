import React from 'react'
import css from "@/style/Home/start/index.module.scss";
import img from "@/assets/img/handHoldingiPhone.png";


const Start = () => {
  function handleClick(e) {
    document.getElementById('header').scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <section className={`${css.start_container} container`}>
      <div className={css.start_wrapper}>
                <div className={css.text_wrapper}>
                  <p className={css.title}>
                    It’s a hot place for your streaming fantasy.
                  </p>
                  <p className={css.subTitle}>
                    It’s a free space for watching streams and chatting with alluring people.

                  </p>
                </div>
                <div className={css.img_wrapper}>
                  <img src={img} alt='handHoldingiPhone' className={css.img} />
                  <button onClick={() => handleClick()} className={css.button}>Sign up now</button>
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
            <div className={css.gradient_rectangle}></div>
    </section>
  )
}

export default Start