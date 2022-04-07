export const nextLogin = (navigate) => {
   navigate("/")
}

export const nextCadastro = (navigate) => {
        navigate("/Cadastro")
}

export const nextFeed = (navigate, id) => {
        navigate(`/Inicio/${id}`)
}

export const nextList = (navigate, id) => {
        navigate(`/Lista/${id} `)
}

export const nextComments = (navigate, id) => {
        navigate(`/Comenta/${id}`)
}