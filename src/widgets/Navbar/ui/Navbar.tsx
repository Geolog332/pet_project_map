import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData)
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)   
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)   
    }, []);

    const onlogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch]);

    if(authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <div className={cls.links}>
                    <Button 
                        theme={ThemeButton.CLEAR_INVERTED}
                        onClick={onlogout}
                    >
                        Выйти
                    </Button>
                </div>
            </div>
        )
    }

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

