import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../forms/loginpage";
import { RegisterPage } from "../forms/registerPage";
import { DashboardPage } from "../dashboard/index";

export function RoutesPages({ OpenModalRegister, SetOpenModalregister }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/dashboard"
          element={
            <DashboardPage
              OpenModalRegister={OpenModalRegister}
              SetOpenModalregister={SetOpenModalregister}
            />
          }
        />
        <Route path="*" element={<h1>404- Pagina não encontrada</h1>} />
      </Routes>
    </>
  );
}
