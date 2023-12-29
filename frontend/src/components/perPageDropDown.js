'use client'
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { createUrl } from '@/utils';

const PerPageDropdown = ({perPage}) => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();
	const options = [10, 15, 20, 25];

	const handlePerPageChange = async (value) => {
		const previousSearchParams = new URLSearchParams(searchParams.toString());
		previousSearchParams.set('perPage', value);
		router.replace(createUrl(pathname, previousSearchParams));
	};

	return (
		<div className="flex items-center space-x-2">
			<select
				id="perPageSelect"
				value={perPage}
				onChange={(e) => handlePerPageChange(e.target.value)}
				className="bg-transparent text-[#2b2b2b] hover:bg-[#f5f5f5] p-2 border border-[#2b2b2b] focus:outline-none">
				{options.map((option) => (
					<option key={option} value={option}>
						Показывать по: {option}
					</option>
				))}
			</select>
		</div>
	);
};

export { PerPageDropdown };