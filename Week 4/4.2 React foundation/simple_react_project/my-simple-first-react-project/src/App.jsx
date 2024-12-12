import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)   // this is how we define state variable in react, if this updates then will change DOM acc. to it

  return (   // function returning some html, jsx file can support html it is a combination of javascript and html
    <>
      <div>
        
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      
    </>
  )
}

export default App



