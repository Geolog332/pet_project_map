import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/hookDispatch';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginUsername } from '../../model/selector/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selector/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selector/getLoginError/getLoginError';
import { getLoginLoading } from '../../model/selector/getLoginLoading/getLoginLoading';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducerList = {
    loginForm: loginReducer,
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const dispatch = useAppDispatch(); // Используем кастомный dispatch
    const username = useAppSelector(getLoginUsername);// Используем кастомный dispatch
    const password = useAppSelector(getLoginPassword);// Используем кастомный dispatch
    const error = useAppSelector(getLoginError);// Используем кастомный dispatch
    const isLoading = useAppSelector(getLoginLoading);// Используем кастомный dispatch

    const onChangeUsername = useCallback( (value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch]);

    const onChangeUPassword = useCallback ( (value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch]);

    const onLoginClik = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
    
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch, username, password]);

    return (
        <DynamicModuleLoader 
            removeAfterUnmount={true} 
            reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={'Форма авторизации'}/> 
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
        </DynamicModuleLoader>
        
    );
});

export default LoginForm;
