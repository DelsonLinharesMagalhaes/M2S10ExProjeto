import { LoginApi } from "../../services/web"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import CardNoticia from "../../Components/HomeComponents/CardNoticia/CardNoticia"


function Home(){

    const [usuarios, setUsuarios] = useState([])

    useEffect(()=>{
        async function fetchAll(){
            const data = await LoginApi()
            setUsuarios(data)
        }
        fetchAll()
    },[])

    const temNoticia = true;
      
    const renderizarQtdNoticias = () => {
        if (temNoticia) {
            return <span>Tem {noticias.length} notícias não lidas</span>
        } 
        return <span>Não existe notícia.</span>
    }

     return(
        <>
            <h1>Home</h1>
            
            {renderizarQtdNoticias()}

            {noticias.map(noticia => {
                return <CardNoticia key={noticia.id} 
                            titulo={noticia.titulo} srcImage={noticia.imagem.src} />
            })}
        </>
    )
}
export default Home