import { Outlet } from "react-router-dom";
import CommonBackground from "./commonBackground/CommonBackground";

export default function AuthLayout() {
  return (
    <div>
        <div className="grid grid-cols-2">
          <CommonBackground></CommonBackground>
          <div className="h-screen ">
           <div>
           <Outlet></Outlet>
           </div>
          </div>
        </div>
    </div>
  )
}
