import React from 'react';
import { BackBtn } from '@/components/buttons/backBtn';
import { Gallery } from '@/components/gallery';
import { formattedPrice } from '@/utils';

async function getProduct(slug) {
  const res = await fetch(`${process.env.BASE_URL}/product/${slug}/`);
  if (!res.ok) {
    throw new Error('Failed to fetch product')
  }
  return res.json()
}

async function getProductImages(slug) {
  const res = await fetch(`${process.env.BASE_URL}/product/${slug}/images/`);
  if (!res.ok) {
    throw new Error('Failed to fetch product images')
  }
  return res.json()
}

export default async function ProductDetails({ params: { slug } }) {
	const productData = await getProduct(slug);
	const productImagesData = await getProductImages(slug);	
	const [product, productImages] = await Promise.all([productData, productImagesData])

	return (
		<div>
			<BackBtn/>
			<div className='mt-[65px] max-w-screen-2xl'>
				<div className='flex flex-col rounded-lg px-5 md:flex-row md:gap-8'>
					<div className='h-full w-full basis-full md:basis-4/6'>
						<Gallery images={[
							{
								image: product.image,
								image_alt: product.image_alt,
							}, ...productImages]}/>
					</div>
					<div className='basis-full md:basis-2/6'>
						<div className='flex flex-col gap-4 text-[#d9d9d9] selection:text-[#2b2b2b] selection:bg-[#d9d9d9]'>
							<div className='flex flex-col gap-2'>
								<h1 className='text-3xl font-bold'>{product.name}</h1>
								<h2 className='text-xl font-bold'>{formattedPrice(product.price)}</h2>
							</div>
							<div className='flex flex-col gap-2'>
								<h3 className='text-xl font-bold'>Описание</h3>
								{
									product.description.split('\n').map((line, idx) => {
										return <p key={idx} className='text-lg'>{line}</p>
									})
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}