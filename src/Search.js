import { useState } from "react";

export default function Search({
    onChange,
    setDateFilters,
    setTimeFilters,
    dateFilters,
    timeFilters,
    dateValues,
    timeValues,
}) {
    const [open, setOpen] = useState(true); // for testing: TODO: turn back to false

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleCheckOnChange = (e, name, isDate) => {
        if (isDate) {
            if (e.target.checked) {
                setDateFilters([...dateFilters, name]);
            } else {
                setDateFilters(dateFilters.filter((date) => date !== name));
            }
        } else {
            if (e.target.checked) {
                setTimeFilters([...timeFilters, name]);
            } else {
                setTimeFilters(timeFilters.filter((time) => time !== name));
            }
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
                {/* Filter button */}
                <div className="ms-2">
                    <button
                        onClick={handleOpen}
                        className={`m-0 h-full text-body flex justify-center items-center gap-1 max-w-min p-2 rounded-md ${
                            open ? "bg-white/70" : "bg-white/50"
                        } drop-shadow-md hover:drop-shadow-lg hover:bg-white/70 transition duration-75`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                            />
                        </svg>
                        <div>Filter</div>
                    </button>
                </div>
            </div>
            {open && (
                // Popup filter
                <div className="relative">
                    <div
                        className="font-body absolute z-10 mt-2 w-full origin-top-right divide-y divide-white rounded-md bg-white/70 backdrop-blur drop-shadow-lg text-black focus:outline-none flex flex-col px-4"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex="-1"
                    >
                        <div className="py-4">
                            <div className="font-bold text-lg mb-1">Days</div>
                            <div className="flex">
                                {dateValues.map((day) => (
                                    <div
                                        key={day + "_cb"}
                                        className="me-3 flex items-center"
                                    >
                                        <input
                                            id={day + "_cb"}
                                            className="me-1"
                                            type="checkbox"
                                            onChange={(e) =>
                                                handleCheckOnChange(
                                                    e,
                                                    day,
                                                    true
                                                )
                                            }
                                        ></input>
                                        <label htmlFor={day + "_cb"}>
                                            {day}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="py-3">
                            <div className="font-bold text-lg mb-1">Times</div>
                            <div className="flex">
                                {timeValues.map((time) => (
                                    <div
                                        key={time + "_cb"}
                                        className="me-3 flex items-center"
                                    >
                                        <input
                                            id={time + "_cb"}
                                            className="me-1"
                                            type="checkbox"
                                            onChange={(e) =>
                                                handleCheckOnChange(
                                                    e,
                                                    time,
                                                    false
                                                )
                                            }
                                        ></input>
                                        <label htmlFor={time + "_cb"}>
                                            {time}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
