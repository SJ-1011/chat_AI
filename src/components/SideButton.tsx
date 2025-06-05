import type { ReactNode } from "react";

interface SideButtonProps {
  type?: "button" | "submit" | "reset";
  children?: ReactNode;
  styles?: string;
  event?: () => void;
}

function SideButton({ type = "button", children, styles = "", event }: SideButtonProps) {
  const btnStyle = styles + " cursor-pointer p-2 w-full text-left hover:bg-blue-200 hover:rounded-md transition-all";
  return (
    <button onClick={event} type={type} className={btnStyle} draggable="true">
      {children}
    </button>
  );
}

export default SideButton;
