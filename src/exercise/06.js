// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
// import { useRef } from 'react';
import {useState} from 'react';
;


function UsernameForm({onSubmitUsername}) {
const value = React.useRef(null);
const handleSubmit = (event)=>{
  event.preventDefault();
  console.dir(value.current)
  onSubmitUsername(value.current.value);
}

const [error, setError] = useState(null);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username:</label>
        <input ref={value} id="username" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
