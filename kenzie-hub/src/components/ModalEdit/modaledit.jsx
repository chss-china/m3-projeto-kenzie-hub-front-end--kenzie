import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { TechContext } from "../contexts/techContexts";
import { DivContainerModalEdit } from "./style";
import { DivRemove } from "./style";

const FormSchemaEdit = yup.object().shape({
  title: yup.string().required("Nome Obrigatório"),
  status: yup.string().required("Status Obrigatório"),
});
export function ModalEdit({
  MyIsOpen,
  SetOpenModalEdit,
  OpenModalEdit,
  TechSelect,
  SetTechSelect,
  Tech,
  SetTech,
}) {
  const { FunctionTechEdit, FunctionTechRemove } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchemaEdit),
  });

  if (MyIsOpen) {
    return (
      <DivContainerModalEdit>
        <div>
          <h1>Tecnologias Detalhadas</h1>
          <span onClick={() => SetOpenModalEdit(false)}>X</span>
        </div>
        <form onSubmit={handleSubmit(FunctionTechEdit)}>
          <label>Nome do projeto</label>
          <input
            type="text"
            placeholder={TechSelect.title}
            {...register("title")}
          />
          {errors.title && <p>{errors.title.message}</p>}
          <label>Status</label>
          <select {...register("status")}>
            <option>Iniciante</option>
            <option>Intermediario</option>
            <option>Avançado</option>
          </select>
          {errors.status && <p>{errors.status.message}</p>}
          <section>
            <button type="submit" onClick={() => SetTech(Tech)}>
              Salvar Alterações
            </button>
            <DivRemove>
              <span onClick={() => FunctionTechRemove(TechSelect.id)}>
                Excluir
              </span>
            </DivRemove>
          </section>
        </form>
      </DivContainerModalEdit>
    );
  }
  return null;
}
