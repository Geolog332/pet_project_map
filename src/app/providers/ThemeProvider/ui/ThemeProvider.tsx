import { Children, FC, useMemo, useState } from 'react';
import { LOCAL_STARAGE_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STARAGE_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC =({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);
        
    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,}), [theme])
        
        return (
            <ThemeContext.Provider value={defaultProps}>
            {children}
            </ThemeContext.Provider>
        );
    }
    
    export default ThemeProvider;
    