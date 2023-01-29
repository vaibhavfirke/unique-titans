
import io from "socket.io-client";
import { useState } from "react";
import ChatMessage from "../Components/ChatMessage";
import styles from "../styles/chat.module.css"
const socket = io("http://localhost:5001");

function Chat() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("1");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className={styles.App}>
      {!showChat ? (
        <div className={styles.joinChatContainer}>
          <h3>Enter your Name</h3>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          {/* <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          /> */}
          <button onClick={joinRoom}>Join A Chat</button>
        </div>
      ) : (
        <ChatMessage socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default Chat;