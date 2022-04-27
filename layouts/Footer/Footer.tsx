import classes from "./Footer.module.scss";
import dictionary from "../../public/dictionary.json";
const Footer = () => {
  return (
    <footer className={classes.container}>
      <span>{dictionary.en.footer.copyRight}</span>
    </footer>
  );
};

export default Footer;
