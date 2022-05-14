import { useEffect, useState } from "react";

const Chat = ({socket, username, room}) => {

  const [currentMessage, setCurrentMessage] = useState("")

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: 
          new Date(Date.now()).getHours() + 
          ":" +
          new Date(Date.now()).getMinutes(),
      }

      await socket.emit("send_message", messageData)
    }
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data)
    })
  }, [socket])

  return ( 
    <>
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body"></div>
      <div className="chat-footer">
        <input 
          type="text" 
          placeholder="Hello friend..."
          onChange={(evt) => {
            setCurrentMessage(evt.target.value)
          }} 
        />
        <button onClick={sendMessage}>Send &#9658;</button>
      </div>
    </>
   );
}
 
export default Chat;