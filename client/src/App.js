import './App.css';
import io from 'socket.io-client'

const socket = io.connect("http://localhost:3001")

function App() {
  return (
    <div className="App">
      <h1>Join A Chat</h1>
      <input type="text" placeholder="Brandon"/>
      <input type="text" placeholder="Room ID..."/>
    </div>
  );
}

export default App;
