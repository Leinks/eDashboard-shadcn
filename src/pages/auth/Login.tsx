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
		}
	},[isAuthenticated])

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
              break;
          }
        });
      }
    } catch (e: unknown) {
      console.info(e)
      return alert(CheckPassword(password)!);
    }
	}
  return (
    <AuthLayout>

    <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-2xl dark:bg-background">
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

          {/* <div className="relative mt-4">
          
              <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t"></span>
              </div>
                  <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                  </div>
          </div> */}

          {/* <div className="flex items-center mt-6 -mx-2 ">
              <button type="button" className=" w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                  <svg className="w-4 h-4 mx-2 fill-current " viewBox="0 0 24 24">
                      <path d="M12.24 .285V14.410h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                      </path>
                  </svg>
                  <span className="  hidden mx-2 sm:inline ">Sign in with Google</span>
              </button> */}

              {/* <a href="#" className="p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-300 transform bg-gray-300 rounded-lg hover:bg-gray-200">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z">
                      </path>
                  </svg>
              </a> */}
          {/* </div> */}

          <p className="mt-8 text-xs font-light text-center text-gray-400"> Don't have an account? <a href="#" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Contact us</a></p>
          <div className="pt-2">
              <a href="#" className=" flex items-center justify-center text-center text-xs text-gray-600 dark:text-gray-400 hover:underline">Forget Password?</a>
          </div>
    </div>
    </AuthLayout>
  )
}
