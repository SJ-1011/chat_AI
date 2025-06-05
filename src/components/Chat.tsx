import { useState } from "react";

function Chat() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="메시지를 입력하세요..." rows={3} className="w-full p-2 border rounded resize-none" />
      <button type="submit" className="mt-2 bg-[#3399FF] text-white p-2 rounded">
        전송
      </button>
    </form>
  );
}
export default Chat;
