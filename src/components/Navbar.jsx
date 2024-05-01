import jateng from '../assets/images/Central_Java.png'
import {Button} from "./Button";

export default function Navbar({navigation}) {
    return (
        <nav
            className="z-50 bg-white flex fixed w-full items-center justify-between flex-wra px-6 py-4 lg:px-40">
            <div className="flex gap-2 items-center flex-shrink-0 mr-6">
                <img className={"w-10"} src={jateng} alt={"Logo Jawa Tengah"}/>
                <div className={"flex flex-col justify-center"}>
                    <span className="font-medium text-xl font-cera">Dinas Pendidikan dan Kebudayaan</span>
                    <span className="text-xs text-gray-500 font-cera">Provinsi Jawa Tengah</span>
                </div>
            </div>
            <div className="block md:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded border-rose-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <div className="flex justify-center gap-4">
                {navigation.map((name) => (
                    <div>
                        <Button className={"font-cera "} size={""} variant={"navbar"}>
                            {name}
                        </Button>
                    </div>
                ))}
            </div>
        </nav>
    );
}
