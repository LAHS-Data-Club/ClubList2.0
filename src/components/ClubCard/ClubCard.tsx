import './ClubCard.css';
import { parseLocation, parseTime } from '../../functions/utils';
import { NavLink } from 'react-router';
import { CalendarRange, MapPin } from 'lucide-react'
import type { Club } from '../../lib/types';

interface Props {
	c: Club
}

export default function ClubCard({ c }: Props) {
	const url = c.name.toLowerCase().replaceAll(" ", "-");
	return (
		<NavLink
			to={'clubs/' + url}
			className={
				(c.name === 'Data Club' ? ' glow ' : ' card ') +
				'bg-white/40 p-5 rounded-2xl drop-shadow-xl font-body lg:flex lg:flex-col justify-between h-90'
			}
		>
			<div className="text-md lg:text-base space-y-2">
				<p className="font-display text-base lg:text-xl font-bold">
					{c.name}
				</p>
				{c.tags && (
					<div className="flex flex-wrap gap-2 text-xs">
						{c.tags.map((tag) => (
							<div
								key={tag}
								className="bg-white/50 rounded-full drop-shadow-md py-2 px-3"
							>
								{tag}
							</div>
						))}
					</div>
				)}
				<div className="space-y-1">
					<div className="flex items-start gap-1">
						<CalendarRange />
						<div className="align-baseline">
							{parseTime(c.day, c.time)}
						</div>
					</div>
					<div className="flex items-start gap-1">
						<MapPin />
						<div>{parseLocation(c.location)}</div> 
					</div>
				</div>
				<p className='line-clamp-6'>{c.description || "No description given."}</p>
			</div>
		</NavLink>
	);
}
