import Image from "next/image"
import Link from "next/link"
import { formattedPrice } from "@/utils"

const ProductCard = async ({productImage, productName, productPrice, productSlug}) => {
	return (
		<Link className="flex flex-col w-full 
                  p-[20px] bg-[#d9d9d9] 
                  cursor-pointer
                  select-none"
          href={`product/${productSlug}`}
          prefetch={true}>
            <div className="pb-[100%] relative overflow-hidden">
              <Image className='transition duration-500 hover:scale-125 
                                object-contain inset-0
                                absolute' 
                     src={productImage}
                     loading="lazy"
                     fill={true}
                     alt={productName}/>
            </div>
            <div className="text-[#2b2b2b] flex-shrink-0 flex 
                            items-baseline justify-between">
              <div className="flex-1 pr-[20px]">{productName}</div>
              <div className="flex-1 text-right">
                {formattedPrice(productPrice)}
              </div>
            </div>
          </Link>
	)
}

export {ProductCard}