
interface Props{
  onReset: () => void
}


export default function ResetChat() {
  return (
    <div class="flex flex-row items-center" hx-post="/reset" hx-trigger="click" hx-swap="outerHTML">
      <button
        class="text-sm sm:text-base text-neutral-900 font-semibold rounded-lg px-4 py-2 bg-neutral-200 hover:bg-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-300"
        hx-get="/reset"
        hx-trigger="click"
        hx-target="#chat-messages"
      >
        Reset
      </button>
    </div>

  )
}