
import { Route } from "react-router-dom";
import AuthLayout from "../auth/AuthLayout";
import Login from "../auth/login/AuthLogin";
import Registration from "../auth/registration/Registration";

export default function NavRoutes() {
  return (
    <div>

        <Route path="/auth" element={<AuthLayout></AuthLayout>}>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Registration></Registration>}></Route>
      </Route>

    </div>
  );
}
