import { RoutesPages } from "./components/routes/index"; 
import { ToastContainer, toast } from "react-toastify"; 
import { useEffect, useState } from "react"; 
import { DivBody } from "./appstyle"; 
import { AppDiv } from "./appstyle"; 

import { GlobalStyles } from "./components/styles/globalstyles"; 
import "react-toastify/dist/ReactToastify.css"; 

function App() {
  const [User, SetUser] = useState([]);  

  return (
    <>
      <GlobalStyles />
      <AppDiv>
        <RoutesPages User={User} SetUser={SetUser} /> 
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
