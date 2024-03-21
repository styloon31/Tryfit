export default function FabricPerformance(){
    return(
        <div className="flex flex-col justify-center items-center gap-2">
            <button className="flex items-center btn_green  py-1 px-24  rounded-[20px] mt-32 space-x-2">
                <svg width="49" height="27" viewBox="0 0 49 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-flex item-center">
                    <circle cx="12" cy="13.5" r="12" fill="#D9D9D9"/>
                    <circle cx="24" cy="13.5" r="12.5" fill="#D9D9D9" stroke="#334C1D"/>
                    <circle cx="36" cy="13.5" r="12.5" fill="#D9D9D9" stroke="#334C1D"/>
                </svg>
                <div className=" text-sm/[21px]">What Others Say About Us</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </button>
            <div>
                <h1 className=" text-8xl  text-btn_hover mt-3 font-heavitas">FABRIC.</h1>
            </div>
            <div className="inline-flex">
                <h1 className=" text-8xl text-white font-heavitas">PERFORMANCE</h1><h1 className="text-8xl font-heavitas font-bold text-btn_hover">.</h1>
            </div>
            <div>
                <h1 className=" text-8xl text-btn_hover font-heavitas">DELIVERED.</h1>
            </div>
            <div className="text-white text-xl/[32px] font-thin">
                <div className="inline-flex font-aventa">
                    <p className="mr-2">"</p>
                    <p className="text-btn_hover">TryFit Fabrics</p>
                    <p>:</p>
                    <p className="ml-0.5">Engineered For Champions,Designed</p>
                </div>
                <div className="font-aventa">
                    <p className="items-center">For Comfort. Elevate Your Game with Every Thread."</p>
                </div>
            </div>
            <div>
                <button className="bg-btn_hover font-aventa_bold font-bold py-3.5 px-10 rounded-[13px] mt-16">Approach Us</button>
            </div>
            <div>
                <img src="/images/rectangle.png" className=" w-screen mt-40"></img>
            </div>
        </div>
    );
}
