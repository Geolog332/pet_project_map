import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/essets/icons/icon-about_app.svg'
import MaintIcon from 'shared/essets/icons/icon-home.svg'

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(true);
    
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    
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
                <div>       
                    <AppLink 
                        theme={AppLinkTheme.SECONDARY} 
                        to={RouterPath.main} 
                        className={cls.item}
                    >
                        <MaintIcon className={cls.icon} />   
                        <span className={cls.link}>  
                            Главная
                        </span>
                    </AppLink> 
                </div>

                <div>    
                    <AppLink 
                        theme={AppLinkTheme.SECONDARY} 
                        to={RouterPath.about}        
                        className={cls.item}
                    >
                        <AboutIcon className={cls.icon} />
                        <span className={cls.link}> 
                            О нас
                        </span>
                        
                    </AppLink>
                </div>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};