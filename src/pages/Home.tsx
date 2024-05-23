import Chat from "../components/Chat";
import Left from "../components/Left";
import Right from "../components/Right";
import Layout from "../layouts";
import { Message } from "../types";

export default function Home() {
  const messages:Message = [{
    role: "assistant",
    content: `Hi there! I'm Chatbot UI, an AI assistant. I can help you with things like answering questions, providing information, and helping with tasks. How can I help you?`
  }]
  const loading = false

  return(
    <Layout>
      <div class="flex h-full">
       
        <div class="grid grid-cols-5">
          <Left />
          <div class="mt-4 sm:mt-12 col-span-3 p-4">
            <Chat/>
          </div>
          <Right />
        </div>
      </div>
    </Layout>
  )
}