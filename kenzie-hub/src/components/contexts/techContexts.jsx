import { createContext, useEffect, useState } from "react";
import { Api } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const TechContext = createContext({});
export const TechProvider = ({ children }) => {
  const [Tech, SetTech] = useState([]);
  const [MyUserId, SetMyUserId] = "";
  const [OpenModalEdit, SetOpenModalEdit] = useState(false);
  const [TechSelect, SetTechSelect] = useState([]);

  const Token = localStorage.getItem("@tokenUser");

  const FunctionTechRegister = async (data) => {
    try {
      const response = await Api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      SetTech([...Tech, response.data]);
      GetTechs();
      toast.success("Technology registered successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const FunctionTechEdit = async (data) => {
    try {
      const response = await Api.put(`/users/techs/${TechSelect.id}`, data, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      GetTechs();
      toast.success("Technology changed successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const FunctionTechRemove = async (TechId) => {
    try {
      const response = await Api.delete(`/users/techs/${TechId}`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      GetTechs();

      const DeleteFilter = Tech.filter((MyTech) => MyTech.id !== TechId);
      SetTech(DeleteFilter);
      toast.success("Technology removed successfully");
    } catch (error) {
      toast.error(error.response.data.message);
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

  return (
    <>
      <TechContext.Provider
        value={{
          Tech,
          SetTech,
          FunctionTechRegister,
          FunctionTechEdit,
          FunctionTechRemove,
          MyUserId,
          SetMyUserId,
          OpenModalEdit,
          SetOpenModalEdit,
          TechSelect,
          SetTechSelect,
          GetTechs,
        }}
      >
        {children}
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
      </TechContext.Provider>
    </>
  );
};
