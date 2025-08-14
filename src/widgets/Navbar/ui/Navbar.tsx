import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Navbar.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button 
                    theme={ThemeButton.CLEAR_INVERTED}
                    onClick={onToggleModal}
                >
                    Войти
                </Button>
            </div>
            <Modal isOpen={isAuthModal} onClose={() => setIsAuthModal(false) }>
                это тест модалки
            </Modal>
        </div>
    );
}

