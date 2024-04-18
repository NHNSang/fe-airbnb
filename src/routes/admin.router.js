import { Route, Routes } from "react-router-dom";
import LoginAdmin from "../pages/admin/loginAdmin";
import AdminPage from "../pages/admin";
import UserManager from "../pages/admin/userManager";
import CreateUser from "../pages/admin/createUser";

export default function AdminRouter() {
    return (
        <Routes>
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/loginAdmin" element={<LoginAdmin />} />
            <Route path="/admin/user-manager" element={<UserManager />} />
            <Route path="/admin/create-user" element={<CreateUser />} />


        </Routes>
    );
};