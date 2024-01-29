import * as Lucide from 'lucide-react'
import {  useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SidebarData } from './SideBarData';
import { SubMenu } from './SubMenu';



export function Sidebar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
 

  const handleSignOut = () => {
    localStorage.removeItem('Copilot')
    navigate('/')
  }
  return (
    <>
      {/* <div className={`flex flex-col  h-screen pt-10 p-3 w-80 visible  left-0 bg-white shadow-lg shadow-slate-800	 dark:shadow-white dark:text-gray-100 dark:bg-background 
          ${
            showMenu ? "invisible fixed " :"w-60 z-50"
          } transition-all`}>
        <div className="space-y-3">
          <div className="flex items-center pl-14">
            <h2 className="text-xl font-bold">
              Dashboard
            </h2>
          </div>
          <div className="flex-1 pt-6">
          <ul>
          {SidebarData.map((item, index) => {
              return<li key={index}><SubMenu item={item}  /></li> ;
              })}
            </ul>
          </div>
        </div>
            <nav>
              <button  onClick={handleSignOut}>
                <div  className="flex place-items-end items-center gap-4 py-2 px-4 rounded-lg hover:bg-slate-200 hover:text-black transition-colors">
                    <Lucide.Power className="text-primary " /> Cerrar sesión 
                </div>
              </button>         
            </nav>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden fixed top-4 left-8 bg-background dark:border-slate-200	border dark:text-white p-0 rounded z-50"
      >
        {showMenu ? <Lucide.Menu /> : <Lucide.X />}
      </button> */}



      <div
        className={`xl:h-[93vh] fixed xl:static w-[60%] md:w-[30%] lg:w-[20%] xl:w-[15%] h-full top-0 bg-white shadow-lg shadow-slate-800	 dark:shadow-white dark:text-gray-100 dark:bg-background p-4 flex flex-col justify-between z-50 ${
          showMenu ? "left-0" : "-left-full"
        } transition-all`}
      >
        <div>
          <Link to='/dashboard'>
            <h1 className="text-center text-2xl font-bold dark:text-white mb-10">
              Admin<span className="text-primary text-4xl">.</span>
            </h1>
          </Link>
          <ul>
          {SidebarData.map((item, index) => {
                return<li key={index}><SubMenu item={item}  /></li> ;
            })}
          </ul>
        </div>
        <nav className='hover:bg-slate-300 rounded-lg hover:text-black transition-colors'>
          <button  onClick={handleSignOut} >
            <div  className="flex items-center gap-4 py-2 px-4 text-sm">
                <Lucide.Power className="hover:text-black" /> Cerrar sesión 
            </div>
          </button>         
        </nav>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden fixed top-4 left-4 dark:border-slate-200	border dark:text-white bg-cover p-0 rounded z-50"
      >
        {showMenu ? <Lucide.X /> :  <Lucide.Menu />}
      </button>
      </>
  )
}