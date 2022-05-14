import './App.css';
import io from 'socket.io-client'
import { useState } from 'react';
import Landing from './pages/Landing';

const socket = io.connect("http://localhost:3001")

function App() {

  const [username, setUsername] = useState("")
  const [room, setRoom] = useState("")

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room)
    }
  }


  return (
    <div className="App">
      <Landing 
        joinRoom={joinRoom} 
        username={username}
        setUsername={setUsername}
        room={room}
        setRoom={setRoom}
      />
    </div>
  );
}

export default App;
