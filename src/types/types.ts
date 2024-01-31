import { LazyExoticComponent } from "react"
//Types Forms Events
export type FormEvent = React.FormEvent<HTMLFormElement>
export type MouseEvent = React.MouseEvent<HTMLButtonElement>
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>


//Types Childrens
export type ChildrenProp = {
    children: React.ReactNode; // 👈️ type children
  };


//Types Routes
export type RouteProp = {
	path?: string
	element?: LazyExoticComponent<() => JSX.Element> | null
	layout?: LazyExoticComponent<(props: {children: React.ReactNode}) => JSX.Element> | null
	children?: RouteProp[]
	guard?: LazyExoticComponent<(props: {children: React.ReactNode}) => JSX.Element> | null
}

//Types Themes
export type Theme = "dark" | "light" | "system"

export type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

export type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

//Types SideBarData
export type SidebarItem = {
  title: string
  path: string
  icon: React.ReactNode
  active?: boolean
  iconOpened?: React.ReactNode
  iconClosed?: React.ReactNode
  children?: SidebarItem[]

}

export type SidebarLinkProps = {
  item: SidebarItem
};
//Types Path
export type Path = {
  _id?: string
  path?: string
  active?: boolean
  created_at?: Date
  update_at?: Date
}

//Types Companys 
export type CompanysProp = {
  _id: string
  id_admin: string
  name: string
  document: string
  phone: string
  email: string
  logo: string
  description: string
  created_at: Date
  updated_at: Date

}

//Types Pyments
export type Payment = {
  id: string
  id_store: string
  ref: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

//Types Datatable
