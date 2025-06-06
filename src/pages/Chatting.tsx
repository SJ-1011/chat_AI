import { useEffect, useRef, useState } from "react";
import Chat from "../components/Chat";
import Messenger from "../components/Messenger";
import type { Question } from "../types/Question";

function Chatting() {
  const [isHidden, setIsHidden] = useState(false);
  const [questionMessage, setQuestionMessage] = useState<Question[]>([]);

  const messageListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [questionMessage]);

  return (
    <main className="w-full h-screen relative self-end">
      <h1 className={`text-center mt-[12.5rem] text-5xl ${isHidden ? "hidden" : ""}`}>Chat AI</h1>
      <h2 className={`text-center mt-8 text-3xl ${isHidden ? "hidden" : ""}`}>나만의 웹 페이지에서 AI에게 질문하세요!</h2>
      {/* 스크롤 영역 */}
      <div
        ref={messageListRef}
        className="flex-1 w-full mx-auto overflow-y-auto px-4"
        style={{ height: "75vh" }} // 원하는 높이 지정
      >
        <Messenger questionMessage={questionMessage} />
      </div>

      {/* 아래쪽 고정 채팅 입력창 */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-[50rem] px-4">
        <Chat setIsHidden={setIsHidden} setQuestionMessage={setQuestionMessage} questionMessage={questionMessage} />
      </div>
    </main>
  );
}

export default Chatting;
