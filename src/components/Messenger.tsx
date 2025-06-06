interface MessengerProps {
  questionMessage: string;
}

function Messenger({ questionMessage }: MessengerProps) {
  return (
    <div>
      <p>{questionMessage}</p>
    </div>
  );
}

export default Messenger;
