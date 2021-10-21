import { useCallback, useContext } from "react";
import Context from "../context/userContext"
import loginService from "../services/login"

export default function useUser () {
    const {jwt, setJWT} = useContext(Context) // utilizamos el hook de contexto

    const login = useCallback(({email, password}) => { // traemos un email y una password 
                                                      // para que en caso de ser autorizadas por la API
                                                     //  el usuario pueda loguearse en la app
        loginService({email, password})
        .then(jwt => {
            setJWT(jwt)
        })
    }, [setJWT])

    const logout = useCallback(() => { // cuando el usuario decide hacer el logout de la app
        setJWT(null)
    }, [setJWT] )

    return {
        isLogged: Boolean(jwt), // aquí, si el usuario está logueado (true) tendrá un JWT
                               // sino, no poseerá un JWT 
        login,
        logout
    }
}