import  StatusCards  from "@/components/Card/StatusCards";
import { Sidebar } from "@/components/SideBar/SideBar";
// import {SidebarDemo} from "@/components/SideBar/SideBarDemo";
import { ModeToggle } from "@/components/Theme/ToggleButton";
import AdminLayout from "@/layouts/AdminLayout";
// import { Paths } from "@/routes/Paths";



export function Dashboard() {
  return (
    <AdminLayout>
      <div className="flex">
        <Sidebar/>
        <StatusCards/> 
        <ModeToggle/> 
        {/* <Paths/> */}
      </div>
    </AdminLayout> 
  )
}

