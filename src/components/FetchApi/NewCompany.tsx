

import { DecryptData } from '@/lib/utils/DecryptData';
import { PostManager } from '../Api/ApiManager';


export async function NewCompany(data: {name: string,document:string,email:string,logo:string,phone:string,description:string,id_admin:string}){
    const token = DecryptData(localStorage.getItem('Copilot')!) 
    const formdata = new FormData();
    const BodyContent = formdata
    formdata.append('name', data.name)
    formdata.append('document', data.document)
    formdata.append('email', data.email)
    formdata.append('logo', data.logo)
    formdata.append('phone', data.phone)
    formdata.append('description', data.description)
    formdata.append('id_admin', data.id_admin)
    console.log('FormData',formdata)
    try {
        const response = await PostManager( 'company',
        {
          method: 'POST',
          headers:{
           Accept: 'application/json',  
          "Content-type" : "Authorization",
          "Authorization" : `Bearer ${token}`,
         // Accept: '*', 
                     
        },
            data: BodyContent,
        });
        if(response.data){
  
        // DecryptData(localStorage.getItem('Unix'))     
          console.log('Success',response.data)
         return 0;
        }
          console.log('Fail',response.data)
          localStorage.removeItem('Copilot');
        return 1;
    } catch (e: unknown) {
        console.log('error',e)
          console.info(e)
        return 1;
      }
    }


