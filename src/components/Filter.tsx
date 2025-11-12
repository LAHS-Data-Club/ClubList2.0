import type { Dispatch, SetStateAction, ChangeEvent } from "react";

interface Props {
	title: string;
	filter: string[];
	filterValues: string[];
	setFilterValues: Dispatch<SetStateAction<string[]>>;
}

export default function Filter({
	title,
	filterValues,
	setFilterValues,
	filter,
}: Props) {
	function handleFilterChange(
		e: ChangeEvent<HTMLInputElement>,
		value: string
	) {
		setFilterValues((prev) =>
			e.target.checked
				? [...prev, value]
				: prev.filter((x) => x !== value)
		);
	}

	return (
		<div className="py-4">
			<div className="font-bold text-lg mb-1">{title}</div>
			<div className="flex flex-wrap">
				{filterValues.map((value) => (
					<div key={value} className="me-3 flex items-center">
						<input
							id={value + title}
							checked={filter.includes(value)}
							className="me-1"
							type="checkbox"
							onChange={(e) => handleFilterChange(e, value)}
						/>
						<label htmlFor={value + title}>{value}</label>
					</div>
				))}
			</div>
		</div>
	);
}
