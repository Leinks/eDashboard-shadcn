import { ChildrenProp } from "@/types/types"

export function AuthLayout(props: ChildrenProp) {
  return (
    <section className="min-h-screen flex items-center justify-center pt-8 dark:text-gray-100 dark:bg-background duration-100">
     
          {props.children}
    
  </section>
  )
}
