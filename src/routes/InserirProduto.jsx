import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Inserir.scss'

export default function AdicionarProduto() {
  document.title = "ADICIONAR PRODUTO";
  const navigate = useNavigate();
  const [produto, setProduto] = useState({
    nome: '',
    desc: '',
    preco: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/produtos', {
      method: 'POST',
      body: JSON.stringify(produto),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.status === 201) {
          console.log('Produto adicionado com sucesso.');
          navigate('/produtos'); 
        } else {
          console.log('Erro ao adicionar o produto. Status da resposta: ' + response.status);
        }
      })
      .catch(error => console.log(error));
  }

  return (
    <div className='main_div'>
      <h1>ADICIONAR PRODUTO</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Novo Produto</legend>
            <div className='fichas'>
              <label htmlFor="idNome" className='labeltexto1'>Nome</label>
              <input type="text" name="nome" id="idNome" placeholder="Digite o nome do produto" value={produto.nome} onChange={handleChange} />
            </div>
            <div className='fichas'>
              <label htmlFor="idDesc" className='labeltexto2'>Descrição</label>
              <input type="text" name="desc" id="idDesc" placeholder="Digite a descrição do produto" value={produto.desc} onChange={handleChange} />
            </div>
            <div className='fichas'>
              <label htmlFor="idPreco" className='labeltexto3'>Valor</label>
              <input type="number" name="preco" id="idPreco" placeholder="Digite o valor do produto" value={produto.preco} onChange={handleChange} />
            </div>
            <div>
              <button type="submit" className='btn1'>Adicionar</button>
              <button onClick={() => navigate('/produtos')} className='btn2'>Cancelar</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}



