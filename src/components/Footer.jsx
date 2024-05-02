import {ListNews} from "./News";
import {Instagram, Twitter, Youtube} from "./Icons";

export function Footer({items}) {
    return (
        <footer className={"font-cera bg-zinc-900 flex flex-col text-zinc-50 gap-16 px-40 py-12"}>
            <div className={"flex gap-24"}>
                <div className={"w-4/12"}>
                    {
                        items.map((item) => (
                            item.pos === 0 && <FooterItem item={item}/>
                        ))
                    }
                </div>
                <div className={"flex flex-col gap-8 w-4/12"}>
                    {
                        items.map((item) => (
                            item.pos === 1 && <FooterItem item={item}/>
                        ))
                    }
                </div>
                <div className={"flex flex-col gap-8 w-4/12"}>
                    {
                        items.map((item) => (
                            item.pos === 2 && <FooterItem item={item}/>
                        ))
                    }
                    <div className={"flex flex-col gap-4"}>
                        <ListNews
                            image={"https://www.pdkjateng.go.id/wp-content/uploads/2024/04/Feeds-and-Frame-80x80.png"}
                            title={"Kelas Industri ‘Crocodic’ SMKN 2 Semarang"} date={"April 18, 2024 - 1:18 am"}/>
                        <ListNews
                            image={"https://www.pdkjateng.go.id/wp-content/uploads/2024/03/Feeds-and-Frame1-80x80.png"}
                            title={"Lomba Karya Tulis Ilmiah tentang Cagar Budaya Tahun 2024"}
                            date={"March 25, 2024 - 4:00 am"}/>
                    </div>
                </div>
            </div>
            <div>
                <div className={"py-2 flex items-center justify-between mx-auto"}>
                    <div className={"text-sm text-gray-500"}>© 2023 - Dinas Pendidikan dan Kebudayaan Provinsi Jawa Tengah</div>
                    <div className={"flex gap-8"}>
                        <Instagram size={20} className={"cursor-pointer fill-white"}/>
                        <Youtube size={20} className={"cursor-pointer"}/>
                        <Twitter size={20} className={"cursor-pointer fill-white"}/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function FooterItem({item}) {
    const before = (list) => {
        const x = list.match("^.*?:")
        if (x) {
            return (x[0])
        }
    };
    const after = (list) => {
        const x = list.match(":(.*)")
        if (x) {
            return (x[1])
        }
    };

    return (
        <div>
            <h1 className={"font-medium text-lg text-indigo-400"}>{item.title}</h1>
            <p className={"mt-2 text-sm text-gray-300"}>{item.desc}</p>
            <ul className={"mt-2 text-sm text-gray-300"}>
                {
                    item.pos !== 0 ? item.list.map((list) => (
                            list.includes(":") ?
                                <li className={"font-medium mb-1"}>
                                    {before(list)}
                                    <span className={"font-normal"}>{after(list)}</span>
                                </li>
                                : <li className={"mb-1"}>{list}</li>
                        )) :
                        item.list.map((list) => (
                            <li className={"flex items-start mb-1 gap-1"}>{list.icon}{list.data}</li>
                        ))
                }
            </ul>
        </div>
    )
}
