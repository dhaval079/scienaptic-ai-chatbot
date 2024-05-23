
export default function ChatInput() {
  return (
    <div class="relative">

      <textarea
        id="chat-input"
        name="content"
        class="min-h-[44px]  rounded-lg pl-4 pr-12 py-2 w-full focus:outline-none focus:ring-1 focus:ring-neutral-300 border-2 border-t-indigo-500 border-t-indigo-500 border-r-purple-500 border-b-green-500 border-l-orange-500"
        style="resize: none;"
        placeholder="Type your doubt here..."
        rows={1}
        hx-post="/response"
        hx-trigger="keyup[key=='Enter'] from:#chat-input"
        hx-target="#chat-messages"
        hx-swap="beforeend"
        hx-include="#chat-input"
        hx-ext="json-enc"
        hx-on="htmx:afterRequest: document.getElementById('chat-input').value = '';"
      />
      
      <button
        id="sendButton"
        hx-post="/loading"
        hx-trigger="click"
        hx-target="#chat-messages"
        hx-swap="beforeend"
        hx-include="#chat-input"
        hx-ext="json-enc"
        hx-trigger-boost="true"
        hx-on="htmx:afterRequest: document.getElementById('chat-input').value = '';"
        
      >
        <svg class="absolute right-2 bottom-2 h-8 w-8 hover:cursor-pointer rounded-full p-1  text-black hover:opacity-80 transform rotate-90" viewBox="0 0 20 20" fill="black">
          <path fill-rule="evenodd" d="M10 18a1 1 0 0 1-1-1V7.414l-2.293 2.293a1 1 0 1 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L11 7.414V17a1 1 0 0 1-1 1z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  )
}