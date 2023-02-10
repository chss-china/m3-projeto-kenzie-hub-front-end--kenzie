import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Api } from "../../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ButtonRegister } from "../../buttons";
import { ContainerRegister, DivBodyRegister } from "./style";
import { HeaderRegister } from "../../headers";

const formSchema = yup.object().shape({
  name: yup.string().required("Nome Obrigatório"),
  email: yup.string().required("Email obrigatorio").email("Email invalido"),
  password: yup
    .string()
    .required("Senha obrigatoria")
    .matches(
      /(?=^.{8,255}$)((?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))^.*/,
      "Senha invalida"
    ),
  bio: yup.string().required("bio obrigatorio"),
  contact: yup.string().required("Contato obrigatorio"),
});

export function RegisterPage() {
  const navigate = useNavigate();
  const OnSubmitFunction = async (data) => {
    try {
      const response = await Api.post("/users", data);
      toast.success("Usuario criado com sucesso");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  return (
    <DivBodyRegister>
      <HeaderRegister />
      <ContainerRegister>
        <h2>Crie a sua conta</h2>
        <span>Rapido e Grátis, vamos nessa</span>
        <form onSubmit={handleSubmit(OnSubmitFunction)}>
          <section>
            <label htmlfor="name">Nome</label>
            <input
              type="text"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            {errors.name && errors.name.message}
          </section>
          <section>
            <label htmlfor="email">Email</label>

            <input
              type="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            {errors.email && errors.email.message}
          </section>
          <section>
            <label htmlfor="password">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            {errors.password && errors.password.message}
          </section>
          <section>
            <label htmlfor="bio">Minha Bio</label>
            <input
              type="text"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            {errors.bio && errors.bio.message}
          </section>
          <section>
            <label htmlfor="contact">Contato</label>
            <input
              type="number"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            {errors.contact && errors.contact.message}
          </section>
          <section>
            <label htmlfor="course_module">Selecionar Módulo</label>
            <select {...register("course_module")}>
              <option>Módulos</option>
              <option>Primeiro módulo (Introdução ao Frontend)</option>
              <option>Segundo módulo (Frontend Avançado)</option>
              <option>Terceiro módulo (Introdução ao Backend)</option>
              <option>Quarto módulo (Backend Avançado)</option>
            </select>
            {errors.course_module && errors.course_module.message}
            <ButtonRegister />
          </section>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </ContainerRegister>
    </DivBodyRegister>
  );
}
