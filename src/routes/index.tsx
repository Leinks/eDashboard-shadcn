import { Route, Outlet } from "react-router-dom"
import * as Routing from "../types/path.ts"
import { lazy, Fragment, Suspense } from "react"
import { RouteProp } from "@/types/types.ts"
import { LucideShell } from "lucide-react"




export function renderRoutes (routes: RouteProp[]) {
    return routes.map((route, index) => {
			const Component = route.element || Fragment
			const Layout = route.layout || Fragment
			const Guard = route.guard || Fragment
			return (
			<Route 
					key={index}
					path = {route.path}
					element = {
						<Suspense fallback={<div className='flex items-center justify-center w-screen h-screen'><LucideShell className="mr-3 h-5 w-5 animate-spin"/><span>Loading . . .</span> </div>}>
							<Guard>
								<Layout>{route.children ? <Outlet /> : <Component />}</Layout>
							</Guard>
						</Suspense>}
			>
				{route.children && renderRoutes(route.children)}
			</Route>

			)
		})
}

export const routes: RouteProp[] = [
	{
		path: Routing.PATH_LOGIN,
		element: lazy(async ()=> await import('../pages/auth/Login').then(({ Login }) => ({default: Login}))),

	},
	// {
	// 	path: Routing.PATH_REGISTER,
	// 	element: lazy(async ()=> await import('../pages/auth/Register').then(({ Register }) => ({default: Register}))),

	// },
	// {
	// 	path: Routing.PATH_FORGOT_PASSWORD,
	// 	element: lazy(async ()=> await import('../pages/auth/ForgetPassword').then(({ ForgetPassword }) => ({default: ForgetPassword}))),

	// },
	// {
	// 	path: '*',
	// 	element: lazy(async ()=> await import('../pages/NotFound.tsx')),

	// },
	{
		layout: lazy(async ()=> await import('../layouts/AdminLayout')),
		guard: lazy(async ()=> await import('../guards/AuthGuard')),
		children: [

			{
				path: Routing.PATH_DASHBOARD,
				element: lazy(async ()=> await import('../pages/admin/Dashboard').then(({ Dashboard }) => ({default: Dashboard}))),
			},
			// {
			// 	path: Routing.PATH_PROFILE,
			// 	element: lazy(async ()=> await import('../pages/admin/Profile').then(({ Profile }) => ({default: Profile}))),

			// },
			// {
			// 	path: Routing.PATH_CHAT,
			// 	element: lazy(async ()=> await import('../pages/admin/Chat').then(({ Chat }) => ({default: Chat}))),

			// },
			// {
			// 	path: Routing.PATH_TICKETS,
			// 	element: lazy(async ()=> await import('../pages/admin/Tickets').then(({ Tickets }) => ({default: Tickets}))),
			// },
			// {
			// 	path: Routing.PATH_CATEGORY,
			// 	element: lazy(async ()=> await import('../pages/admin/Category').then(({ Category }) => ({default: Category}))),
			// },
			{
				path: Routing.PATH_COMPANY,
				element: lazy(async ()=> await import('../pages/admin/Company').then(({ Company }) => ({default: Company}))),
			},
			// {
			// 	path: Routing.PATH_PRODUCT,
			// 	element: lazy(async ()=> await import('../pages/admin/Product').then(({ Product }) => ({default: Product}))),
			// },
			// {
			// 	path: Routing.PATH_LOCAL,
			// 	element: lazy(async ()=> await import('../pages/admin/Local').then(({ Local }) => ({default: Local}))),
			// },
		]
	}	
]

