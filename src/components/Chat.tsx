import { Message } from "../types";
import ChatInput from "./ChatInput";
import ChatLoader from "./ChatLoader";
import ChatMessage from "./ChatMessage";
import ResetChat from "./ResetChat";

interface Props {
  messages: Message;
}

export default function Chat() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-row justify-between items-center mt-[-2.5rem]">
        <ResetChat />
      </div>

      <div className="flex flex-col flex-grow overflow-hidden rounded-lg px-2 sm:p-4">
        <div
          id="chat-messages"
          className="flex-grow overflow-y-auto"
          hx-get="/loading"
          hx-trigger="click from:#sendButton, keyup[key=='Enter'] from:#chat-input"
          hx-target="this"
          hx-swap="beforeend"
          hx-include="#chat-input"
          hx-vals="{'content': document.getElementById('chat-input').value}"
        >

          {/* {messages.map((message, index) => (
            <div key={index} className="my-1 sm:my-1.5">
              <ChatMessage message={message} />
            </div>
          ))} */}

          {/* Uncomment this part if you want to show loader when loading */}
          {/* {loading && (
            <div className="my-1 sm:my-1.5">
              <ChatLoader />
            </div>
          )} */}

        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full flex justify-center bg-white p-4">
        <div className="w-full max-w-2xl">
          <ChatInput />
        </div>
      </div>
    </div>
  );
}
