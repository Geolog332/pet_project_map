import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(true);
    
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
        <button onClick={onToggle} >toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                {/*LangSwitcher */}
            </div>
        </div>
    );
};