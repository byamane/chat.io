import './App.css';
import io from 'socket.io-client'
import { useState } from 'react';
import Home from './pages/Home';

const socket = io.connect("http://localhost:3001")

function App() {

  const [username, setUsername] = useState("")
  const [room, setRoom] = useState("")
  const [showChat, setShowChat] = useState(false)

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room)
    }
  }


  return (
    <div className="App">
      <Home 
        joinRoom={joinRoom} 
        username={username}
        setUsername={setUsername}
        room={room}
        setRoom={setRoom}
        socket={socket}
        showChat={showChat}
        setShowChat={setShowChat}
      />
    </div>
  );
}

export default App;
