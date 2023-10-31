
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Excluir.scss'

export default function ExcluirProdutos() {

    //Recuperando o parâmetro ID com o HOOK useParams();
    document.title = "EDITAR PRODUTOS";
    const {id} = useParams();
    const navigate = useNavigate();
    const [produto, setProduto] = useState({
      id:id,
      nome:'',
      desc:'',
      preco:''
    })
    
    useEffect(() => {

      fetch(`http://localhost:5000/produtos/${id}`)
        .then((response)=> response.json())
        .then((response)=> setProduto(response))
        .catch(error=> console.log(error))

    }, [id])



    const handleSubmit = (e) => {
      e.preventDefault();
  
      fetch(`http://localhost:5000/produtos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(produto)
      })
        .then(response => {
          console.log("STATUS DA REQUISIÇÃO : " + response.status);
          navigate("/produtos"); // Redirecionar para a página da tabela
        })
        .catch(error => console.log(error));
    }
  
    const handleCancelar = () => {
      navigate("/produtos"); // Redirecionar para a página da tabela sem excluir
    }
  
    return (
      <div className='main_div_excluir'>
        <h1>Excluindo Produto</h1>
  
        <div>
          <form onSubmit={handleSubmit} className='form'>
            <h3>Tem certeza que deseja excluir?</h3>
  
            <button type="submit" className='btn1'>Sim</button>
            <button type="button" onClick={handleCancelar} className='btn2'>Não</button> {/* Adicione o manipulador de evento onClick */}
          </form>
        </div>
      </div>
    )
  }


