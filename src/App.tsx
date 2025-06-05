// import { useState } from "react";
import "./styles/App.css";
import Sidebar from "./pages/Sidebar";
import Chatting from "./pages/Chatting";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="flex">
      <Sidebar />
      <Chatting />
    </div>
  );
}

export default App;
