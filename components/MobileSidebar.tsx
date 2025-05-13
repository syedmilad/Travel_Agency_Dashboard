// @ts-nocheck
import { useRef } from "react";
import { Link } from "react-router";
import pkg from "@syncfusion/ej2-react-navigations";
const { SidebarComponent } = pkg;

const MobileSidebar = () => {
  const sidebarRef = useRef(null);

  const handleToggle = () => {
    console.log("toggle");
    if (sidebarRef.current) {
      sidebarRef.current.toggle(); // Call Syncfusion's toggle method
    }
  };
  return (
    <div className="mobile-sidebar wrapper">
      <header>
        <Link to="/">
          <img
            src="/assets/icons/logo.svg"
            alt="logo"
            className="size-[30px]"
          />
          <h1>Tourvisto</h1>
        </Link>

        <button onClick={handleToggle}>
          <img src="/assets/icons/menu.svg" alt="menu" className="size-7" />
        </button>
      </header>

      <SidebarComponent
        width={270}
        ref={sidebarRef}
        created={() => sidebarRef.current?.hide()}
        closeOnDocumentClick={true}
        showBackdrop={true}
      >
        </SidebarComponent>
    </div>
  );
};

export default MobileSidebar;
