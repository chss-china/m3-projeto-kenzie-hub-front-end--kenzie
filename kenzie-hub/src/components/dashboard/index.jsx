import { Api } from "../../services/api";
import axios from "axios";
import { useEffect, useState } from "react";
import { HeaderDashboard } from "../headers";
import {
  DivContainerDashboard,
  DivBodyDashboard,
  PModule,
  SectionDeveloping,
} from "./style";
import { useContext } from "react";
import { UserContext } from "../contexts/usercontext";
import { ModalRegisterTech } from "../ModalRegister/modal";
import { Techs } from "./techs";
import { TechContext } from "../contexts/techContexts";
import { ModalEdit } from "../ModalEdit/modaledit";
import { H1Name } from "./style";
export function DashboardPage({ OpenModalRegister, SetOpenModalregister }) {
  const { User, SetUser } = useContext(UserContext);

  const { Tech, SetTech, OpenModalEdit, SetOpenModalEdit } =
    useContext(TechContext);
  const { TechSelect, SetTechSelect } = useContext(TechContext);
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

  const UserId = localStorage.getItem("@UserId");
  const GetTechs = async () => {
    try {
      const response = await Api.get(`/users/${UserId}`);

      SetTech([...response.data.techs]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ResponseApiFunction();
    GetTechs();
  }, []);

  const MyTokenUser = localStorage.getItem("@tokenUser");
  if (MyTokenUser) {
    return (
      <>
        <DivBodyDashboard>
          <HeaderDashboard User={User} SetUser={SetUser} />
          <DivContainerDashboard>
            <section>
              <H1Name>Ola,{User.name}</H1Name>
              <PModule>Modulo: {User.course_module}</PModule>
            </section>

            <SectionDeveloping>
              <div>
                <h1>Tecnologias</h1>
                <button onClick={() => SetOpenModalregister(true)}>+</button>
              </div>
              <article>
                {Tech?.map((MyUser, index) => {
                  return (
                    <Techs
                      key={MyUser.id}
                      SetOpenModalEdit={SetOpenModalEdit}
                      OpenModalEdit={OpenModalEdit}
                      MyUser={MyUser}
                      TechSelect={TechSelect}
                      SetTechSelect={SetTechSelect}
                    ></Techs>
                  );
                })}
              </article>
            </SectionDeveloping>
            <ModalRegisterTech
              IsOpen={OpenModalRegister}
              SetOpenModalregister={SetOpenModalregister}
            />
            <ModalEdit
              MyIsOpen={OpenModalEdit}
              OpenModalEdit={OpenModalEdit}
              SetOpenModalEdit={SetOpenModalEdit}
              TechSelect={TechSelect}
              SetTechSelect={SetTechSelect}
              Tech={Tech}
              SetTech={SetTech}
            />
          </DivContainerDashboard>
        </DivBodyDashboard>
      </>
    );
  } else {
    return (
      <>
        <h1>404 - Pagina não Encontrada</h1>
      </>
    );
  }
}
