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