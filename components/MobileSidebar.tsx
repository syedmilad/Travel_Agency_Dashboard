import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { Link } from "react-router";
import NavItems from "./NavItems";
// @ts-nocheck

const MobileSidebar = () => {
  let sidebar: SidebarComponent;

  const sidebarToggle = () =>{
    sidebar.toggle();

    console.log("sidebar", sidebar);
  }

  return (
    <div className="mobile-sidebar wrapper">
      <header>
        <Link to="/" className="link-logo">
          <img src="assets/icons/logo.svg" alt="logo" className="size-[30px]" />
          <h1>Tourvisto</h1>
        </Link>
        {/* @ts-ignore */}
        <button className="cursor-pointer" onClick={sidebarToggle}>
          <img src="assets/icons/menu.svg" alt="menu" className="size-7" />
        </button>
      </header>
      <SidebarComponent
        width={270}
        ref={(Sidebar) => (sidebar = Sidebar)}
        created={() => sidebar.hide()}
        closeOnDocumentClick={true}
        showBackdrop={true}
        type="over"
      >
        <NavItems sidebar={sidebarToggle} />
      </SidebarComponent>
    </div>
  );
};

export default MobileSidebar;
