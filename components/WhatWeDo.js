import Grid2 from "./Grid-2";
import Grid1 from "./Grid1";

export default function WhatWeDo(){
    return(
        <div className="text-white ml-40 ">
            <h1 className=" flex text-btn_hover font-heavitas text-6xl/[64px] mt-36 ">What We Do</h1>
            <p className="flex md:w-auto lg:w-1/2 text-3xl/[34px] mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Ducimus, incidunt? Ipsam, pariatur quo.Voluptatem cum eum debitis eveniet</p>
            <Grid1 />
            <Grid2 />
        </div>
    )
}