import React, {useEffect, useState} from "react";
import axios from 'axios'
import Post from '../../components//Post'
import Navbar from '../../components/Nav'
import Loading from '../../components/Loading'
import {withRouter} from 'react-router-dom'

function Details () {
    const [post, setPost] = useState(null)

    useEffect(() => {
        // aquí utilizamos axios dentro de un hook para llevar a cabo la petición HTTP 'get'
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then((post) => {
           setPost(post.data)
        })
    }, []) // este hook se ejecuta solamente una vez, 
          // debido al array vacío que agregamos antes de cerrar el paréntesis, si no sería un loop infinito

    return (
        <div>
            <Navbar />
            {post ? <Post post={post} /> : <Loading />} 
            {/* aquí utilizamos una ternaria para un renderizado condicional:
            renderizamos el spinner de loading hasta que carguen los posts */}
        </div>
    )
  
}

export default withRouter(Details)