import { Message } from "../types";
import ChatLoader from "./ChatLoader";

interface Props {
  message: Message;
}

export default function ChatMessage({ message }: Props) {
  return (
    <div 
      // id="chat-messages"
      className={`flex flex-col items-end`} 
      // hx-boost
    >
      <div 
        className="flex items-center"   
      >
        <div
          className={`flex items-center rounded-2xl px-3 py-2 my-2 w-fill whitespace-pre-wrap ${
            message.role === "assistant" 
              ? "mr-32 bg-[#B0E3FF] text-neutral-900"
              : "bg-[#FFDFB0] text-neutral-900"
          } ${message.role !== "user" ? "justify-end" : "justify-start"}`}
        >
          {message.content===""?<ChatLoader />:message.content}
        </div>
      </div>
    </div>
  );
}
