import { Navigate } from "react-router-dom"
import { ChildrenProp } from "@/types/types"




export default function AuthGuard({children}: ChildrenProp) {
    // const isAuthenticated = sessionStorage.getItem('accessToken')
    const isAuthenticated = localStorage.getItem('Copilot')
    if(!isAuthenticated) {
      return <Navigate to='/'/>
    }else{
      return (
        <>{children}</>
      )
    }
   

}
