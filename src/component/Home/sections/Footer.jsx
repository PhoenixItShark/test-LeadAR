import css from "@/style/Home/footer/index.module.scss";

const Footer = () => {
  return (
    <footer className={`${css.footer_container} container`}>
      <div className={css.footer_wrapper}>
        <div className={css.column}>
          <p className={css.link}>support@gmail.com</p>
          <p className={css.link}>Unsubscribe</p>
        </div>

        <div className={css.column}>
          <p className={css.title}>Legal terms</p>
          <p className={css.link}>Terms of Use</p>
          <p className={css.link}>Disclosures&Disclaimers</p>
        </div>

        <div className={css.column}>
          <p className={css.title}>Privacy info</p>
          <p className={css.link}>Privacy Policy</p>
          <p className={css.link}>Cookie Policy</p>
        </div>

        <div className={css.column}>
          <p className={css.title}>About</p>
          <p className={css.link}>About Us</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
