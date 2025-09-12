import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import { memo } from 'react';

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage = memo (({ className }: NotFoundPageProps) => {
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            Страница не найдена
        </div>
    );
});

export default NotFoundPage;