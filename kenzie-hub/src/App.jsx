import { RoutesPages } from "./components/routes/index";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { DivBody } from "./appstyle";
import { AppDiv } from "./appstyle";
import { GlobalStyles } from "./components/styles/globalstyles";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [OpenModalRegister, SetOpenModalregister] = useState(false);

  return (
    <>
      <GlobalStyles />
      <AppDiv>
        <RoutesPages
          OpenModalRegister={OpenModalRegister}
          SetOpenModalregister={SetOpenModalregister}
        />
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
      </AppDiv>
    </>
  );
}

export default App;
