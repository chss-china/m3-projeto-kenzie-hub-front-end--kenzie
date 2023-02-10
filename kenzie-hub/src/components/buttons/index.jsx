import { ButtonRegisterStyle } from "./style";
import { ButtonLoginStyle } from "./style";
export function ButtonLogin() {
  return (
    <>
      <ButtonLoginStyle type="submit">Entrar</ButtonLoginStyle>
    </>
  );
}
export function ButtonRegister() {
  return (
    <>
      <ButtonRegisterStyle type="submit">Cadastrar</ButtonRegisterStyle>
    </>
  );
}
