usuario = 1
setUsuario = 

const handleChange = async(e) =>{
    const{name, value} = e.target;

    await setUsuario({...usuario, [name]:value})
}
 

const handleSubmit = async(e) =>{
    e.preventDefault();

    let user;

    try{
        const response = await fetch("http://localhost:5000/usuarios");
        if (response.ok){
            console.log(response.json())
        }
    } catch (error){
        console.log(error)
    }
}

// todo: tudo




export default function Login() {
  return (

    

    <div>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Dados de Acesso</legend>
            </fieldset>
            <div>
                <label htmlFor="idEmail">Email</label>
                <input type="email" name=""/>    
            </div>
        </form>
    </div>

    

  )
}
