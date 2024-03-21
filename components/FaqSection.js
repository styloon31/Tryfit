export default function FaqSection() {
    return (
      <div className="flex flex-col justify-center items-center mt-40 pr-20 ml-36">
        <div className="flex w-full h-[510px] bg-faq_background rounded-t-[26px] items-start justify-center pt-12">
          <div className="flex flex-col items-center"> 
            <button className="btn_green inline-flex items-center py-0.5 px-28 gap-1 rounded-[15px]">
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <g><path d="m4 19l-.93-.37a1 1 0 0 0 1.125 1.35zm4.706-.936l.474-.881l-.317-.17l-.352.07l.195.98zm-3.082-3.147l.93.37l.163-.414l-.196-.399zM19 12c0 3.246-2.853 6-6.53 6v2c4.641 0 8.53-3.514 8.53-8zM5.941 12c0-3.246 2.854-6 6.53-6V4C7.83 4 3.94 7.514 3.94 12h2zm6.53-6C16.147 6 19 8.754 19 12h2c0-4.486-3.889-8-8.53-8zm0 12c-1.205 0-2.328-.3-3.291-.817l-.948 1.761A8.934 8.934 0 0 0 12.471 20zm-8.276 1.98l4.706-.936l-.39-1.961l-4.706.936l.39 1.962zm2.326-5.506A5.564 5.564 0 0 1 5.94 12h-2c0 1.2.282 2.338.786 3.36zm-1.826.073L3.07 18.631l1.858.738l1.624-4.083l-1.858-.739z"></path><circle cx={9} cy={12} r={1}></circle><circle cx={12.5} cy={12} r={1}></circle><circle cx={16} cy={12} r={1}></circle></g>
              </svg>
              <p className="font-aventa">Have Question</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </button>
            <h1 className="font-heavitas text-white text-6xl mt-11">EMPOWERING</h1>
            <div className="inline-flex gap-5">
                <h1 className="font-heavitas text-btn_hover text-6xl mt-11">SUCCESS</h1>
                <h1 className="font-heavitas text-white text-6xl mt-11">IN NUMBERS</h1>
            </div>
          </div>
        </div>
        <div className="flex w-full h-[287px] bg-faq_background2 rounded-b-[26px] items-center">
        </div>
      </div>
    );
  }
  