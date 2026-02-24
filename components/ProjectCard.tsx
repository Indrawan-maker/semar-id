import projectImage1 from '@/public/images/porto1.png'
import projectImage2 from '@/public/images/porto2.png'
import projectImage3 from '@/public/images/porto2.png'
import projectImage4 from '@/public/images/porto3.png'
import bukti1 from '@/public/images/customer/pmbyrn.webp'
import { Card } from './Card';

export const ProjectCard = () => {
    return (
        <div className='md:ml-0 md:grid md:grid-cols-4 md:gap-4 grid  items-center justify-center'>
        <Card projectTitle='Pembayaran dp'
        projectImage={projectImage1}
        />
        {/* pemisah antar project */}
        <Card projectTitle='Pembayaran joki skripsi'
        projectImage={projectImage2} 
        />
        {/* pemisah antar project */}
        <Card projectTitle='Pembayaran joki asasasasasasasasaskripsi'
        projectImage={projectImage3} 
        />
        {/* pemisah antar project */}
        <Card projectTitle='Pembayaran joki skripsi'
        projectImage={bukti1}
        />
        <Card projectTitle='Pembayaran joki skripsi'
        projectImage={projectImage4} 
        />
        <Card projectTitle='Pembayaran joki skripsi'
        projectImage={projectImage4} 
        />
        <Card projectTitle='Pembayaran joki skripsi'
        projectImage={projectImage4} 
        />
        <Card projectTitle='Pembayaran joki skripsi'
        projectImage={projectImage4} 
        />
        </div>
    )
}