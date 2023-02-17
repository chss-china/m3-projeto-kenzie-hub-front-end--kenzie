import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Api } from "../../services/api";
import { useContext } from "react";
import { TechContext } from "../contexts/techContexts";
import { DivContainerModalRegister } from "./style";

const FormSchemaModal = yup.object().shape({
  title: yup.string().required("Nome obrigatório"),
  status: yup.string().required("Status Obrigatório"),
});
export function ModalRegisterTech({ IsOpen, SetOpenModalregister }) {
  const { FunctionTechRegister } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchemaModal),
  });
  if (IsOpen) {
    return (
      <DivContainerModalRegister>
        <div>
          <h1>Cadastrar Tecnologias</h1>
          <span onClick={() => SetOpenModalregister(false)}>X</span>
        </div>
        <form onSubmit={handleSubmit(FunctionTechRegister)}>
          <label>Nome:</label>
          <input type="text" placeholder="Tecnologia" {...register("title")} />
          {errors.title && <p>{errors.title.message}</p>}

          <label>Selecionar Status</label>
          <select type="text" {...register("status")}>
            <option>Iniciante</option>
            <option>Intermediario</option>
            <option>Avançado</option>
          </select>
          {errors.status && <p>{errors.status.message}</p>}

          <button type="submit">Cadastrar Tecnologias</button>
        </form>
      </DivContainerModalRegister>
    );
  }
  return null;
}
