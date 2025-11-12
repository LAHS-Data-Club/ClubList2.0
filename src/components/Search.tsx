import { useState } from 'react';
import Filter from './Filter';
import { dateValues, tagValues } from '../functions/search/options';
import type { Dispatch, SetStateAction, ChangeEvent } from 'react';
import { SlidersHorizontal } from 'lucide-react';

interface Props {
	setSearchQuery: Dispatch<SetStateAction<string>>,
	setDateFilters: Dispatch<SetStateAction<string[]>>,
	setTimeFilters: Dispatch<SetStateAction<string[]>>,
	setTagFilters: Dispatch<SetStateAction<string[]>>,
	dateFilters: string[],
	timeFilters: string[],
	timeValues: string[],
	tagFilters: string[],
}

export default function Search({
	setSearchQuery,
	setDateFilters,
	setTimeFilters,
	setTagFilters,
	dateFilters,
	timeFilters,
	timeValues,
	tagFilters
}: Props) {
	// if someone ever gets the motivation, base the tag filters on what tags are on the clubs 
	// rather than the static tags i put in one file... theres a lot of unused tags as a result
	const [isOpen, setIsOpen] = useState(true);
	
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
	}

	return (
		<div className="flex flex-col w-full mb-5">
			<div className="flex">
				{/* Search bar */}
				<input
					type="text"
					placeholder="Search for clubs!"
					onChange={handleSearch}
					className="w-full bg-white/50 p-3 rounded-md drop-shadow-md focus:outline-none focus:drop-shadow-lg focus:bg-white/70 font-body transition duration-100"
				/>
				{/* Filter button */}
				<div className="ms-2">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className='h-full text-body flex justify-center items-center gap-1 max-w-min p-2 rounded-md bg-white/50 cursor-pointer drop-shadow-md hover:drop-shadow-lg hover:bg-white/70 transition duration-75'
					>
						<SlidersHorizontal size={20} />
						<div>Filter</div>
					</button>
				</div>
			</div>
			{isOpen && (
				<div className="relative">
					<div
						className="font-body mt-2 w-full divide-y divide-white rounded-md bg-white/70 backdrop-blur drop-shadow-lg text-black focus:outline-none flex flex-col px-4"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="menu-button"
						tabIndex={-1}
					>
						<Filter 
							title={"Dates"} 
							filterValues={dateValues} 
							setFilterValues={setDateFilters} 
							filter={dateFilters}
						/>
						<Filter 
							title={"Times"}
							filterValues={timeValues} 
							setFilterValues={setTimeFilters} 
							filter={timeFilters}
						/>
						<Filter 
							title={"Tags"}
							filterValues={tagValues} 
							setFilterValues={setTagFilters} 
							filter={tagFilters}
						/>
					</div>
				</div>
			)}
		</div>
	);
}
