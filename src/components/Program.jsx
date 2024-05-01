
export function Program({title, icon}) {
    return (
        <div className={"flex flex-col gap-4 items-center justify-center bg-indigo-700 hover:bg-indigo-600 cursor-pointer w-72 py-12 rounded-lg"}>
            <div className={"rounded-full border-4 w-32 h-32 flex items-center justify-center"}>
                {icon}
            </div>
            <div className={"text-white font-medium text-lg uppercase"}>{title}</div>
        </div>
    )
}
