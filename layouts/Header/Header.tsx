import classes from "./Header.module.scss";
import { FiSun } from "react-icons/fi";
import { HiOutlineMoon } from "react-icons/hi";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Header = () => {
  const { isDarkTheme, toggleDarkTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    localStorage.setItem("dark-theme", JSON.stringify(!isDarkTheme));
    toggleDarkTheme();
  };
  return (
    <div className={classes.container}>
      <div>
        <span onClick={changeTheme}>{isDarkTheme ? <FiSun /> : <HiOutlineMoon />}</span>
      </div>
    </div>
  );
};

export default Header;
