import { DecryptData } from "@/lib/utils/DecryptData"
import { CompanysProp } from "@/types/types"
import { useEffect, useState } from "react"
import { GetCompany } from "../FetchApi/GetCompany"


export function CompanyData() {
    const [data, setData] = useState<CompanysProp[]>([])
    const id_admin: string = DecryptData(localStorage.getItem('Unix')!) 



    useEffect(()=>{
      // console.log('Entro en el UseEffect')
        if (id_admin)
        {
          const FindCompanys = async () => {
            try {
            await GetCompany(id_admin).then((response) =>{
                // console.log('Entro en el Try')
                setData(response)
                 
              })
            } catch (error: unknown) {
              console.log('Company Error',error)
            }
          } 
    
          FindCompanys()
        }
      },[id_admin])
    
      return (

        <div>
        {/* Utilizar los datos */}
        {data.map(item => (
          <div key={item._id}>{item.name}</div>
        ))}
      </div>

      )
}

  
