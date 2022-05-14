import './App.css';
import io from 'socket.io-client'
import { useState } from 'react';

const socket = io.connect("http://localhost:3001")

function App() {

  const [username, setUsername] = useState("")
  const [room, setRoom] = useState("")

  const joinRoom = () => {
    if (username !== "" && room !== "") {

    }
  }


  return (
    <div className="App">
      <h1>Join A Chat</h1>
      <input 
        type="text" 
        placeholder="John" 
        onChange={(evt) => {
          setUsername(evt.target.value)
        }}
      />
      <input type="text" placeholder="Room ID..."/>
      <button>Join A Room</button>
    </div>
  );
}

export default App;
