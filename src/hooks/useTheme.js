import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme("dark"));

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event) => setTheme(event.matches ? "dark" : "light");

    setTheme(getInitialTheme());
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  function getInitialTheme() {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    return mediaQuery.matches ? "dark" : "light";
  }

  return theme;
};

export default useTheme;
