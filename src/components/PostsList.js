import React, {useState} from 'react'
import {useLocation} from 'wouter'
import axios from 'axios'

const PostsList = ({posts}) => {
    const [post, setPost] = useState(null)
    const [, navigate] = useLocation() // utilizamos el hook de redirección de wouter
    
    const handleOnClick = (e) => {
        e.preventDefault();
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((post) => {
           setPost(post.data)
        })
        navigate('/details') // aquí establecemos a qué parte de la app 
                            // tiene que ser redirigido el usuario al hacer click
    }
    
    return (
        <div >
            {posts.map((post) => 
              <li className="list-group-item d-flex justify-content-between align-items-center">
                  {post.title}
                  <li className='list-group'>
                    <button type="button" class="btn btn-info" onClick={handleOnClick}>Detalles</button>
                  </li>
              </li>
             )}
        </div>
    )
}

export default PostsList
