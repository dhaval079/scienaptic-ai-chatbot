import Citiations from "./Citation";

export default function Left() {
  return (
    <div class="flex flex-col items-start border-r-2 border-gray-200 p-6">
      <h3 class="font-bold mb-3">Relevance score</h3>
      <p class="font-semibold	mb-6">75%</p>

      <h3 class="font-bold">Citiations</h3>
      <div class="h-[36px] w-[273px] flex items-center font-bold bg-slate-100 p-4 rounded-lg	">
        <div class="mr-10">Page</div>
        <div class="mr-24">Title</div>
        <div>Link</div>
      </div>
      <div
        id="citiations"
        hx-get="/url"
        hx-trigger="click from:#sendButton, keyup[key=='Enter'] from:#chat-input"
        hx-target="this"
        hx-include="#chat-input"
        hx-vals="{'content': document.getElementById('chat-input').value}"
        
      >
      </div>

    </div>
  )
}