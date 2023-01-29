import React, { useEffect, useState } from "react";
// import ScrollToBottom from "react-scroll-to-bottom";
import styles from "../styles/chat.module.css"
function ChatMessage({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

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
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className={styles.chatwindow}>
      <div className={styles.chatheader}>
        <p>Message</p>
      </div>
      <div className={styles.chatbody}>
        <div className={styles.messagecontainer}>
          {messageList.map((messageContent) => {
            return (
              <div
                className={styles.message}
                id={username === messageContent.author ? styles.you : styles.other}
              >
                <div>
                  <div className={styles.messagecontent}>
                    <p>{messageContent.message}</p>
                  </div>
                  <div className={styles.messagemeta}>
                    <p id={styles.time}>{messageContent.time}</p>
                    <p id={styles.author}>{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.chatfooter}>
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default ChatMessage;