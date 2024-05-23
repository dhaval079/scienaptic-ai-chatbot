import { IconDots } from "@tabler/icons-react";

export default function ChatLoader() {
  return (
    <div class="flex flex-col flex-start" hx-boost>
      <div class="flex items-center bg-neutral-200 text-neutral-900 rounded-2xl px-4 py-2 w-fit">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
      </div>
    </div>
  )
}