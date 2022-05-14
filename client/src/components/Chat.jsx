import { useEffect, useState } from "react";

const Chat = ({socket, username, room}) => {

  const [currentMessage, setCurrentMessage] = useState("")
  const [messageList, setMessageList] = useState([])

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
      setMessageList((list) => [...list, messageData])
    }
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data])
    })
  }, [socket])

  return ( 
    <>
      <div className="chat-window">
        <div className="chat-header">
          <p>Live Chat</p>
        </div>
        <div className="chat-body">
          {messageList.map((messageContent, idx) => {
            return (
              <div className="message" id={username === messageContent.author ? "you" : "other"}>
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p>{messageContent.time}</p>
                    <p>{messageContent.author}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="chat-footer">
          <input 
            type="text" 
            placeholder="Hello friend..."
            onChange={(evt) => {
              setCurrentMessage(evt.target.value)
            }} 
          />
          <button onClick={sendMessage}>&#9658;</button>
        </div>
      </div>
    </>
   );
}
 
export default Chat;