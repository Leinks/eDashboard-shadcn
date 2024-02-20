import { DecryptData } from '@/lib/utils/DecryptData';
import { GetsManager } from '../Api/ApiManager';



export async function GetCompany(id_admin:string) {
    const token = DecryptData(localStorage.getItem('Copilot')!) 
    if(token)
    {
        try {
            const response = await GetsManager( 'company/v1/',
            {
                method: 'GET',
                headers:{
                    "Authorization" : `Bearer ${token}`,
                    Accept: '*',           
            },
            params:{
                id_admin: id_admin,
            }
        })
            if(response.data){
                const result = response.data
                console.log('Get Result',result)
                return result
                }

        } catch (e: unknown) {
            console.info(e)
        }
    }
}

