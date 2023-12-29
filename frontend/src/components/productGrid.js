import { Suspense } from 'react';
import { Pagination } from './pagination';
import { ProductCard } from "./productCard"

const getProducts = async (page, perPage) =>{
  const res = await fetch(`${process.env.BASE_URL}/products/?page=${page}&perPage=${perPage}`, 
													{ next: { revalidate: process.env.PRODUCTS_REVALIDATE } });
  if (!res.ok) {
    console.error('Ошибка загрузки товаров');
  }
  return res.json()
}

const ProductsGrid = async ({page, perPage}) => {
	const products = await getProducts(page, perPage);

	return (
		products && products.results && (
			<>
				{/* <div id='tool-bar'
							className="select-none px-[20px] 
												pt-[65px] pb-5 bg-[#d9d9d9] 
												border-b border-b-[#2b2b2b] 
												flex flex-wrap gap-2">
					<div id='categories-dropdown' 
								className="dropdown flex items-center text-[#2b2b2b] hover:bg-[#f5f5f5] p-1 border border-[#2b2b2b] w-max">
						<div>Все категории</div>
						<Image src={expandMoreImg}
										alt="expand more"
										loading="lazy"
										className='sprite-icon'/>
					</div>
				</div> */}
				<div id='products-grid' className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1px]">
					<Suspense>
						{
							products.results.map((product, idx) => (
								<ProductCard key={idx}
															productImage={product.image} 
															productName={product.name} 
															productPrice={product.price} 
															productSlug={product.slug}/>
							))
						}
					</Suspense>
				</div>
				<Suspense>
				<Pagination currentPage={page} 
										itemsPerPage={perPage}
										totalItems={products.count}/>
				</Suspense>
			</>
		)
	)
}

export { ProductsGrid }