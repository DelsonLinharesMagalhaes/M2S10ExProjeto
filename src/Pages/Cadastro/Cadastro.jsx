import { useState } from "react"
import { criarUsuario } from "../../services/usuario"

function Cadastro() {

    const [isLoading, setIsLoading] = useState(false)
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleNomeChange = (event) => {
        setNome(event.target.value)
    }

    const handleSobrenomeChange = (event) => {
        setSobrenome(event.target.value)
    }

    const handleSenhaChange = (event) => {
        setSenha(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()        
        setIsLoading(true)

        const formData = {            
            nome,
            sobrenome,
            email,
            senha
        }

        await criarUsuario(formData)

        setTimeout(() => {
            setIsLoading(false)
            // redirecionar para home
        }, 2500);

    }

    return (
        <>
            <h1>Cadastro</h1>

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <input type="text" value={nome} className="form-control" placeholder="Nome" aria-label="Nome" onChange={handleNomeChange} />
                    </div>
                    <div className="col">
                        <input type="text" value={sobrenome} className="form-control" placeholder="Sobrenome" aria-label="Sobrenome" onChange={handleSobrenomeChange} />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <input type="email" value={email} className="form-control" placeholder="E-mail" aria-label="E-mail" onChange={handleEmailChange} />
                    </div>
                    <div className="col">
                        <input type="password" value={senha} className="form-control" placeholder="Senha" aria-label="Senha" onChange={handleSenhaChange} />
                    </div>
                </div>

                {!isLoading ?
                    <button type="submit" className="btn btn-primary">Criar Conta</button>
                    :
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }
            </form>
        </>
    )
}

export default Cadastro