// @ts-nocheck
import { serve } from '@hono/node-server'
import { Env, Hono } from 'hono'
import { PrismaClient } from '@prisma/client'
import Home from './pages/Home'
import ChatMessage from './components/ChatMessage'
import { Message } from './types'
import Chat from './components/Chat'
import axios from "axios"
import Citiations from './components/Citation'

const prisma = new PrismaClient()
const app = new Hono();

app.get('/', (c) => {
  return c.html(<Home />)
})

app.post('/response', async (c) => {
  const { content } = await c.req.json();

  if (content.length == 0) {
    const messages: Message[] = [{
      role: "user",
      content: "Empty input"
    }, {
      role: "assistant",
      content: `Please enter the text to continue the conversation`
    }]
    return c.html(
      <>
        {messages.map(message => <ChatMessage message={message} />)}
      </>
    )
  }
  else {
    // const result = await prisma.chatbot.createManyAndReturn({
    //   data:[
    //     {role:"user", content:content},
    //     {role:"assistant", content:"Hi there! I'm Chatbot UI, an AI assistant. I can help you with things like answering questions, providing information, and helping with tasks. How can I help you?"}
    //   ],
    //   skipDuplicates: true
    // })
    // console.log(result);
    // const alldata = await prisma.chatbot.findMany({
    //   select:{
    //     role:true,
    //     content:true,
    //   }
    // })
    // console.log(alldata);

    const response = await axios.post("http://13.202.63.29:5000/ask_llm", {
      "question": `${content}`,
      "uuid_id": "dhaval",
      "email_id": "",
      "ip_address": "dummy"
    })

    // const response = await axios.get("http://localhost:3000/data");
    const data = response.data
    // console.log(data.response.content);

    const messages: Message[] = [{
      role: "user",
      content: content
    }, {
      role: "assistant",
      content: `${data.data}`
    }]

    return c.html(
      <>
        {messages.map(message => <ChatMessage message={message} />)}
      </>
    )
  }

})

app.get('/url', async (c) => {
  const content = c.req.query('content'); 
  console.log('Content from chat input:', content);

  // const response = await axios.get("http://localhost:3000/data");
  // const data = response.data.Citiations
  // console.log(data);

   const response = await axios.post("http://13.202.63.29:5000/ask_llm", {
      "question": `${content}`,
      "uuid_id": "yash",
      "email_id": "",
      "ip_address": "dummy"
    })
    const data = response.data.metadata

  return c.html(
    <>
      {data.map((Citiation: unknown) => <Citiations CitationData={Citiation} />)}
    </>
  )
})

app.post('/loading', async (c) => {
  const { content } = await c.req.json();

  const messages: Message[] = [{
    role: "user",
    content: content
  }, {
    role: "assistant",
    content: ``
  }]

  return c.html(
    <>
      {messages.map(message => <ChatMessage message={message} />)}
    </>
  )

})



app.get('/reset', async (c) => {
  return c.html(
    <script>
      window.location.reload();
    </script>
  )
})


const port = 3001
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
