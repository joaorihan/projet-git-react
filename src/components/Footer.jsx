import { createElement } from "react";

export default function Footer(props){

    return(
        <footer>
          
          <ul>
              {props.listaProps.map( (li,index)=>{
                createElement('li', { key:index}, li);
                  return li;
            })}
          </ul>
          
          <p>%copy; 2021, Vite.js and React.</p>
        </footer>
    );
}