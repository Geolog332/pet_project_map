import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './LoginForm.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autoFocus={true}
                type="text" 
                className={cls.input}
                placeholder={'Введите логин'}
            />
            <Input
                type="text" 
                className={cls.input}
                placeholder={'Введите пароль'}
            />
            <Button className={cls.loginBtn}>
                Войти
            </Button>
        </div>
    );
};
