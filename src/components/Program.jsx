
export function Program({title, icon}) {
    return (
        <div className={"group transition-all flex flex-col gap-4 items-center justify-center bg-zinc-800 hover:bg-zinc-50 border-2 hover:border-zinc-300 cursor-pointer w-72 py-12 rounded-lg"}>
            <div className={"rounded-full border-4 group-hover:border-black w-32 h-32 flex items-center justify-center"}>
                {icon}
            </div>
            <div className={"group-hover:text-black text-white font-medium text-lg uppercase"}>{title}</div>
        </div>
    )
}
