
const URL_API = 'http://localhost:3000'

export async function criarUsuario(formData) {
    console.log(formData)
    fetch(`${URL_API}/usuarios`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    }).then((response) => response.json())
        .then(result => {
            console.log('Dado salvo. ', result)
        }).catch(err => {
            console.log('Erro ao salvar o dado.')
            console.log(err)
        })
}