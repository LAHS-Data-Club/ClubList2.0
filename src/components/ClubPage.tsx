import { NavLink, useParams } from "react-router";
import { parseLocation, parseTime } from "../functions/utils";
import { clubOptions } from "../functions/clubOptions";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, CalendarRange, MapPin, User } from "lucide-react";

export default function ClubPage() {
	const { id } = useParams();
  const { data, isPending } = useQuery(clubOptions());

  const target = data
    ? data.find((x) => x.url === id) 
    : null;

	return (
		<div>
			<div className="w-full mb-3 text-center bg-white/40 drop-shadow-xl backdrop-blur p-3">
				<div className="text-xl font-display font-bold me-1">
					<NavLink to="/">LAHS Club List</NavLink>
				</div>
				<div className="italic text-md">A project by the Data Club</div>
			</div>
			{isPending && <div>Loading club data...</div>}

			{target && (
				<div className="w-full flex flex-col md:items-center h-full">
					<div className="p-5 font-body h-full max-w-4xl min-w-sm">
						<div className="text-lg h-full">
							<p className="font-display text-3xl md:text-4xl font-bold py-2 md:py-4">
								{target.name}
							</p>
							{target.tags && (
								<div className="flex flex-wrap gap-2 text-xs">
									{target.tags.map((tag) => (
										<div
											key={tag}
											className="bg-white/50 rounded-full drop-shadow-md py-2 px-3"
										>
											{tag}
										</div>
									))}
								</div>
							)}
							<div className="flex gap-4">
								<div className="my-2">
									<div className="flex items-center gap-1">
										<CalendarRange size={20} />
										<div className="align-baseline">
											{parseTime(target.day, target.time)}
										</div>
									</div>
									<div className="flex items-center gap-1">
										<MapPin size={20} />
										<div>
											{parseLocation(target.location)}
										</div>
									</div>
								</div>
								<div className="my-2">
									<div className="flex items-center gap-1">
										<User size={20} />
										<div>
											<span>President: </span>
											{target.presidents || "No Presidents Specified"}
										</div>
									</div>
									<div className="flex items-center gap-1">
										<User size={20} />
										<div>
											<span>Advisor: </span>
											{target.advisors || "No Advisors Specified"}
										</div>
									</div>
								</div>
							</div>
							<p>{target.description || "No description given."}</p>
						</div>
						<div className="flex gap-3">
							<NavLink
								to="/"
								className="flex items-center gap-1 max-h-min p-2 rounded-md mt-3 bg-white/50 drop-shadow-md hover:drop-shadow-lg hover:bg-white/70 transition duration-75"
							>
                <ArrowLeft size={20} />
								<div>Back to Club List</div>
							</NavLink>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
