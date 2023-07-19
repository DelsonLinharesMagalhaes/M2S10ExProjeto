import { NavLink } from "react-router-dom"
import './styles.css'
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"


function Header(){

const {logout} = useContext(AuthContext)

    return(
        <div>
            <ul className="menu-header">
                <li className="menu-item">
                   <NavLink to ='/'>Home</NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to ='cadastro'>Cadastro</NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to ='noticias'>Noticias</NavLink>
                </li>
                <li>
                   <button onClick={logout} className="btn btn-primary">Logout</button>
                </li>
            </ul>     
        </div>
    )
}
export default Header