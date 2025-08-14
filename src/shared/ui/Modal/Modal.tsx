import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Modal.module.scss';
import { ReactNode, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Portal } from '../Portal/Portal';
import { ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    theme?: string;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const { theme: contextTheme } = useContext(ThemeContext);
    const theme = props.theme || contextTheme;

    const {
        className,
        children,
        isOpen,
        onClose,

    } = props;
    
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    
    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);
    
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') closeHandler();
    }, [closeHandler]);
    
    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation(); 
    };
    
    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        
        return () => {
            window.removeEventListener('keydown', onKeyDown);
            clearTimeout(timerRef.current);
        };
    }, [isOpen, onKeyDown]);
    
    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen, 
        [cls.closing]: isClosing,
        [cls[theme]]: true
    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>   
                    <div className={cls.content} onClick={onContentClick}>   
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};