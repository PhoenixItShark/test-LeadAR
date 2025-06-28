import google_logo from "@/assets/svg/google.svg";
import email_logo from "@/assets/svg/email.svg";
import eye_logo from "@/assets/svg/eye.svg";

import css from "@/style/Home/header/index.module.scss";
import { useState } from "react";
import { useIsMobile } from "@/lib/utils/isMobile";

const Header = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isMobile = useIsMobile()
  function handleClick () {
      setIsPasswordVisible(!isPasswordVisible);
      
  };

  function handleSubmit(e) {
    e.preventDefault()
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <section id="header" className={`${css.header_container} container`}>
      <div className={css.header_wrapper}>
        <nav className={css.nav}>
          <div className={`${css.log_in_button} ${css.flex_container}`}>
            <p className={css.gradient_text}>Log in</p>
          </div>
        </nav>
        <div className={css.main_wrapper}>
          <div className={css.text_wrapper}>
            <p className={css.title}>
              {!isMobile? 'It’s a dedicated space for your bold fantasies!' : 'It’s a hot place for your streaming fantasy.'}
            </p>
            <p className={css.subTitle}>
              {!isMobile? 'Hundreds of attractive admirers are already waiting for you here. Don’t delay – dive into the world of streaming, flirting and hot communication right now!' : 'It’s a free space for watching streams and chatting with alluring people.'}
              
            </p>
          </div>
          <div className={css.form_wrapper}>
            {/* -------------------- Desktop Form -------------------- */}
            <form onSubmit={(e) => handleSubmit(e)} className={css.form_desktop}>
              <div className={css.google_button_wrapper}>
                <img
                  src={google_logo}
                  alt='google logo'
                  className={css.google_logo}
                />
                <span className={css.google_button}>
                  Sign up with Google
                </span>
              </div>
              <span className={css.or}>or</span>
              <p className={css.label}>Email</p>
              <input
                required={true}
                className={css.form_input}
                type='text'
                placeholder='e.g. Alex@email.com'
              />
              <p className={css.label}>Password</p>
              <div className={css.input_wrapper}>
                <input
                required={true}
                  className={css.form_input}
                  type={isPasswordVisible? 'password' : 'text'}
                  placeholder='8+ characters'
                />
                <img onClick={() => handleClick()} src={eye_logo} alt='eye logo' className={css.input_icon} />
              </div>
              <button type="submit" className={css.google_button_wrapper}>
                <img
                  src={email_logo}
                  alt='email logo'
                  className={css.google_logo}
                />
                <span className={css.google_button}>
                  Sign up with Google
                </span>
              </button>
              <p className={css.terms}>
                You hereby confirm that you are fully able and competent to
                access Livebeam and comply with the Terms of Use & Service, and
                are at least eighteen (18) years of age or the age of majority
                under the law of the jurisdiction of your residence and the one
                you are accessing Livebeam from.
              </p>
              <span className={css.slide_wrapper}>
                <div className={css.slide}></div>
                <div className={`${css.slide} ${css.active}`}></div>
              </span>
            </form>

            {/* -------------------- Mobile Form -------------------- */}
            <form onSubmit={(e) => handleSubmit(e)} className={css.form_mobile}>
              <p className={css.label}>I am</p>
              <div className={css.gender_wrapper}>
                <div className={css.gender_select}>Male</div>
                <div className={css.gender_select}>Female</div>
              </div>
              <p className={css.label}>My name</p>
              <input required={true} placeholder="e.g. Alex" className={css.form_input}/>
              <p className={css.label}>I was born on</p>
              <input required={true} placeholder="MM/DD/YYYY" className={css.form_input}/>
              <div className={css.terms_wrapper}>
                <input required={true} type="checkbox" className={css.checkbox}></input>
                <p className={css.terms}>I have read understand and agree to Terms of Use, Privacy Policy, Disclosures&Disclaimers.</p>
              </div>
              <button type="submit" className={css.button}>Sign up now</button>
              <span className={css.slide_wrapper}>
                <div className={`${css.slide} ${css.active}`}></div>
                <div className={css.slide}></div>
              </span>
            </form>
            </div>
        </div>
      </div>
      <div className={css.gradient_rectangle}></div>
    </section>
  );
};

export default Header;
