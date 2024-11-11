import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";

export default function ShoppingLayout() {
  return (
    <div>
      {/* common header */}
      <ShoppingHeader></ShoppingHeader>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  )
}
