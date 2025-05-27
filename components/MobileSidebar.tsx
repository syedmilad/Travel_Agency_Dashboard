import type { SidebarComponent } from "@syncfusion/ej2-react-navigations"
import { Link } from "react-router"

const MobileSidebar = ()  => {
  let sidebar: SidebarComponent;
  return (
    <div className="mobile-sidebar wrapper">
      <header>
        <Link to="/" className="link-logo">
          <img src="assets/icons/logo.svg" alt="logo" className="size-[30px]" />
          <h1>Tourvisto</h1>
        </Link>
        {/* @ts-ignore */}
        <button onClick={()=> sidebar.toggle()} >

        </button>
      </header>
    </div>
  )
}

export default MobileSidebar