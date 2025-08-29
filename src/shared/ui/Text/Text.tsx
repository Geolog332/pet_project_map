import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}


interface TextProps {
    className?: string;
    titel?: string,
    text?: string,
    theme?: TextTheme,
}

export const Text = (props: TextProps) => {
    const { 
        className, 
        text, 
        titel, 
        theme = TextTheme.PRIMARY,
    } = props
    return (
        <div className={classNames(cls.Text, { [cls[theme]]: true }, [className])}>
            {titel && <p className= {cls.titel}>{titel}</p>}
            {text && <p className= {cls.text}>{text}</p>}
        </div>
    );
};