
import { EncryptData } from '@/lib/utils/EncryptData';
import { AuthManager } from '../Api/ApiManager';

export async function AuthUser(data: {email:string,password:string}){
   
    const formdata = new FormData();
    const BodyContent = formdata

    formdata.append('username', data.email)
    formdata.append('password', data.password)

    try {
        const response = await AuthManager( 'auth/login',
        {
          method: 'POST',
          headers:{
          Accept: '*',  
                     
        },
            data: BodyContent,
        });
        if(response.data.accessToken){
          sessionStorage.setItem('name' , response.data.name)
          sessionStorage.setItem('email', response.data.email)   
          localStorage.setItem('Copilot', EncryptData(response.data.accessToken) || "[]")     
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


