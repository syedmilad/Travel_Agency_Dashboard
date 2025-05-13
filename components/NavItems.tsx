import { cn } from "lib/utils"
import { Link, NavLink } from "react-router"
import { sidebarItems } from "~/constants"

const user = {
    name: "Milad-Dev",
    imageUrl: "/assets/images/david.webp",
    email: "contact@miladDev.com"
}
const NavItems = () => {
  return (
    <section className="nav-items">
        <Link to="/" className="link-logo">
            <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
            <h1>Tourvisto</h1>
        </Link>
        <div className="container">
            <nav>
                {sidebarItems.map(({href,id,icon,label})=>(
                    <NavLink to={href} key={id}>
                        {({isActive}: {isActive: Boolean})=>(
                            <div className={cn('group nav-item', {
                                'bg-primary-100 !text-white': isActive
                            })}>
                                <img src={icon} alt={label}  className={`group-hover:brightness-0 size-0 group-hover:invert ${isActive ? 'brightness-0 invert' : 'text-dark'} `} />
                                {label}
                            </div>
                        )}
                    </NavLink>
                ))}
            </nav>
            <footer className="nav-footer">
                <img src={user?.imageUrl || "/assets/images/david.webp"} alt={user?.name ||  "Milad-Dev"}  />
                <article>
                    <h2>{user?.name || "Milad-Dev"}</h2>
                    <p>{user?.email || "contact@milad.com"}</p>
                </article>
                <button className="cursor-pointer">
                    <img src="/assets/icons/logout.svg" alt="logout" className="size-6" onClick={()=>console.log("logout")} />
                </button>
            </footer>
        </div>
    </section>
  )
}

export default NavItems