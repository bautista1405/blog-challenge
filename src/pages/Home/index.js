import {useState, useEffect} from 'react'
import Navbar from '../../components/Nav'
import Loading from '../../components/Loading'
import axios from 'axios'
import PostsList from '../../components/PostsList'

export default function Home() {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((posts) => {
           setPosts(posts.data)
        })
    }, [])  // este hook se ejecuta solamente una vez, 
           // debido al array vacío que agregamos antes de cerrar el paréntesis, si no sería un loop infinito

    return (
        <div>
            <Navbar />
            {posts ? <PostsList posts={posts} /> : <Loading />}
            {/* aquí utilizamos una ternaria para un renderizado condicional:
            renderizamos el spinner de loading hasta que carguen los posts */}
        </div>
    )
}
