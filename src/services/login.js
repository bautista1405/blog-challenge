const ENDPOINT = 'http://challenge-react.alkemy.org/' // endpoint al cual se le hará la petición de autenticación

export default function login ({email, password}) { // pasamos como parámetros un email y una password
                                                   //  y en caso de ser autorizadas por la API, el usuario
                                                  //   podrá loguearse en la app
    return fetch(`${ENDPOINT}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // especificamos el tipo de dato
            
        },
        body: JSON.stringify({email, password})
    }).then(res => {
        return res.json()
    }).then(res => {
        const { jwt } = res
        return jwt          // le damos al usuario un token para su sesión
    })
}
