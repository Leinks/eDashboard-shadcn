// import { GetSideBarData } from "@/components/FetchApi/SideBarData"
// import { useState, useEffect } from "react"
// import { useNavigate } from "react-router-dom"

// type Path = {
//     _id: string
//     path: string
//     active: boolean
//     created_at: Date
//     update_at: Date
//  }


// export function Paths() {
//    const navigate = useNavigate();
//     const [path, setPaths] = useState<Path[]>([])
//     const [data, setData] = useState(null)
//     console.log('Paths Antes del Use Effect',path)
//     useEffect(()=>{
//          if (!data)
//          {
//           const FindPaths = async () => {
//             try {
//             await GetSideBarData().then((response) =>{
//                     setPaths(response?.data)
//                     setData(response?.data)
//                 console.log('paths',response?.data)
//               })
//             } catch (error: unknown) {   
                
//                 localStorage.removeItem('Copilot')
//                 navigate('/')
//                 console.log('Response Error',error)
      
//             }
//           } 
    
//           FindPaths()
//         }
//       },[path, data, navigate])


//   return (
//     <div>
//         <ul>
//             {/* {path.map(item => (
//              <li key={item._id}>{item.path}</li>
//             ))} */}
//                   {/* {Array.isArray(path)
//         ? path.map(element => {
//             return <h2>{element.path}</h2>;
//           })
//         : null} */}
//           {Array.from(path).map(element => {
//         return (
//           <div key={element._id}>
//             <h2>{element.path}</h2>
//           </div>
//         );
//       })}
//       </ul>
//     </div>
//   )
// }

