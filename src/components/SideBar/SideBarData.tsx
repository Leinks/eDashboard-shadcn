import * as Lucide from 'lucide-react'
import * as Routing from "../../types/path"
import { SidebarItem } from '../../types/types';

export const SidebarData: SidebarItem[] = [
    {
      path: Routing.PATH_DASHBOARD,
      title: 'Dashboard',
      icon: <Lucide.LayoutDashboard className="" />
    },
    {
      path: Routing.PATH_ANALITICS,
      title: 'Analíticas',
      icon: <Lucide.PieChart className="" />
    },
    {
      path: '#',
      title: 'Redes sociales',
      iconOpened: <Lucide.ChevronDown />,
      iconClosed: <Lucide.ChevronRight />,
      icon: <Lucide.Globe2 className="" />,

      children: [
        {
          path: Routing.PATH_POST_SOCIAL_MEDIA,
          title: 'Post red social',
          icon: <Lucide.MessageSquare className="" />
        },
        {
          path: Routing.PATH_ESTADISTICS,
          title: 'Estadisticas',
          icon: <Lucide.BarChart3 className="" />
        },
        {
          path: Routing.PATH_PROFILE,
          title: 'Perfiles',
          icon: <Lucide.UserRoundCog className="" />
        },
        {
          path: Routing.PATH_CLIENTS,
          title: 'Clientes',
          icon: <Lucide.UsersRound className="" />
          
        },
        

      ],
      
    },

    {
      path: Routing.PATH_TICKETS,
      title: 'Tickets',
      icon: <Lucide.Mail className="" />
    },
    {
      path: Routing.PATH_COMPANY,
      title: 'Compañias',
      icon: <Lucide.Building2 className="" />
      
    },
    {
      path: Routing.PATH_LOCAL,
      title: 'Locales',
      icon: <Lucide.Store className="" />
      
    },
    {
      path: Routing.PATH_CATEGORY,
      title: 'Categorias',
      icon: <Lucide.LayoutList className="" />
      
    },
    {
      path: Routing.PATH_PRODUCT,
      title: 'Productos',
      icon: <Lucide.ShoppingBag className="" />
      
    },
    {
      path: Routing.PATH_CALENDAR,
      title: 'Calendario',
      icon: <Lucide.CalendarDays className="" />
    },

  ]