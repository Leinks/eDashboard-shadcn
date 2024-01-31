import { DecryptData } from '@/lib/utils/DecryptData';
import { ChildrenProp, CompanysProp } from '@/types/types';
import { createContext, useEffect, useState } from 'react';
import { GetCompany } from '../FetchApi/GetCompany';

export const CompanyContext = createContext<CompanysProp[]>([])
// export const UserContext = React.createContext<UserContextType | undefined>(undefined)

export const CompanyProvider = ({children}: ChildrenProp) => {
    const [data, setData] = useState<CompanysProp[]>([])
    const id_admin: string = DecryptData(localStorage.getItem('Unix')!) 
    // console.log('Data antes del UseEffect',data)
    useEffect(()=>{
        if (id_admin)
        {
          const FindCompanys = async () => {
            try {
            await GetCompany(id_admin).then((response) =>{
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
        <CompanyContext.Provider value={data}>
          {children}
        </CompanyContext.Provider>
      )

}