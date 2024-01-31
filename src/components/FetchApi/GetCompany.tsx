import { DecryptData } from '@/lib/utils/DecryptData';
import { GetsManager } from '../Api/ApiManager';



export async function GetCompany(id_admin:string) {
    const token = DecryptData(localStorage.getItem('Copilot')!) 
    // console.log('id_admin del GetCompany',id_admin)
    if(token)
    {
        try {
            const response = await GetsManager( 'company/v1/',
            {
                method: 'GET',
                headers:{
                // "Content-type" : "application/json",
                // "Authorization" : `Bearer ${token}`,
                "Content-type" : "Authorization",
                "Authorization" : `Bearer ${token}`,
                Accept: '*',          
            },
            params:{
                id_admin: id_admin,
            }
        
                // data: id_admin
            
        })
            // console.log('GetCompany',response)
            if(response.data){
                const result = response.data
                console.log('Get Result',result)
                return result
                }

        } catch (error) {
            console.log('error-Company',error)
        }
    }
}

