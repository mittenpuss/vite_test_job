import { useState } from 'react'
import Logo from './assets/logo_crop.png'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const name = 'John'
  const x = 10;
  const y = 20;
  const names = ['Brad', 'Mary', 'Joe', 'Jonny'] 
  const loggedIn = false

  // if(loggedIn) {
  //   return <h1>Hello Member</h1>
  // }

  return (
    <>
      <div className='text-5xl'>App</div>
      <p>Hello {name}</p>
      <p>The sum of {x} and {y} is {x + y}</p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>}
    </>
  )
}

export default App
