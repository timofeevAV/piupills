'use client'
import Image from 'next/image';
import arrowBackImg from '../../../public/images/arrow-back.svg'
import { useRouter } from 'next/navigation';

const BackBtn = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div onClick={goBack} 
         className='select-none cursor-pointer text-[#d9d9d9] fixed 
                    top-5 left-5 flex gap-1 item-center mix-blend-difference z-[999]'>
			<Image alt='←' src={arrowBackImg} loading='lazy'/>
			<div>
				Назад
			</div>
		</div>
  );
}

export {BackBtn};
