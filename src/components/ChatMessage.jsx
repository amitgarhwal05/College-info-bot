function ChatMessage({ sender, text }) {
  return (
    <div className={`msg-row ${sender}`}>
      <div className="msg-bubble">{text}</div>
    </div>
  );
}

export default ChatMessage;