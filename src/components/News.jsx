import {cn} from "../lib/utils";

export function News({className, image, title, description, date, comments}) {
    return (
        <div className={cn("gap-2 flex flex-col cursor-pointer", className)}>
            <img className={"w-full rounded-lg"} src={image} alt={"thumbnail-berita"}/>
            <div className={"text-xs text-gray-500 w-full"}>
                <span>{date}</span>
                <span className={"px-2"}>•</span>
                <span>{comments} Comments</span>
            </div>
            <div className={"text-xl line-clamp-3 font-medium"}>
                {title}
            </div>
            <div className={"line-clamp-3 text-sm"}>
                {description}
            </div>
            <div className={"bg-zinc-800 text-white text-xs font-cera px-2 py-1 w-fit rounded-full"}>
                Berita Pendidikan
            </div>
        </div>
    );
}

export function ListNews({className, image, title, date}) {
    return (
        <div className={cn("gap-2 flex cursor-pointer", className)}>
            <img className={" rounded-lg w-16 h-fit"} src={image} alt={"thumbnail-berita"}/>
            <div className={""}>
                <div className={"text-sm font-medium line-clamp-3"}>{title}</div>
                <div className={"text-right text-xs text-gray-500"}>{date}</div>
            </div>
        </div>
    );
}
