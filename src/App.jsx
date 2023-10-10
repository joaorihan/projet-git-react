import Cabecalho from "./components/Cabecalho";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";


export default function App() {


  //Lista de links redes sociais



  return (
    <>
      <div className="container">
        <Cabecalho />
        <Outlet />
        <Footer/>
      </div>
    </>
  );
}
