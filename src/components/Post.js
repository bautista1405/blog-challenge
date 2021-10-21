import React, {useState} from 'react'
import {useLocation} from 'wouter'
import axios from 'axios'

const Post = ({post}) => {
    const [status, setStatus] = useState([])
    
    const [, navigate] = useLocation()
    
    const handleOnClick = (e) => {
        e.preventDefault();
            // DELETE request utilizando axios
        axios.delete('https://jsonplaceholder.typicode.com/posts/1')
            
        .then(() => setStatus('Delete successful'));
            
        navigate('/')
    }

    const handleOnClickDetails = (e) => {
        e.preventDefault();
        navigate('/edition-form')
    }

    
    
        return (
        <div >
            {post.map((post) => // usamos el array method 'map' para mostrar datos consumidos a través de la API
              <li className="list-group-item d-flex justify-content-between align-items-center">
                  {post.id}
                  <li>{post.title}</li>
                  <span>{post.body}</span>
                  <li className='list-group'>
                    <button type="button" class="btn btn-secondary" onClick={handleOnClickDetails}>Editar</button> <br/>
                    <button type="button" class="btn btn-danger" onClick={handleOnClick}>X</button>
                  </li>
              </li>
             )}
        </div>
    )
}

export default Post