

import { DecryptData } from '@/lib/utils/DecryptData';
import { PostManager } from '../Api/ApiManager';


export async function NewCompany(data: {name: string,document:string,email:string,logo:string,phone:string,description:string,id_admin:string}){
    const token = DecryptData(localStorage.getItem('Copilot')!) 
    try {
        const response = await PostManager( '/company',
        {
          method: 'POST',
          headers:{
            "Authorization" : `Bearer ${token}`,
             Accept: '*',                       
        },
            data: data,
        });
        if(response.data){  
          console.log('Success',response.data)
         return 0;
        }
          console.log('Fail',response.data)
          localStorage.removeItem('Copilot');
        return 1;
    } catch (e: unknown) {
          console.info(e)
        return 1;
      }
    }


