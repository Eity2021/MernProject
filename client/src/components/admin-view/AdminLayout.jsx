import { Outlet } from "react-router-dom";
import AdminHeader from "./adminHeader/AdminHeader";
import AdminSidebar from "./adminSidebar/AdminSidebar";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen w-full">
      {/* admin sidebar */}
        <AdminSidebar></AdminSidebar>
      <div className="flex flex-1 flex-col">
        {/* admin header */}
      <AdminHeader></AdminHeader>
        <main className="flex-1 flex  p-4 md:p-6 ">
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
}
