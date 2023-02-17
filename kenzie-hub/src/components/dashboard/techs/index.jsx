import { UlTechs } from "./style";

export function Techs({
  TechSelect,
  SetTechSelect,
  MyUser,
  User,
  OpenModalEdit,
  SetOpenModalEdit,
}) {
  function OpenModal(MyUser) {
    SetOpenModalEdit(true);
    SetTechSelect(MyUser);
  }
  return (
    <>
      <UlTechs>
        <li onClick={() => OpenModal(MyUser)} key={MyUser.id}>
          <p>{MyUser && MyUser.title}</p>
          <p>{MyUser && MyUser.status}</p>
        </li>
      </UlTechs>
    </>
  );
}
