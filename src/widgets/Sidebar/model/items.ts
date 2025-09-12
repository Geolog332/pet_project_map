import { RouterPath } from 'shared/config/routeConfig/routeConfig'
import AboutIcon from 'shared/essets/icons/icon-about_app.svg'
import MaintIcon from 'shared/essets/icons/icon-home.svg'
import ProfileIcon from 'shared/essets/icons/profile-20-20.svg'

export interface SidebarItemType {
    path: string,
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>,
    text: string,
}

export const sidebarItemsList: SidebarItemType[] = [
    {
        path: RouterPath.main,
        Icon: MaintIcon,
        text: 'Главная',
    },
    {
        path: RouterPath.about,
        Icon: AboutIcon, 
        text: 'О Нас',
    },
    {
        path: RouterPath.profile,
        Icon: ProfileIcon,
        text: 'Профайл',
    }
]
