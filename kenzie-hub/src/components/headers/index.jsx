import { Link, useNavigate } from "react-router-dom";
import { TitleHeaderLogin } from "./style";
import { DivHeaderRegister } from "./style";
import { DivLinkRegister } from "./style";
import { DivHeaderDashboard } from "./style";
import { Hr } from "./style";
import { useContext } from "react";
import { UserContext } from "../contexts/usercontext";
export function HeaderRegister() {
  return (
    <DivHeaderRegister>
      <h1>Kenzie Hub</h1>
      <DivLinkRegister>
        <Link to="/">Voltar</Link>
      </DivLinkRegister>
    </DivHeaderRegister>
  );
}

export function HeaderLogin() {
  return (
    <>
      <TitleHeaderLogin>Kenzie Hub</TitleHeaderLogin>
    </>
  );
}
export function HeaderDashboard() {
  const Navigate = useNavigate();
  const { User, SetUser } = useContext(UserContext);
  let Token = localStorage.getItem("@TokenUser");
  let UserId = localStorage.getItem("@UserId");
  function ClearLogout() {
    localStorage.clear("@TokenUser");
    localStorage.clear("@UserId");

    SetUser({});
    Navigate("/");
  }

  return (
    <>
      <DivHeaderDashboard>
        <h1>Kenzie Hub</h1>
        <button onClick={ClearLogout}>Sair</button>
      </DivHeaderDashboard>
    </>
  );
}
export default HeaderDashboard;
