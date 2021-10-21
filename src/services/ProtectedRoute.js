import React from 'react';
import {Route, Redirect} from 'react-router-dom'


function ProtectedRoute({isAuth: isAuth, component: Component, ...rest}) {  //pasamos los parámetros que vamos a usar
    return (
        <Route 
          {...rest}           //esto significa los parámetros más cualquier otra cosa que agreguemos
          render={(props) =>{
              if(isAuth) {
                  return <Component />  //el componente/página que elijamos proteger
              } else {
                  return (
                      <Redirect to={{pathname:'/login', state: {from: props.location}}} /> //redirección al login
                  )
              }
          }}
        />
    )
}

export default ProtectedRoute
