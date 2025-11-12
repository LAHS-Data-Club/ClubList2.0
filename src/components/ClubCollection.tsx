import { clubOptions } from '../functions/clubOptions';
import Search from './Search';
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component'; 
import ClubCard from './ClubCard/ClubCard';
import { fuse, getSearchResults } from '../functions/search/search';
import type { Club } from '../lib/types';
import { useQuery } from '@tanstack/react-query';
import { LoaderCircle } from 'lucide-react';

export default function ClubCollection() {
	const [searchQuery, setSearchQuery] = useState('');
	const [searchResults, setSearchResults] = useState<Club[]>([]);
	const [displayedResults, setDisplayedResults] = useState<Club[]>([]);
	const [dateFilters, setDateFilters] = useState<string[]>([]);
	const [timeFilters, setTimeFilters] = useState<string[]>([]);
	const [tagFilters, setTagFilters] = useState<string[]>([]); 
	const { data, isPending } = useQuery(clubOptions());
	
	useEffect(() => {
		if (data) {
			fuse.setCollection(data);
		}
	}, [data, isPending])

	// When the search query changes, update the data
	useEffect(() => {
		if (data) {
			const results = getSearchResults(
				data,
				searchQuery,
				dateFilters,
				timeFilters,
				tagFilters,
			);
			setSearchResults(results);
			setDisplayedResults(results.slice(0, 20));
		}
	}, [searchQuery, dateFilters, timeFilters, data, tagFilters]);

	const uniqueTimeValues = [...new Set(data?.map((c) => c.time))]
		.map((value) => value === '' ? 'No Time Specified' : value);

	return (
		<div className="p-5">
			<div className="w-full mb-6 mt-8 lg:mb-10 lg:mt-12">
				<div className="text-4xl font-display font-bold text-center lg:text-left ">
					LAHS Club List
				</div>
				<div className="italic font-body mt-1 text-center lg:text-left">
					A project by the Data Club.
				</div>
			</div>
			{isPending ? (
				<LoaderCircle 
					size={35} 
					className='w-full lg:w-fit text-gray-300 animate-spin' 
				/>
			) : (
				<div className="flex-col flex">
					<Search
						setSearchQuery={setSearchQuery}
						setDateFilters={setDateFilters}
						setTimeFilters={setTimeFilters}
						dateFilters={dateFilters}
						timeFilters={timeFilters}
						timeValues={uniqueTimeValues}
						tagFilters={tagFilters}
						setTagFilters={setTagFilters}
					/>
					<InfiniteScroll
						dataLength={displayedResults.length}
						loader={<p>Loading more courses...</p>}
						next={() => {
							setDisplayedResults(
								displayedResults.concat(
									searchResults.slice(
										displayedResults.length,
										displayedResults.length + 10,
									),
								),
							);
						}}
						hasMore={displayedResults.length < searchResults.length}
					>
						<div className="grid lg:grid-cols-3 2xl:grid-cols-4 gap-4 overflow-hidden p-5">
							{displayedResults.map((club) => (
								<ClubCard 
									key={club.id}
									c={club}
								/>
							))}
						</div>
					</InfiniteScroll>
				</div>
			)}
		</div>
	);
}
