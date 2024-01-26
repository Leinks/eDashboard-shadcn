import { Sidebar } from "@/components/SideBar/SideBar";
import SidebarDemo from "@/components/SideBar/SideBarDemo";
import { ModeToggle } from "@/components/Theme/ToggleButton";
import AdminLayout from "@/layouts/AdminLayout";
// import { Link } from "react-router-dom";


export function Dashboard() {
  return (
    <AdminLayout>
        <SidebarDemo/>
        <ModeToggle/>
        <p>Dashboard</p>
    </AdminLayout>
  )
}

