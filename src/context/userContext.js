import React, {useState} from "react";

const Context = React.createContext({}) // creamos el contexto

export function UserContextProvider ({children}) {
    const [jwt, setJWT] = useState(null) // establecemos el estado de JavaScript Web Token del usuario a través del hook

    return <Context.Provider value={{jwt, setJWT}}> {/*le damos un proveedor a nuestro contexto*/}
             {children}
    </Context.Provider>
}

export default Context
