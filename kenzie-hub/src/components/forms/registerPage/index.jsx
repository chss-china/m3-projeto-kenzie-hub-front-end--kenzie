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
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../contexts/usercontext";

const FormSchema = yup.object().shape({
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
  const { FunctionRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
  });
  return (
    <DivBodyRegister>
      <HeaderRegister />
      <ContainerRegister>
        <h2>Crie a sua conta</h2>
        <span>Rapido e Grátis, vamos nessa</span>
        <form onSubmit={handleSubmit(FunctionRegister)}>
          <section>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            <p>{errors.name && errors.name.message}</p>
          </section>
          <section>
            <label>Email</label>

            <input
              type="email"
              placeholder="Digite aqui seu email"
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
            <p> {errors.password && errors.password.message}</p>
          </section>
          <section>
            <label>Minha Bio</label>
            <input
              type="text"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            <p>{errors.bio && errors.bio.message}</p>
          </section>
          <section>
            <label>Contato</label>
            <input
              type="number"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            <p>{errors.contact && errors.contact.message}</p>
          </section>
          <section>
            <label>Selecionar Módulo</label>
            <select {...register("course_module")}>
              <option>Módulos</option>
              <option>Primeiro módulo (Introdução ao Frontend)</option>
              <option>Segundo módulo (Frontend Avançado)</option>
              <option>Terceiro módulo (Introdução ao Backend)</option>
              <option>Quarto módulo (Backend Avançado)</option>
            </select>
            <p>{errors.course_module && errors.course_module.message}</p>
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
