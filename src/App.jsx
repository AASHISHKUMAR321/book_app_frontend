import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import MainRoute from './components/MainRoute'
import axios from 'axios'
axios.defaults.withCredentials = true;



function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
    <Navbar/>
    <MainRoute/>
    <button onClick={()=>{
       axios.get("https://book-app-g0al.onrender.com/books/review",{withCredentials:true}).then(d=>console.log(d))
    }}>get data</button>
    </>
  )
}

export default App
