const Landing = (props) => {
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
    </>
  );
}
 
export default Landing;