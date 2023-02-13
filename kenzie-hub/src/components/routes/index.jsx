import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../forms/loginpage";
import { RegisterPage } from "../forms/registerPage";
import { NotFoundPage } from "../notFound";
import { DashboardPage } from "../dashboard/index";

export function RoutesPages({ User, SetUser }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage User={User} SetUser={SetUser} />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/dashboard"
          element={<DashboardPage User={User} SetUser={SetUser} />}
        />
        <Route path="*" element={<h1>404- Pagina não encontrada</h1>} />
      </Routes>
    </>
  );
}
//
