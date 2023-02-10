import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../forms/loginpage";
import { RegisterPage } from "../forms/registerPage";
import { NotFoundPage } from "../notFound";
import { DashboardPage } from "../dashboard/index";

export function RoutesPages({ user, setUser }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage user={user} setUser={setUser} />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/dashboard"
          element={<DashboardPage user={user} setUser={setUser} />}
        />
        <Route path="*" element={<h1>404- Pagina não encontrada</h1>} />
      </Routes>
    </>
  );
}
//
