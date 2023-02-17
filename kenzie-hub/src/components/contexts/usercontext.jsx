import { createContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Api } from "../../services/api";
import axios from "axios";

export const UserContext = createContext({});
export const UserProvider = ({ children }) => {
  const [User, SetUser] = useState([]);
  const Navigate3 = useNavigate();

  useEffect(() => {
    const TokenUserAutoLogin = localStorage.getItem("@tokenUser");
    const ResponseApiAutoLogin = async () => {
      if (TokenUserAutoLogin) {
        try {
          const response = await Api.get("/profile", {
            headers: {
              Authorization: `Bearer ${TokenUserAutoLogin}`,
            },
          });
          SetUser(response.data);
          Navigate3("/dashboard");
        } catch (error) {
          localStorage.clear("@TokenUser");
          console.log(error);
        }
      }
    };
    ResponseApiAutoLogin();
  }, []);

  const Navigate2 = useNavigate();
  const Functionlogin = async (data) => {
    try {
      const response = await Api.post("/sessions", data);
      SetUser(response.data.user);
      let TokenData = localStorage.setItem("@tokenUser", response.data.token);
      let UserId = localStorage.setItem("@UserId", response.data.user.id);
      setTimeout(() => {
        Navigate2("/dashboard");
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  const Navigate = useNavigate();
  const FunctionRegister = async (data) => {
    try {
      const Response = await Api.post("/users", data);
      toast.success("user created successfully");
      setTimeout(() => {
        Navigate("/");
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <UserContext.Provider
        value={{ Functionlogin, FunctionRegister, User, SetUser }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};
