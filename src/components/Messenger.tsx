import type { Question } from "../types/Question";

interface MessengerProps {
  questionMessage: Question[];
}

function Messenger({ questionMessage }: MessengerProps) {
  const messageList = questionMessage.map((item) => {
    return (
      <li key={item.id} className="self-end flex items-end my-4 gap-4">
        <small>{item.time}</small>
        <div className="p-4 bg-blue-100 rounded-3xl w-fit h-fit whitespace-pre-wrap">{item.message}</div>
      </li>
    );
  });
  return <ul className="w-[80%] mx-auto flex flex-col">{messageList}</ul>;
}

export default Messenger;
