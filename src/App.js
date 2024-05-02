import logo from './logo.svg';
import jateng from "./assets/images/Central_Java.png";
import twh from "./assets/images/TWH.png"

import Navbar from "./components/Navbar";
import {News, ListNews} from "./components/News";
import {Button} from "./components/Button";
import {Footer} from "./components/Footer";
import {Fax, Home, Info, Mail, Megaphone, Phone, Pin, Profile, Webs} from "./components/Icons";
import {Program} from "./components/Program";
import {Layanan} from "./components/Layanan";

const icons = {
    pin: <Pin className="fill-white pr-4" size={24}/>,
    phone: <Phone className="fill-white pr-4" size={18}/>,
    mail: <Mail className="fill-white" size={18}/>,
    fax: <Fax className="fill-white text-white stroke-white" size={18}/>,
    web: <Webs className="fill-white" size={18}/>,

    home: <Home className="fill-white group-hover:fill-black" size={86}/>,
    profile: <Profile className="fill-white group-hover:fill-black" size={86}/>,
    mphone: <Megaphone className="fill-white group-hover:fill-black" size={86}/>,
    info: <Info className="fill-white group-hover:fill-black" size={86}/>
};

function App() {
    return (
        <div className={"h-full flex flex-col items-center"}>
            <Navbar navigation={nav}></Navbar>

            {/* Section 1 | Banner */}
            <div className={"mt-20 bg-hero-pattern w-screen bg-no-repeat bg-cover"}>
                <div className={"py-16 bg-gradient-to-b from-black/5 to-black/60"}>
                    <img className={"mx-auto w-32"} src={jateng} alt={"Logo Jawa Tengah"}/>
                    <div
                        className={"flex flex-col gap-4 mx-auto w-7/12 font-cera text-white text-5xl text-center font-bold"}>
                        <span>Dinas Pendidikan dan Kebudayaan Provinsi Jawa Tengah</span>
                        <span
                            className={"mx-auto bg-zinc-800 text-white font-cera px-4 py-1 w-fit rounded-full text-base font-medium"}>Menuju Jawa Tengah Sejahtera dan Berdikari</span>
                    </div>
                </div>
            </div>

            {/* Section 2 | Berita */}
            <section className={"py-20 w-10/12"}>
                <div className={"flex items-center gap-12"}>
                    <div className={"flex-grow"}>
                        <div className={"flex gap-4 items-center mb-4"}>
                            <div className={"font-medium font-cera text-xl"}>Berita Pendidkan Jawa Tengah</div>
                            <span className={"flex-grow border-y h-0"}/>
                            <Button className={"rounded-full p-1.5"} variant={"outline"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24"
                                     height="24">
                                    <path stroke="#200E32" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="1.5"
                                          d="m8.5 5 7 7-7 7" className="colorStroke200E32 svgStroke"></path>
                                </svg>
                            </Button>
                        </div>
                        <div className={"flex-grow font-cera grid grid-cols-3 grid-rows-2 place-content-between gap-8"}>
                            {news.map((item) => (
                                <News
                                    className={"w-60 hover:bg-zinc-50 border-2 border-transparent hover:border-border box-border p-2 rounded-xl"}
                                    image={item.image} title={item.title} description={item.description}
                                    date={item.date} comments={item.comments}/>
                            ))}
                        </div>
                    </div>
                    <div className={"top-20 sticky w-4/12 border-2 rounded-xl self-start bg-zinc-50 p-2"}>
                        <div className={"uppercase font-cera font-medium border-b-2 py-2 mb-4"}>Berita Terbaru PPDB
                            JATENG
                        </div>
                        <div className={"flex flex-col gap-5"}>
                            {listNews.map((item) => (
                                <ListNews className={"font-cera"} image={item.image} title={item.title}
                                          date={item.date}/>
                            ))}
                        </div>
                        <Button className={"w-full mt-4 border bg-zinc-100 hover:bg-zinc-200 text-zinc-700 capitalize"}
                                variant={"secondary"}>
                            Lihat berita lainnya
                        </Button>
                    </div>
                </div>
            </section>

            {/* Section 3 | Program */}
            <section className={"font-cera flex gap-6 bg-zinc-100 border rounded-xl p-4"}>
                {programItem.map((item) => (
                    <Program title={item.title} icon={item.icon}/>
                ))}
            </section>

            {/* Section 4 | Layanan */}
            <section className={"flex px-32 h-[80vh] items-center"}>
                <div className={"flex gap-16"}>
                    <div className={"w-8/12"}>
                        <div className={"flex items-center gap-4 font-cera mb-4"}>
                            <h1 className={"text-2xl font-bold"}>Link Layanan Website</h1>
                            <span className={"border-y-2 border-zinc-400 h-1 flex-grow"}></span>
                        </div>
                        <div className={"bg-zinc-50 p-6 border-2 rounded-xl flex flex-wrap gap-4 justify-between"}>
                            {layananItem.map((item) => (
                                <Layanan classname={item.class} image={item.logo} title={item.title}
                                         detail={item.detail}/>
                            ))}
                        </div>
                    </div>
                    <div className={"font-cera w-4/12"}>
                        <div>
                            <h1 className={"text-lg font-semibold"}>Informasi Penting</h1>
                        </div>
                        <div className={"flex flex-col gap-4 mt-8"}>
                            <ListNews className={""}
                                      image={"https://www.pdkjateng.go.id/wp-content/uploads/2023/06/Feeds-2023-150x150.png"}
                                      title={"Kalender Pendidikan 2023/2024"} date={"June 8, 2023"}/>
                            <ListNews className={""}
                                      image={"https://www.pdkjateng.go.id/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-09-at-13.48.41-150x150.jpeg"}
                                      title={"Pengumuman Hasil Seleksi Pasca Wawancara Calon Anggota Dewan Pendidikan Provinsi Jawa Tengah Tahun 2023-2027"}
                                      date={"March 9, 2023"}/>
                            <ListNews className={""}
                                      image={"https://www.pdkjateng.go.id/wp-content/uploads/2023/02/Jadwal-Seleksi-Wawancara-Calon-Dewan-Pendidikan-2023-2027-150x150.png"}
                                      title={"Jadwal Seleksi Wawancara Calon Anggota Dewan Pendidikan Provinsi Jawa Tengah Periode Tahun 2023-2027"}
                                      date={"February 24, 2023"}/>
                            <Button className={"w-full mt-4 border bg-zinc-100 hover:bg-zinc-200 text-zinc-700 capitalize"}
                                    variant={"secondary"}>
                                Lihat informasi lainnya
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5 | Footer */}
            <Footer items={footerItem}/>
        </div>
    );
}

export default App;

const nav = [
    "Home",
    "Profil",
    "Layanan",
    "Informasi",
    "Inovasi",
    "Kontak"
]

const news = [
    {
        image: "https://www.pdkjateng.go.id/wp-content/uploads/2024/04/Feeds-and-Frame-1030x1030.png",
        title: "Kelas Industri ‘Crocodic’ SMKN 2 Semarang",
        description: "Langkah awal peserta didik SMK Negeri 2 Semarang agar lebih fokus dalam pembelajaran konsentrasi keahlian Rekayasa Perangkat Lunak",
        date: "April 18, 2024",
        comments: 0
    },
    {
        image: "https://www.pdkjateng.go.id/wp-content/uploads/2024/04/Feeds-and-Frame2-1030x1030.png",
        title: "SMKN 10 Semarang Sambut Tim Visitasi untuk Pembukaan Jurusan Baru",
        description: "Dalam rangka pengembangan pendidikan vokasional yang adaptif dan responsif terhadap kebutuhan industri",
        date: "April 18, 2024",
        comments: 0
    },
    {
        image: "https://www.pdkjateng.go.id/wp-content/uploads/2024/03/Feeds-and-Frame1-1030x1030.png",
        title: "Lomba Karya Tulis Ilmiah tentang Cagar Budaya Tahun 2024",
        description: "Pemerintah Provinsi Jawa Tengah melalui Dinas Pendidikan dan Kebudayaan terus berkomitmen dalam upaya pelestarian cagar budaya",
        date: "March 25, 2024",
        comments: 0
    },
    {
        image: "https://www.pdkjateng.go.id/wp-content/uploads/2024/03/Feeds-and-Frame3-1030x1030.png",
        title: "Emira Balqies Raih Juara 3 Kumite Perorangan Putri – 60 kg di Popda Kota Semarang",
        description: "Emira Balqies, siswi kelas XI TPIK I SMKN 10 Semarang, berhasil meraih juara 3 kumite perorangan putri – 60 kg di Pekan Olahraga Pelajar Daerah",
        date: "March 19, 2024",
        comments: 0
    },
    {
        image: "https://www.pdkjateng.go.id/wp-content/uploads/2024/03/Feeds-and-Frame4-1030x1030.png",
        title: "Lomba Video atau Vlog Cagar Budaya Siswa SMA/SMK sederajat di Cabang Dinas Pendidikan Wilayah III dan VIII dengan Tema ”Membangun Generasi Melek Budaya”",
        description: "Dinas Pendidikan dan Kebudayaan Provinsi Jawa Tengah melakukan pengarusutamaan pendidikan guna mendukung ekosistem pendidikan berkebudayaan",
        date: "March 7, 2024",
        comments: 0
    },
    {
        image: "https://www.pdkjateng.go.id/wp-content/uploads/2024/03/Feeds-and-Frame5-1030x1030.png",
        title: "Azzahra Khesya Putri Wardani Kembali Raih Juara 2 Story Telling Bahasa Inggris Tingkat Nasional",
        description: "Azzahra Khesya Putri Wardani, siswi kelas XII-BB SMAN 12 Semarang, kembali mengukir prestasi gemilang dengan meraih juara 2 lomba story telling Bahasa Inggris tingkat Nasional",
        date: "March 1, 2024",
        comments: 0
    },
]

const listNews = [
    {
        image: "https://www.pdkjateng.go.id/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-19-at-08.16.091-180x180.jpeg",
        title: "PPDB SMK Negeri Boarding dan Semi Boarding Pemerintah Provinsi Jawa Tengah Tahun Ajaran 2024/2025",
        date: "February 19, 2024"
    },
    {
        image: "https://www.pdkjateng.go.id/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-03-at-06.01.17-150x150.jpeg",
        title: "Petunjuk Teknis Penyelenggaraan PPDB SMAN & SMKN Prov. Jateng TA 2023/2024",
        date: "June 3, 2023"
    },
    {
        image: "https://www.pdkjateng.go.id/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-16-at-09.54.31-150x150.jpeg",
        title: "SK Penetapan Wilayah Zonasi PPDB SMA Negeri Prov Jateng Tahun Ajaran 2023/2024",
        date: "May 16, 2023"
    },
    {
        image: "https://www.pdkjateng.go.id/wp-content/uploads/2023/01/Perubahan-SK-Zonasi-Kadinas-Penetapan-Wilayah-Zonasi-PPDB-SMAN-Jateng-Tahun-Ajaran-2022-2023-150x150.png",
        title: "Perubahan SK Zonasi Kadinas Penetapan Wilayah Zonasi PPDB SMAN Jateng Tahun Ajaran 2022-2023",
        date: "January 16, 2023"
    },
    {
        image: "https://www.pdkjateng.go.id/wp-content/uploads/2023/01/Perubahan-Atas-Keputusan-Kepala-Dinas-Pendidikan-Dan-Kebudayaan-Provinsi-Jawa-Tengah-Tentang-Penetapan-Daya-Tampung-Kelas-10-150x150.jpeg",
        title: "Perubahan Atas Keputusan Kepala Dinas Pendidikan Dan Kebudayaan Provinsi Jawa Tengah Tentang Penetapan Daya Tampung Kelas 10 Pada Sma Negeri Dan Smk Negeri Provinsi Jawa Tengah Tahun Pelajaran 2022-2023",
        date: "January 14, 2023"
    },
    {
        image: "https://www.pdkjateng.go.id/wp-content/uploads/2022/06/Perubahan-Atas-Keputusan-Kepala-Dinas-Pendidikan-Dan-Kebudayaan-Provinsi-Jawa-Tengah-Tentang-Penetapan-Wilayah-Zonasi-Khusus-Penerimaan-Peserta-Didik-Baru-Sma-Negeri-Tahun-Pelajaran-2022-2023-150x150.jpeg",
        title: "Perubahan Atas Keputusan Kepala Dinas Pendidikan Dan Kebudayaan Provinsi Jawa Tengah Tentang Penetapan Wilayah Zonasi Khusus Penerimaan Peserta Didik Baru Sma Negeri Tahun Pelajaran 2022-2023",
        date: "June 28, 2022"
    },
]


const footerItem = [
    {
        pos: 0,
        title: "DINAS PENDIDIKAN DAN KEBUDAYAAN PROVINSI JAWA TENGAH ",
        desc: "Dinas Pendidikan dan Kebudayaan Provinsi Jawa Tengah merupakan unsur pelaksana pemerintahan Bidang Pendidikan dan Kebudayaan yang menjadi kewenangan daerah. Dinas Pendidikan dan Kebudayaan Provinsi Jawa Tengah dipimpin oleh Kepala Dinas yang berkedudukan di bawah dan bertanggung jawab kepada Gubernur melalui Sekretaris Daerah. ",
        list: [
            {
                data: "Jl. Pemuda No.134, Sekayu, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah ",
                icon: icons.pin
            },
            {
                data: " (024) 3515301 ",
                icon: icons.phone
            },
            {
                data: "disdikbud@jatengprov.go.id ",
                icon: icons.mail
            },
            {
                data: "(024) 356 5451 ",
                icon: icons.fax
            },
            {
                data: "http://www.pdkjateng.go.id",
                icon: icons.web
            },
        ]
    },
    {
        pos: 1,
        title: "WAKTU LAYANAN",
        desc: "",
        list: [
            "Senin – Jumat: 08.00 sd 15.00",
            "Sabtu – Minggu: Libur",
            "Hari Libur Nasional: Libur"
        ]
    },
    {
        pos: 1,
        title: "KATEGORI",
        desc: "",
        list: [
            "Agenda Kegiatan Dinas (5) ",
            "Berita Pendidikan (42) ",
            "Berita PPDB Jawa Tengah (11) ",
            "Informasi (9) ",
            "Kalender Pendidikan (1) "
        ]
    },
    {
        pos: 2,
        title: "STATISTIK PENGUNJUNG",
        desc: "",
        list: [
            "Today's Visits: 614",
            "Yesterday's Visits: 1,517",
            "Last 7 Days Visits: 6,854",
            "Last 30 Days Visits: 24,262",
            "Total Visits: 744,780"
        ]
    }
]

const programItem = [
    {
        title: "Cabang Dinas dan UPT",
        icon: icons.home
    },
    {
        title: "PPDB",
        icon: icons.profile
    },
    {
        title: "Laporgub",
        icon: icons.mphone
    },
    {
        title: "PPID",
        icon: icons.info
    },
]

const layananItem = [
    {
        logo: jateng,
        title: "Laporgub",
        detail: "Provinsi Jawa Tengah"
    },
    {
        logo: jateng,
        title: "Tanggap Covid-19",
        detail: "Provinsi Jawa Tengah"
    },
    {
        logo: jateng,
        title: "Portal Pemprov",
        detail: "Jawa Tengah"
    },
    {
        logo: twh,
        title: "Portal Resmi Kembdikbudristek",
        detail: ""
    },
    {
        logo: twh,
        title: "Data Pokok Pendidikan",
        detail: "DIKDASMEN KEMDIKBUDRISTEK"
    },
    {
        logo: twh,
        title: "Dirjen Vokasi",
        detail: "KEMENDIKBUDRISTEK"
    },
    {
        logo: twh,
        title: "pdsp",
        detail: "KEMDIKBUDRISTEK"
    },
    {
        logo: twh,
        title: "bos",
        detail: "KEMDIKBUDRISTEK"
    }
]

