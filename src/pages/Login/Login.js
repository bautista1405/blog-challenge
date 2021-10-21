import React, {useState, useEffect} from "react";
import useUser from "../../hooks/useUser"
import { useLocation } from "wouter";
import {Formik} from 'formik';
import './index.css'

import LoginNav from '../../components/LoginNav'



export default function Login () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [, setLocation] = useLocation()
    const { login, isLogged } = useUser()

  
    useEffect(() => {
      if (isLogged) { 
        
        setLocation("/");
      }
  }, [isLogged, setLocation])

    const handleFormSubmit = (e) => {
      e.preventDefault();
      login({email, password})
      setLocation("/")
  }
    
    

    return (
      <div>
          <LoginNav />
          <h3>Conectate y conocé las últimas noticias</h3>
        <Formik
          initialValues={{
            email: 'challenge@alkemy.org',
            password: 'react'
          }}

          validate={values => {    // aquí mostramos un mensaje si se requiere que 
                                  // se rellene algún campo (email o password)
            const errors = {}
            
            if(!values.email) {
              errors.email = 'Email requerido'
            }

            if(!values.password) {
              errors.password = 'Contraseña requerida'
            }

            return errors
          }}

          onSubmit={(values, {setErrors}) => {
            return login (values)
            .catch(() => {
              setErrors('', 'Email o contraseña no son válidos')
            })
          }}
        >
        { ({handleSubmit, handleChange, errors}) => (// aquí pasamos por parámetros events handlers de formik
            <form onSubmit={handleSubmit} style={{marginTop:'20px'}} className="form">
                <div>
                    <input 
                      placeholder='email'
                      name="email"
                      onChange={handleChange}
                      
                    />
                </div>
                <br/>
                <div>
                    <input 
                      type='password'
                      placeholder='password'
                      name="password"
                      onChange={handleChange}
                      
                    />
                </div>
                <br/>
                <button class="btn btn-info" type="submit" onClick={handleFormSubmit}>Login</button>
                <span style={{color:'red'}}>
                  {errors.email || ''}       {/*aquí, si hay error en el email, mostramos el error*/}
                  {errors.password || ''}    {/*aquí, si hay error en el password, mostramos el error*/}
                </span>
          </form>
        )}
        </Formik>
      </div>
    )
}