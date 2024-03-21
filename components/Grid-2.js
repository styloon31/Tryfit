export default function Grid2(){
    return(
        <div className="mt-11 grid grid-cols-[1fr_1fr] gap-4 pr-20">
            <div>
                <span className=" flex   w-full h-[484px] bg-red-500/35 backdrop-blur-md border border-white/50 rounded-[25px]"></span>
            </div>
            <div>
                <span className=" flex   w-full h-[484px] bg-yellow-400/40 backdrop-blur-md border border-white/50 rounded-[25px]"></span>
            </div>
        </div>
    )
}