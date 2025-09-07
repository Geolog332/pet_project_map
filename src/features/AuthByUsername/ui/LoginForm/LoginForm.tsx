import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selector/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/hookDispatch';
import { Text, TextTheme } from 'shared/ui/Text/Text';

export interface LoginFormProps {
    className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
    const dispatch = useAppDispatch(); // Используем кастомный dispatch
    const { username, password, error, isLoading } = useAppSelector(getLoginState); // И кастомный selector

    const onChangeUsername = useCallback( (value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch]);

    const onChangeUPassword = useCallback ( (value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch]);

    const onLoginClik = useCallback ( () => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text titel={'Форма авторизации'}/>
            {error && <Text text={error} theme={TextTheme.ERROR}/>}
            <Input
                autoFocus={true}
                type="text" 
                className={cls.input}
                placeholder={'Введите логин'}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text" 
                className={cls.input}
                placeholder={'Введите пароль'}
                onChange={onChangeUPassword}
                value={password}
            />
            <Button 
                theme={ThemeButton.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClik}
                disabled={isLoading}
            >
                Войти
            </Button>
        </div>
    );
});

export default LoginForm;
