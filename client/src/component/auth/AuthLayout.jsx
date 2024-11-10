import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div>
        <div className="grid grid-cols-2">
          <div>image</div>
          <div>
            <Outlet></Outlet>
          </div>
        </div>
    </div>
  )
}
