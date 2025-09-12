import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, ReactNode, memo } from 'react';

export enum ThemeButton {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum SizeButton {
    M = 'size_m',
    L = 'size_l',    
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton
    square?: boolean
    size?: SizeButton;
    disabled?: boolean;
    children?: ReactNode;
}

export const Button = memo ((props: ButtonProps) => {
    const {
        className,
        children,
        theme,
        square,
        disabled,
        size = SizeButton.M,
        ...otherProps
    } = props;
    
    const mads: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    }
    
    return (
        <button className={classNames(cls.Button, mads, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
