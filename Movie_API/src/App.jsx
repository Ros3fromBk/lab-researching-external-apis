import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
  const App = ({ onSearch }) => {

    const [query, setQuery] = useState("")

    const handleInputChange = e => setQuery(e.target.value)
    const handleSubmit = e => {
        e.preventDefault()
  const apiKey = import.meta.env.VITE_API_KEY
  // const [count, setCount] = useState(0)
// console.log (apiKey, `http://www.omdbapi.com/?apikey=${apikey}`
fetch(`http://www.omdbapi.com/?apikey=${apikey}t=elf&plot=full`)
.then(r => r.json())
.then(data => onSearch(data.items))
.catch(err => console.log(err))
    }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
     
    </>
  )
}

export default App
