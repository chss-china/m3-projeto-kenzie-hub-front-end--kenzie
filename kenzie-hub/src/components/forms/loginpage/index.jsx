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

export function LoginPage({ User, SetUser }) {
  const FormSchema = yup.object().shape({
    email: yup.string().required("Email obrigatorio").email("Email invalido"),
    password: yup.string().required("Senha obrigatória"),
  });
  const Navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
  });

  const OnSubmitFunction = async (data) => {
    try {
      const response = await Api.post("/sessions", data);
      SetUser(response.data.user);
      let TokenData = localStorage.setItem("@tokenUser", response.data.token);
      let UserId = localStorage.setItem("@UserId", response.data.user.id);
      setTimeout(() => {
        Navigate("/dashboard");
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <DivBodyLogin>
      <HeaderLogin />
      <ContainerLogin>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(OnSubmitFunction)}>
          <section>
            <label forhtml="email">Email</label>
            <input
              type="email"
              placeholder="Digite seu email"
              {...register("email")}
            />
            <p> {errors.email && errors.email.message}</p>
          </section>
          <section>
            <label forhtml="password">Senha</label>
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
