import { ChildrenProp } from "@/types/types"

export default function AdminLayout(props: ChildrenProp) {
  
  
    return (
     
      
      <section className="dark:text-gray-100 dark:bg-background duration-100">
       
           
        {/* <div className="flex"> */}
              {props.children}
        {/* </div> */}

 
      </section>
  
   
    )
  }
  