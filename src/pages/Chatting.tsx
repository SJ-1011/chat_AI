// import { useState } from "react";
import Chat from "../components/Chat";

function Chatting() {
  return (
    <main className="w-full">
      <h1 className="text-center mt-[12.5rem] text-5xl ">Chat AI</h1>
      <h2 className="text-center mt-8 text-3xl">나만의 웹 페이지에서 AI에게 질문하세요!</h2>
      <Chat />
    </main>
  );
}

export default Chatting;
