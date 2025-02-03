import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Allroutes/AllRoutes";

function App() {
  return (
    <div className=" text-white">
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
