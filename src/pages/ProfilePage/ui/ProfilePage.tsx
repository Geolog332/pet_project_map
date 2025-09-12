import { profileReducer } from 'entities/Profile';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';


const reducers: ReducerList = {
    profile: profileReducer,
}


interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo (({ className }: ProfilePageProps) => {
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                Профиль
            </div>
        </DynamicModuleLoader>
        
    );
});
export default ProfilePage;
