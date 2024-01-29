import * as Lucide from 'lucide-react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetSideBarData } from '../FetchApi/SideBarData';
import { SidebarItem } from '@/types/types';



export function SidebarDemo() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState<SidebarItem[]>([])
  // const [data, setData] = useState([]);
  const [path, setPaths] = useState(null)
  // console.log('data',data)
  console.log('paths',path)
  useEffect(()=>{
             if (!path)
             {
              const FindPaths = async () => {
                try {
                await GetSideBarData().then((response) =>{
                        setPaths(response)
                        setData(response.data)
                    console.log('data',response)
                  })
                } catch (error: unknown) {   
                    
                    localStorage.removeItem('Copilot')
                    navigate('/')
                    console.log('Response Error',error)
          
                }
              } 
        
              FindPaths()
            }
          },[path, data, navigate])
  const handleSignOut = () => {
    localStorage.removeItem('Copilot')
    navigate('/')
  }
  return (
    <>
      <div className={`flex flex-col h-screen pt-10 p-3 w-60 visible z-50 left-0 bg-white shadow-lg	 dark:shadow-white dark:text-gray-100 dark:bg-background 
      ${
        showMenu ? " w-0 invisible" :  "w-60 "
      } transition-all`}>
        <div className="space-y-3">
          <div className="flex items-center">
            <h2 className="text-xl font-bold">
              Dashboard
            </h2>
          </div>
          <div className="flex-1">
          <ul>

  
              {data.map((item, index) => {return(<li key={index}> <Lucide.Menu/> {item.icon} {item.path}</li>)})}
    
            </ul>
          </div>
        </div>
            <nav>
              <button  onClick={handleSignOut}>
                <div  className="flex place-items-end items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
                    <Lucide.Power className="text-primary" /> Cerrar sesión 
                </div>
              </button>         
            </nav>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden fixed top-4 left-28 bg-background border-slate-200	border	 text-white p-0 rounded z-50"
      >
        {showMenu ? <Lucide.Menu /> : <Lucide.X />}
      </button>

      </>
  )
}