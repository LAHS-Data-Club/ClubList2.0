import { useState } from 'react';

export default function Search({
    onChange,
    setDateFilters,
    setTimeFilters,
    setTagFilters,
    dateFilters,
    timeFilters,
    tagFilters,
    dateValues,
    timeValues,
    tagValues,
}) {
    const [open, setOpen] = useState(true); // for testing: TODO: turn back to false

    const FILTER = {
        DATE: 0,
        TIME: 1,
        TAG: 2,
    };

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleCheckOnChange = (e, name, filterType) => {
        name = name.toLowerCase();
        switch (filterType) {
            case FILTER.DATE:
                if (e.target.checked) {
                    setDateFilters([...dateFilters, name]);
                } else {
                    setDateFilters(
                        dateFilters.filter(
                            (date) => date.toLowerCase() !== name,
                        ),
                    );
                }
                break;

            case FILTER.TIME:
                if (e.target.checked) {
                    setTimeFilters([...timeFilters, name]);
                } else {
                    setTimeFilters(
                        timeFilters.filter(
                            (time) => time.toLowerCase() !== name,
                        ),
                    );
                }
                break;

            case FILTER.TAG:
                if (e.target.checked) {
                    setTagFilters([...tagFilters, name]);
                } else {
                    setTagFilters(
                        tagFilters.filter((tag) => tag.toLowerCase() !== name),
                    );
                }
                break;

            default:
                break;
        }
    };

    return (
        <div className="flex flex-col w-full mb-5">
            <div className="flex">
                {/* Search bar */}
                <input
                    type="text"
                    placeholder="Search for clubs!"
                    onChange={onChange}
                    className="w-full bg-white/50 p-3 rounded-md drop-shadow-md focus:outline-none focus:drop-shadow-lg focus:bg-white/70 font-body transition duration-100"
                />
            </div>
        </div>
    );
}
