import Chat from "../components/Chat";

const Home = (props) => {
  return (
    <>
      <h1>Join A Chat</h1>
      <input 
        type="text" 
        placeholder="John" 
        onChange={(evt) => {
          props.setUsername(evt.target.value)
        }}
      />
      <input 
        type="text" 
        placeholder="Room ID" 
        onChange={(evt) => {
          props.setRoom(evt.target.value)
        }}
      />
      <button onClick={props.joinRoom}>Join A Room</button>

      <Chat 
        socket={props.socket} 
        username={props.username} 
        room={props.room}
      />
    </>
  );
}
 
export default Home;