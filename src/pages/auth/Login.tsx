import { FormEvent } from "@/types/types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "@/layouts/AuthLayout";
import { AuthUser } from "@/components/FetchApi/AuthUser";
import { CheckPassword } from "@/components/CheckPassword/CheckPassword";


export function Login() {
	const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
	const isAuthenticated = localStorage.getItem('Copilot')

	useEffect(()=>{
		if (isAuthenticated)
		{
			navigate("/dashboard");
		}else{
      localStorage.removeItem('unix');
      localStorage.getItem('Copilot')
    }
	}, [isAuthenticated, navigate])

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault()
		try {
      if (!CheckPassword(password)) {
        AuthUser({
          email: email.toLocaleLowerCase(),
          password: password,
        }).then(async (response) => {
          switch (response) {
            case 0:
              // alert('Logeaste Menor')
             navigate("/dashboard");
              break;
            case 1:
              localStorage.removeItem('Copilot');
              localStorage.removeItem('unix');
              break;
          }
        })
      }
    } catch (e: unknown) {
      console.info(e)
      return alert(CheckPassword(password)!);
    }
	}
  return (
    <AuthLayout>

    <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-slate-500 shadow-xl dark:shadow-black dark:shadow-xl dark:bg-background">
        <div className="flex justify-center mx-auto">
                <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" />
        </div>

        <form className="mt-6" onSubmit={ handleSubmit}>
            <div className="grid gap-2">
                        <div className="grid gap-1">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only" htmlFor="email">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="email" name="email" placeholder="name@example.com"  autoCorrect="off"/>
                </div>
                        <div className="grid gap-1">
                {/* <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only" htmlFor="password" >Password</label> */}
                <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                //  onChange={(e) => setPassword(e.target.value)} type={showPassword ? "text" : "password"} 
                className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="password" name="password" placeholder="********"  autoCorrect="off" required/>
                </div>
                <button  type="submit" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
                    Sign In with Email
                </button>
            </div>
        </form>
          <p className="mt-8 text-xs font-light text-center text-gray-400"> Don't have an account? <a href="#" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Contact us</a></p>
          <div className="pt-2">
              <a href="#" className=" flex items-center justify-center text-center text-xs text-gray-600 dark:text-gray-400 hover:underline">Forget Password?</a>
          </div>
    </div>
    </AuthLayout>
  )
}
