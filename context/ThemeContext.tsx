import { createContext, Dispatch, ReactElement, SetStateAction, useEffect, useState } from "react";

interface IThemeContext {
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
}

const ThemeContext = createContext<IThemeContext>({
  isDarkTheme: false,
  toggleDarkTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactElement }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  useEffect(() => {
    const localTheme = localStorage.getItem("dark-theme");
    if (localTheme !== null) {
      setIsDarkTheme(JSON.parse(localTheme));
    }
  }, []);
  useEffect(
    () =>
      isDarkTheme ? document.body.classList.add("dark") : document.body.classList.remove("dark"),
    [isDarkTheme]
  );
  const toggleDarkTheme = () => setIsDarkTheme(!isDarkTheme);
  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
