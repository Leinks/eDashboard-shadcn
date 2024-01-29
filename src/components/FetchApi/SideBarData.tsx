import { DecryptData } from '@/lib/utils/DecryptData';
import { GetsManager } from '../Api/ApiManager';




export async function GetSideBarData () {
    const token = DecryptData(localStorage.getItem('Copilot')!) 
 
   // console.log('token',token)
    try {
        const response = await GetsManager( 'sidebar/',
        {
          method: 'GET',
          headers:{
         // "Content-type" : "application/json",
         // "Authorization" : `Bearer ${token}`,
         "Content-type" : "Authorization",
         "Authorization" : `Bearer ${token}`,
          Accept: '*',          
        }
    // })
    //     setCompany(response.data)
    //     console.log('Company',Company)

        })
        if(response.data){
            const result = response.data
            console.log('Success',result)
           return result
          }

    } catch (error) {
        console.log('error-Company',error)
    }
}
