import { useState } from "react";
import Chat from "../components/Chat";
import Messenger from "../components/Messenger";

function Chatting() {
  const [isHidden, setIsHidden] = useState(false);
  const [questionMessage, setQuestionMessage] = useState("");

  return (
    <main className="w-full h-screen relative">
      <h1 className={`text-center mt-[12.5rem] text-5xl ${isHidden ? "hidden" : ""}`}>Chat AI</h1>
      <h2 className={`text-center mt-8 text-3xl ${isHidden ? "hidden" : ""}`}>나만의 웹 페이지에서 AI에게 질문하세요!</h2>
      <Messenger questionMessage={questionMessage} />
      <Chat setIsHidden={setIsHidden} setQuestionMessage={setQuestionMessage} />
    </main>
  );
}

export default Chatting;
