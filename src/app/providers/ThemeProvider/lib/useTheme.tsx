import { useContext } from "react";
import { LOCAL_STARAGE_KEY, Theme, ThemeContext } from "./ThemeContext";


interface UseThemeResult {
    theme: Theme,
    toggleTheme: () => void
}


export function useTheme(): UseThemeResult {
const {theme, setTheme} = useContext(ThemeContext);

const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme (newTheme);
    localStorage.setItem(LOCAL_STARAGE_KEY, newTheme);
}
return {theme, toggleTheme}
}