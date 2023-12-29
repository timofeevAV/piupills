import Image from 'next/image';

export function GridTileImage({
	isInteractive = true,
	active,
	label,
	...props
}) {
	return (
		<div
			className={
				`group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border hover:border-white
				${active ? 'border-2 border-white' : 'border-[#d9d9d9]'}`}>
			{props.src ? (
				<Image
					className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
					{...props}/>
			) : null}
		</div>
	);
}