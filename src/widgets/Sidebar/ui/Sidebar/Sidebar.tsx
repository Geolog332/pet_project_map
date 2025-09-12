import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { sidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo (({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(true);
    
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    const itemsList = useMemo(() => sidebarItemsList.map((item) => ( 
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed])
    
    return (
        <div 
            data-testid="sidebar"
            data-collapsed={collapsed} 
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button 
                data-testid="sidebar-onToggle" 
                onClick={onToggle} 
                className={cls.collapseBtn} 
                theme={ThemeButton.BACKGROUND_INVERTED}
                size={SizeButton.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                {itemsList}      
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
            </div>
        </div>
    );
});