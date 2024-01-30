import { CompanyCards } from "@/components/Card/CompanyCards";
import { TopBar } from "@/components/Header/TopBar";
import { Sidebar } from "@/components/SideBar/SideBar";
import AdminLayout from "@/layouts/AdminLayout";


export function Company() {
  return (
    <AdminLayout>
        <TopBar/>
    <div className="flex">
        <Sidebar/>
        <CompanyCards/>
    </div>
    </AdminLayout>
  )
}
