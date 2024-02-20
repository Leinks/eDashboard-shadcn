import { CompanyCards } from "@/components/Card/CompanyCards";
import { columns } from "@/components/DataTable/CompanyColumns";
import { DataTable } from "@/components/DataTable/DataTable";
import { GetCompany } from "@/components/FetchApi/GetCompany";
import { TopBar } from "@/components/Header/TopBar";
import { Sidebar } from "@/components/SideBar/SideBar";
import AdminLayout from "@/layouts/AdminLayout";
import { DecryptData } from "@/lib/utils/DecryptData";
import { CompanysProp } from "@/types/types";
import { useEffect, useState } from "react"

export function Company() {
  const [data, setData] = useState<CompanysProp[]>([])
  const FindCompanys = async () => {
    const id_admin: string = DecryptData(localStorage.getItem('Unix')!) 
      try {
      await GetCompany(id_admin).then((response) =>{
          setData(response.data)      
        })
      } catch (error: unknown) {
        console.log('Company Error',error)
      }    
  }
  useEffect(()=>{
    FindCompanys()
  },[data])
    
  return (
    <AdminLayout>
        <TopBar/>
        <div className="flex">
            <Sidebar/>
            <div className="container mx-auto mt-12">
              <CompanyCards/> 
                <DataTable  columns={columns} data={data}/>
            </div>
        </div>
    </AdminLayout>
  )
}
