import { cn } from "lib/utils";
import { Link, NavLink, useLoaderData, useNavigate } from "react-router";
import { logoutUser } from "~/appwrite/auth";
import { sidebarItems } from "~/constants";

const NavItems = ({sidebar}: {sidebar?: ()=> void}) => {
  const user = useLoaderData()
  const navigate = useNavigate()

  const logoutHandler = async () => {
    await logoutUser();
    navigate("/sign-in");
  }
  return (
    <section className="nav-items">
      <Link to="/" className="link-logo">
        <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
        <h1>Tourvisto</h1>
      </Link>

      <div className="container">
        <nav>
          {sidebarItems.map(({ href, id, icon, label }) => (
            <NavLink to={href} key={id}>
              {({ isActive }: { isActive: boolean }) => (
                <div
                onClick={sidebar}
                  className={cn("group nav-item ", {
                    "bg-primary-100 !text-white": isActive,
                  })}
                >
                  <img
                    src={icon}
                    alt={label}
                    className={`group-hover:brightness-0 size-0 group-hover:invert,isActive ? "brightness-0 invert" : "text-dark-200"  `}
                  />
                  {label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      <footer className="nav-footer">
        <img
          src={user?.image || "assets/image/david.webp"}
          alt={user?.name || "david"}
        />
        <article>
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
        </article>
        <button
          onClick={logoutHandler}
          className="cursor-pointer size-6"
        >
          <img src="/assets/icons/logout.svg" alt="logout" />
        </button>
      </footer>
    </section>
  );
};

export default NavItems;
