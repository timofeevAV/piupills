import Image from "next/image"
import { Suspense } from "react";
// images
import piuImg from '../../public/images/piu.svg'
import pillsImg from '../../public/images/pills.svg'
// components
import { Nav } from "@/components/nav"
import { ProductsGrid } from '@/components/productGrid';

const navLinks = [
  {
    title: 'Главная',
    href: '/'
  },
  {
    title: 'Мастер-классы',
    href: '/master-classes'
  },
  {
    title: 'Общая информация',
    href: '/general-information'
  },
]

export default async function Home({searchParams}) {
  const page = Number(searchParams['page'] ?? '1')
  const perPage = Number(searchParams['perPage'] ?? '10')

  return (
    <>
      <section id='home-intro' 
               className='h-[100vh]'>
        <div id='piupills-logo'
             className="px-[20px] select-none pointer-events-none 
                        flex flex-col items-center justify-end absolute bottom-[20px] md:bottom-[65px] 
                        w-full h-[calc(100vh-85px)] mt-[20px]">
          <Image src={piuImg}
                 alt="piu"
                 className="w-full max-h-[50%]"
                 loading="lazy"/>
          <Image src={pillsImg} 
                 alt="piu"
                 className="w-full max-h-[50%]"
                 loading="lazy"/>
        </div>
        <Nav navLinks={navLinks}/>
      </section>
      <section id='home-products'>
        <Suspense>
          <ProductsGrid page={page} perPage={perPage}/>
        </Suspense>
      </section>
    </>
  )
}