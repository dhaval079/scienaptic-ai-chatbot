// @ts-nocheck
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import Home from './pages/Home'
import ChatMessage from './components/ChatMessage'
import { Message } from './types'
import axios from "axios"
import Citiations from './components/Citation'
import { uuidv7 } from "uuidv7";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const uuid = uuidv7()
const app = new Hono();

app.get('/', (c) => {
  return c.html(<Home />)
})

app.post('/response', async (c) => {
  const { content } = await c.req.json();
  console.log("response");

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
    
    // const alldata = await prisma.chatbot.findMany({
    //   select:{
    //     role:true,
    //     content:true,
    //   }
    // })
    // console.log(alldata);

    const response = await axios.post("http://13.202.63.29:5000/ask_llm", {
      "question": `${content}`,
      "uuid_id": `${uuid}`,
      "email_id": "",
      "ip_address": "dummy"
    })
    const data = response.data

    const result = await prisma.chatbot.createManyAndReturn({
      data:[
        {role:"user", content:content},
        {role:"assistant", content:`${data.data}`}
      ],
      skipDuplicates: true
    })
    console.log(result);

    const messages: Message[] = [{
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

  const response = await axios.post("http://13.202.63.29:5000/ask_llm", {
    "question": `${content}`,
    "uuid_id": `${uuid}`,
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

app.get('/loading', async (c) => {
  const content = c.req.query('content');
  console.log("loading", content);

  const messages: Message[] = [{
    role: "user",
    content: content
  }]

  return c.html(
    <>
      {messages.map(message => <ChatMessage message={message} />)}
    </>
  )

})


app.get('/reset', async (c) => {
  console.log("reset");
  

   const alldata = await prisma.chatbot.findMany({
      select:{
        role:true,
        content:true,
      }
    })
    console.log(alldata);

    const deleteData = await prisma.chatbot.deleteMany({});

    const sessionData = await prisma.aLLchatbot.create({
      data: {
        session: alldata,
      },
    });

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
