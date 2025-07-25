import { Theme, useTheme } from 'app/providers/ThemeProvider';
import * as cls from './ThemeSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import LigthIcon from 'shared/essets/icons/icnon_day_night.svg'
import DarkhIcon from 'shared/essets/icons/icnon_night_day.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string; 
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()
    
    return (
        <Button 
        theme={ThemeButton.CLEAR}
        className={classNames(cls.ThemeSwitcher, {}, [className])} 
        onClick={toggleTheme}
        >
        {theme === Theme.DARK ? <DarkhIcon /> : <LigthIcon />}
        </Button>
    );
};
