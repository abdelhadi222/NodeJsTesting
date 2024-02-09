import one from "./image/One.jpg"
import axios from "axios"
import "./App.css"
import { useEffect, useState } from "react"
function App() {

  let [user,setUser] = useState('')

  useEffect(()=>{
    getData()
  },[])

  async function getData() {
     try {
    const res = await axios.get("http://localhost:5600/api")
        console.log(res);
        setUser(res.data.User)
     } catch (err) {
         console.log(err);
     }
  }


  return (
    <>
      <main className="main" style={{backgroundImage:`url(${one})`}}>
          <div style={{zIndex:'2000',position:"absolute",width:'45%',fontSize:'30Px'}}>
             <h1>Hello I'm <span>{user.name}</span> and My Age is <span>{user.age} </span> ans</h1>
          </div>
      </main>
    </>
  )
}

export default App
