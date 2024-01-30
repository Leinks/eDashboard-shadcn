import { CompanyCards } from "@/components/Card/CompanyCards";
import { GetCompany } from "@/components/FetchApi/GetCompany";
import { TopBar } from "@/components/Header/TopBar";
import { Sidebar } from "@/components/SideBar/SideBar";
import AdminLayout from "@/layouts/AdminLayout";
import { DecryptData } from "@/lib/utils/DecryptData";
import { CompanysProp } from "@/types/types";
import { useEffect, useState } from "react";



export function Company() {
    const [data, setData] = useState<CompanysProp[]>([])
    // const unix = localStorage.getItem('unix')
    const id_admin: string = DecryptData(localStorage.getItem('Unix')!) 
    console.log('Data antes del UseEffect',data)
    // console.log('local-Encrypt',unix)
    // console.log('local-Decrypt',id_admin)

    useEffect(()=>{
      console.log('Entro en el UseEffect')
        if (id_admin)
        {
          const FindCompanys = async () => {
            try {
            await GetCompany(id_admin).then((response) =>{
                console.log('Entro en el Try')
                setData(response)
                 
              })
            } catch (error: any) {
              console.log('Company Error',error)
            }
          } 
    
          FindCompanys()
        }
      },[id_admin])
    

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
