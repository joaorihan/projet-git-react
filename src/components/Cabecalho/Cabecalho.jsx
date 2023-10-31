import { Link, useLocation } from "react-router-dom";
import styles from "./Cabecalho.module.css";
import "./Cabecalho.scss"


export default function Cabecalho(){

    const rotaAtual = useLocation()


    return(
        <header className={styles.cabecalho}>

          <img src="/img/produtos.png" alt="mão segurando caixa" />

          {/* Crie uma lista com 5 links para as nossas rotas:
          Obs: Utilize o componente Link do router-dom */}

          <nav>
            <ul>
              <li><Link to="/" className={rotaAtual.pathname == "/" ? "active" : "" }>HOME</Link></li>
              <li><Link to="/produtos" className={rotaAtual.pathname == "/produtos" ? "active" : "" }>PRODUTOS</Link> </li>
              {/* <li><Link to="/editar/produtos/1">Produto - 1</Link></li>
              <li><Link to="/editar/produtos/2">Produto - 2</Link></li>
              <li><Link to="/editar/produtos/3">Produto - 3</Link></li> */}
            </ul>
          </nav>


        </header>
    )
}
