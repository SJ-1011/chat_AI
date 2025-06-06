import { useRef, useState } from "react";
import type { Question } from "../types/Question";

interface ChatProps {
  setIsHidden: (hidden: boolean) => void;
  setQuestionMessage: (message: Question[]) => void;
  questionMessage: Question[];
}

function Chat({ setIsHidden, setQuestionMessage, questionMessage }: ChatProps) {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const addMessage = (newMessage: Question) => {
    setQuestionMessage([...questionMessage, newMessage]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      if (textareaRef.current.scrollHeight <= 200) {
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      } else {
        textareaRef.current.style.height = `200px`;
        textareaRef.current.style.overflowY = "auto";
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(message);
    setMessage("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";

    const time = new Date().toLocaleString();

    const messageObject: Question = {
      message: message,
      time: `${time}`,
      id: questionMessage.length + 1,
    };

    setIsHidden(true);
    addMessage(messageObject);
  };

  return (
    // fixed bottom-10 left-[calc(50%+9.375rem)] -translate-x-1/2
    <form onSubmit={handleSubmit} className="flex flex-col w-fit mx-auto">
      <textarea
        ref={textareaRef}
        value={message}
        onChange={handleChange}
        placeholder="메시지를 입력하세요..."
        rows={3}
        className="min-w-[6.25rem] lg:min-w-[50rem] p-4 border-2 border-[#cce5ff] rounded-4xl resize-none overflow-hidden bg-white"
      />
      <button type="submit" className="self-end mt-4 bg-[#3399FF] text-white p-2 rounded-4xl w-20 cursor-pointer hover:bg-[#2A82E6] transition-all">
        전송
      </button>
    </form>
  );
}
export default Chat;
