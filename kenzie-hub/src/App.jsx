import { RoutesPages } from "./components/routes/index";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { DivBody } from "./appstyle";
import { AppDiv } from "./appstyle";
import { GlobalStyles } from "./components/styles/globalstyles";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [user, setUser] = useState([]);

  return (
    <>
      <GlobalStyles />
      <AppDiv>
        <RoutesPages user={user} setUser={setUser} />
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
