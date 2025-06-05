import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { Link, redirect } from "react-router";
import { loginWithGoogle } from "~/appwrite/auth";
import { account } from "~/appwrite/client";

export async function clientLoader(){
    try {
        const user = await account.get()
        if(user) return  redirect("/")
    } catch (error) {
        console.log("Error fetching user",error)
    }
}

const signIn = () => {
  return (
    <main className="auth">
      <section className="size-full glassmorphism flex-center px-6 ">
        <div className="sign-in-card">
          <header className="header">
            <Link to="/">
              <img
                src="/assets/icons/logo.svg"
                alt="logo-svg"
                className="size-[30px]"
              />
            </Link>
            <h1 className="p-28-bold text-dark-100">Tourvisto</h1>
          </header>
          <article>
            <h2 className="p-28-semibold text-dark-100 text-center">
              Start Your Travel Journey
            </h2>
            <p className="p-17-regular text-gray-100 !leading-7 text-center">
              Sign in with Google to manage destination and user activity with
              ease.
            </p>
          </article>
          <ButtonComponent
            onClick={loginWithGoogle}
            type="button"
            className="button-class !h-11 !w-full"
            iconCss="e-search-icon"
          >
            <img
              src="/assets/icons/google.svg"
              className="size-5"
              alt="google"
            />
            <span className="p-18-bold text-white">Sign in with Google</span>
          </ButtonComponent>
        </div>
      </section>
    </main>
  );
};

export default signIn;
