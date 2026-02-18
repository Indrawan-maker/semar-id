import { ProjectCard } from "./ProjectCard";
import Link from 'next/link';


export const BuktiPembayaran = () => {
    return (
        <>
        <div className="flex justify-center items-center" id="project" translate="no">
        <section className="mt-16 justify-center w-full max-w-6xl  p-4 :p-0">
            <div className="flex justify-between mb-6">
        <h4 className="flex justify-start text-gray-300 text-xl tracking-widest">Bukti pembayaran</h4>
        <Link href='/buktipembayaran'>
        <button className="flex justify-start text-gray-600 text-md tracking-widest cursor-pointer hover:text-white">Lihat Semua</button>
        </Link>
            </div>
            <div className="overflow-x-auto">
            <div className="flex gap-6 items-center justify-center w-full">
                <ProjectCard />
            </div>
            </div>
        </section>
        </div>
        </>
    )
}