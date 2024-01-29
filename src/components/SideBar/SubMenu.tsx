import { SidebarLinkProps } from '@/types/types';
import { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const SubMenu: FC<SidebarLinkProps> = ({ item }) => {
    const location = useLocation();
    const [children, setChildren] = useState(false);
    const showSubmenu = () => setChildren(!children);
    const SideBarLink =`flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-slate-200 hover:text-black transition-colors ${location.pathname === item.path ? "dark:bg-neutral-800 bg-slate-200 transition-colors font-bold" : ""}`
    return (
        <>
            <Link className={SideBarLink} to={item.path} onClick={showSubmenu}>
                <div>
                    <span className="flex items-center gap-4">
                    {item.icon}
                    {item.title}  
                    <div>{item?.children && children ? item?.iconOpened : item?.iconClosed}</div>
                    </span>
                </div>
            </Link>
            {children && item?.children?.map((Childrens, index) => {
                const SubmenuLink = `rounded-lg hover:bg-slate-300 hover:text-black py-1 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-salte-200 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-neutral-800 transition-colors ${location.pathname === Childrens.path ? "dark:bg-neutral-900 transition-colors font-bold" : ""}`
                return (
                    <Link  className={SubmenuLink} to={Childrens.path} key={index} >
                      <span className="flex items-center gap-2">{Childrens.icon}{Childrens.title}</span>   
                        
                    </Link>
                )
            })}
        </>
    )
}


    