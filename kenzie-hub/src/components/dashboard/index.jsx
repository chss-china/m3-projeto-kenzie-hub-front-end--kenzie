import { Api } from "../../services/api";
import axios from "axios";
import { useEffect } from "react";
import { HeaderDashboard } from "../headers";
import {
  DivContainerDashboard,
  DivBodyDashboard,
  PModulo,
  SectionEstamosDesenv,
} from "./style";
export function DashboardPage({ setUser, user }) {
  const TokenUser = localStorage.getItem("@tokenUser");
  const responseApiFunction = async () => {
    try {
      const { data } = await Api.get("/profile", {
        headers: {
          Authorization: `Bearer ${TokenUser}`,
        },
      });
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    responseApiFunction();
  }, []);
  return (
    <DivBodyDashboard>
      <HeaderDashboard user={user} setUser={setUser} />
      <DivContainerDashboard>
        <section>
          <h1>Ola,{user.name}</h1>
          <PModulo>Modulo: {user.course_module}</PModulo>
        </section>
        <SectionEstamosDesenv>
          <h2>Que pena!Estamos em desenvolvimento</h2>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </SectionEstamosDesenv>
      </DivContainerDashboard>
    </DivBodyDashboard>
  );
}
