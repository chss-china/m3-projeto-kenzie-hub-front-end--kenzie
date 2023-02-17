import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Api } from "../../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ButtonLogin } from "../../buttons";
import { ContainerLogin, DivBodyLogin } from "./style";
import { HeaderLogin } from "../../headers";
import { SectionSpanButton } from "./style";
import { NavLink } from "./style";
import { useContext } from "react";
import { UserContext } from "../../contexts/usercontext";

export function LoginPage() {
  const { Functionlogin } = useContext(UserContext);
  const FormSchema = yup.object().shape({
    email: yup.string().required("Email obrigatorio").email("Email invalido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
  });

  return (
    <DivBodyLogin>
      <HeaderLogin />
      <ContainerLogin>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(Functionlogin)}>
          <section>
            <label>Email</label>
            <input
              type="email"
              placeholder="Digite seu email"
              {...register("email")}
            />
            <p> {errors.email && errors.email.message}</p>
          </section>
          <section>
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            <p>{errors.password && errors.password.message}</p>
            <ButtonLogin />
          </section>
          <SectionSpanButton>
            <span>Ainda não possui uma conta ?</span>

            <NavLink>
              <Link to="/register"> Cadastre-se</Link>
            </NavLink>
          </SectionSpanButton>
        </form>
      </ContainerLogin>
    </DivBodyLogin>
  );
}
