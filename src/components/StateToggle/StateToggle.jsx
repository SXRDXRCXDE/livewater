import React from "react";


export default function StateToggle({state}) {

    return <>
        <div className={` ${state==='open'? `text-[#54af57]` : `text-[#dc5d3e]`} p-0.5 text-xs uppercase `}>
            {state}
        </div>
    </>
}