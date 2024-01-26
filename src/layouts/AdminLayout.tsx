import { ChildrenProp } from "@/types/types"

export default function AdminLayout(props: ChildrenProp) {
  
  
    return (
     
      
      <section className="flex max-h-screen  items-center justify-center pt-1 dark:text-gray-100 dark:bg-background duration-100">
              {/* <Sidebar/> */}
            {/* <div className=" overflow-hidden rounded-[0.5rem] border bg-background shadow"> */}
              {props.children}
        {/* </div> */}
          </section>
  
   
    )
  }
  