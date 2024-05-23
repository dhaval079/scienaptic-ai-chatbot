export default function Citiations({CitationData}:any){
  return(
    <>
      <div class="h-[24px] w-[223px] flex m-4">
        <div class="w-[7px] h-[18px] mr-16">{CitationData[3]}</div>
        <div class="w-[110px] h-[24px] text-xs mb-10">{CitationData[0]}</div>
        <div class="ml-10">
          <a href={CitationData[2]} target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}
