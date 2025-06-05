import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import MobileSidebar from "components/MobileSidebar";
import NavItems from "components/NavItems";
import { Outlet, redirect } from "react-router";
import { getExistingUser, storeUserData } from "~/appwrite/auth";
import { account } from "~/appwrite/client";

export async function clientLoader() {
  try {
    const user = await account.get();
    if (!user) return redirect("/sign-in");
    const existingUser = await getExistingUser(user.$id);
    if (existingUser?.status === "user") return redirect("/");
    return existingUser?.$id ? existingUser : await storeUserData();
  } catch (error) {
    console.log("Error fetching user", error);
    return redirect("/sign-in") 
  } 
}

const adminLayout = () => {
  return (
    <div className="admin-layout">
      <MobileSidebar />
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
