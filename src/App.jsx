import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Form from './components/Form'
import Post from './components/Post'

const URL = process.env.REACT_APP_API_URL 

const App = () => {
  const [titulo, setTitulo] = useState('')
  const [imgSrc, setImgSRC] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    const { data: posts } = await axios.get(`${URL}/posts`)
    setPosts([...posts])
  }

  const agregarPost = async () => {
    const post = { titulo, url: imgSrc, descripcion }
    await axios.post(`${URL}/posts`, post)
    getPosts()
  }

  const like = async (id) => {
    await axios.put(`${URL}/posts/like/${id}`)
    getPosts()
  }

  const eliminarPost = async (id) => {
    await axios.delete(`${URL}/posts/${id}`)
    getPosts()
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className='App'>
      <h2 className='py-5 text-center'>&#128248; Like Me &#128248;</h2>
      <div className='row m-auto px-5'>
        <div className='col-12 col-sm-4'>
          <Form
            setTitulo={setTitulo}
            setImgSRC={setImgSRC}
            setDescripcion={setDescripcion}
            agregarPost={agregarPost}
          />
        </div>
        <div className='col-12 col-sm-8 px-5 row posts align-items-start'>
          {posts.map((post) => <Post key={post} post={post} like={like} eliminarPost={eliminarPost} />)}
        </div>
      </div>
    </div>
  )
}

export default App
