const BurgerBtn = async ({externalHandler, isOpen}) => {
	return (
		<div onClick={externalHandler}
					id='burger-btn'
					className='md:hidden relative w-[36px] h-[36px] cursor-pointer'>
			<div className={`${isOpen ? 'rotate-45 top-[18px]' : 'rotate-0 top-[8px]'} 
													transition-all h-[1px] bg-[#d9d9d9] absolute w-full`}></div>
			<div className={`${isOpen ? 'hidden' : 'block'} 
													transition-all h-[1px] bg-[#d9d9d9] absolute w-full top-[18px]`}></div>
			<div className={`${isOpen ? '-rotate-45 top-[18px]' : 'rotate-0 top-[28px]'} 
													transition-all h-[1px] bg-[#d9d9d9] absolute w-full`}></div>
  	</div>
	)
}

export {BurgerBtn}