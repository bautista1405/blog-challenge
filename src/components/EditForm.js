import { useState } from 'react'
import axios from 'axios'
import { useLocation } from 'wouter'

const EditForm = () => {
    const [posts, setPosts] = useState(null)
    const [, navigate] = useLocation()

    
    const handleOnClick = () => {
        axios.put('https://jsonplaceholder.typicode.com/posts/1')
        .then((posts) => {
           setPosts(posts.data)
        })
        navigate('/')
    }


    
    return (
        <div>
           <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Título</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Escribe el título de tu post..."/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Contenido</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Describe tu post..."></textarea>
            </div>
            <button className="btn btn-success" onClick={handleOnClick}>Submit</button>
        </div>
    )
}

export default EditForm