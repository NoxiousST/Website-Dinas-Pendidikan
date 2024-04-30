import logo from './logo.svg';
import Navbar from "./components/Navbar";
import {News, ListNews} from "./components/News";
import jateng from "./assets/images/Central_Java.png";
import {Button} from "./components/Button";

function App() {
    return (
        <div className={"h-full flex flex-col items-center"}>
            <Navbar navigation={nav}></Navbar>
            <div className={"mt-20 bg-hero-pattern w-screen bg-no-repeat bg-cover"}>
                <div className={"py-16 bg-gradient-to-b from-black/5 to-black/60"}>
                    <img className={"mx-auto w-32"} src={jateng} alt={"Logo Jawa Tengah"}/>
                    <div
                        className={"flex flex-col gap-4 mx-auto w-7/12 font-cera text-white text-5xl text-center font-bold"}>
                        <span>Dinas Pendidikan dan Kebudayaan Provinsi Jawa Tengah</span>
                        <span
                            className={"mx-auto bg-blue-600 text-white font-cera px-4 py-1 w-fit rounded-full text-base font-medium"}>Menuju Jawa Tengah Sejahtera dan Berdikari</span>
                    </div>
                </div>
            </div>
            <div className={"py-20 w-10/12"}>
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
                                    date={item.date}
                                    comments={item.comments}/>
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
                        <Button className={"w-full mt-4 border bg-zinc-100 hover:bg-zinc-200 text-zinc-700 capitalize"} variant={"secondary"}>
                            Lihat berita lainnya
                        </Button>
                    </div>
                </div>
            </div>
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
