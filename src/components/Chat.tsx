import { useRef, useState } from "react";

interface ChatProps {
  setIsHidden: (hidden: boolean) => void;
  setQuestionMessage: (message: string) => void;
}

function Chat({ setIsHidden, setQuestionMessage }: ChatProps) {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(message);
    setMessage("");

    setIsHidden(true);
    setQuestionMessage(message);
  };

  return (
    <form onSubmit={handleSubmit} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col w-fit">
      <textarea
        ref={textareaRef}
        value={message}
        onChange={handleChange}
        placeholder="메시지를 입력하세요..."
        rows={3}
        className="min-w-[6.25rem] lg:min-w-[50rem] p-4 border-2 border-[#cce5ff] rounded-4xl resize-none overflow-hidden"
      />
      <button type="submit" className="self-end mt-4 bg-[#3399FF] text-white p-2 rounded-4xl w-20 cursor-pointer hover:bg-[#2A82E6] transition-all">
        전송
      </button>
    </form>
  );
}
export default Chat;
