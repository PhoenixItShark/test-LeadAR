import css from "@/style/Home/about/index.module.scss";

const About = () => {
    function handleClick(e) {
    document.getElementById('header').scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <section id="about" className={`${css.about_container} container`}>
      <div className={css.about_wrapper}>
        <p className={css.about}>About</p>
        <div className={css.text_wrapper}>
        <p className={css.text}>
          It’s a global <b>streaming platform</b> for communication and meeting
          incredibly beautiful people. We created an excellent place where you
          can enjoy your time and <b>find appropriate matches</b> at first.
        </p>
        <p className={css.text}>
          Approximately 80% of our users have already found their lovelies.
          <b>Watch streams</b> without hindrance and meet someone <b>who interests you.</b>
        </p>
        </div>
        <button onClick={() => handleClick()} className={css.button}>
            Join for free
        </button>
      </div>
      <div className={css.gradient_rectangle}></div>    
    </section>
  );
};

export default About;
