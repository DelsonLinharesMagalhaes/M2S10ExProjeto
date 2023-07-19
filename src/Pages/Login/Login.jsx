import { useState,useEffect,useRef,useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import './styles.css'
import { LoginApi } from "../../services/web"
import { AuthContext } from "../../context/AuthContext"



function Login(){

    const {login} = useContext(AuthContext)

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorForm, setErrorForm] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        setErrorForm(false)
        emailRef.current.style.borderColor='black'
        passwordRef.current.style.borderColor='black'
    },[password])

    const handleEmailChange = (event) => {
            setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await LoginApi(email, password)
        if(!response){
            setErrorForm(true)
            emailRef.current.style.borderColor='red'
            passwordRef.current.style.borderColor='red'
            return;
        }  
         login(response)
         navigate('/')
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="fs-3">Login</h1>
                    <p></p>                
                    <form style={{'maxWidth': '320px'}} onSubmit={handleSubmit}>
                        <span className="text-sm-left">E-mail</span>
                        <input className="form-control" required type='email' value={email} ref={emailRef} placeholder="Digite seu e-mail" onChange={handleEmailChange}/>
                        <span className="text-sm-left">Senha</span>
                        <input className="form-control" required type='password' minLenght='8' value={password} ref={passwordRef} placeholder='Digite sua senha' onChange={handlePasswordChange}/>
                        {errorForm && <span>E-mail e/ou senha inválidos</span>}
                        <p></p>
                        <button type='submit'className="btn btn-primary">Entrar</button>
                     </form>
                </div>
            </div>
        </div>
    )
}
export default Login