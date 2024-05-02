import {cn} from "../lib/utils";

export function Layanan({classname, title, detail, image}) {
    return (
        <div
            className={cn(classname, "cursor-pointer flex flex-col py-5 px-4 w-44 font-cera items-center h-fit text-white rounded-lg bg-[linear-gradient(110deg,#242731_50%,#2f323c_50%)] hover:bg-[linear-gradient(110deg,#2f323c_50%,#242731_50%)] transition-all")}>
            <img className={"w-16 mb-4"} src={image} alt={"logo"}/>
            <div className={"font-bold text-[15px] uppercase text-center"}>{title}</div>
            <div className={"text-sm font-thin text-center"}>{detail}</div>
        </div>
    )
}
