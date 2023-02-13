import { Api } from "../../services/api";
import axios from "axios";
import { useEffect } from "react";
import { HeaderDashboard } from "../headers";
import {
  DivContainerDashboard,
  DivBodyDashboard,
  PModule,
  SectionDeveloping,
} from "./style";
export function DashboardPage({ SetUser, User }) {
  const TokenUser = localStorage.getItem("@tokenUser");
  const ResponseApiFunction = async () => {
    try {
      const { data } = await Api.get("/profile", {
        headers: {
          Authorization: `Bearer ${TokenUser}`,
        },
      });
      SetUser(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    ResponseApiFunction();
  }, []);
  return (
    <DivBodyDashboard>
      <HeaderDashboard User={User} SetUser={SetUser} />
      <DivContainerDashboard>
        <section>
          <h1>Ola,{User.name}</h1>
          <PModule>Modulo: {User.course_module}</PModule>
        </section>

        <SectionDeveloping>
          <h2>Que pena!Estamos em desenvolvimento</h2>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </SectionDeveloping>
      </DivContainerDashboard>
    </DivBodyDashboard>
  );
}
