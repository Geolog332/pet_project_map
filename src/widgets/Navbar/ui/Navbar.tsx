import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Navbar.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)   
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)   
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button 
                    theme={ThemeButton.CLEAR_INVERTED}
                    onClick={onShowModal}
                >
                    Войти
                </Button>
            </div>
            <LoginModal 
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    );
}

