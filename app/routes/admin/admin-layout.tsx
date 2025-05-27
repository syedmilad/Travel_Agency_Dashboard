import React from "react";
import { Outlet } from "react-router";
import {SidebarComponent} from '@syncfusion/ej2-react-navigations';
import NavItems from "components/NavItems";
import MobileSidebar from "components/MobileSidebar";

const adminLayout = () => {
  return (
    <div className="admin-layout">
      <MobileSidebar/>
      <aside className="w-full hidden lg:block max-w-[270px] ">
        <SidebarComponent width={270} enableGestures={false}>
          <NavItems />
        </SidebarComponent>
      </aside>
      <aside className="children">
        <Outlet />
      </aside>
    </div>
  );
};

export default adminLayout;
