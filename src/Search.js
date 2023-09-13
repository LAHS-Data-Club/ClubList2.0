import { useState } from "react";

export default function Search({ onChange }) {
    const [open, setOpen] = useState(true); // for testing: TODO: turn back to false

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="flex flex-col w-full mb-5">
            <div className="flex">
                <input
                    type="text"
                    placeholder="Search for clubs!"
                    onChange={onChange}
                    className="w-full bg-white/50 p-3 rounded-md drop-shadow-md focus:outline-none focus:drop-shadow-lg focus:bg-white/70 font-body transition duration-100"
                />
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
                <div className="relative">
                    <div
                        className="font-body absolute z-10 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white/70 backdrop-blur shadow-lg ring-1 ring-black ring-opacity-5 text-black focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabindex="-1"
                    >
                        <div class="py-1" role="none">
                            <a
                                href="#"
                                class="text-gray-700 block px-4 py-2 text-sm"
                                role="menuitem"
                                tabindex="-1"
                                id="menu-item-0"
                            >
                                Edit
                            </a>
                            <a
                                href="#"
                                class="text-gray-700 block px-4 py-2 text-sm"
                                role="menuitem"
                                tabindex="-1"
                                id="menu-item-1"
                            >
                                Duplicate
                            </a>
                        </div>
                        <div class="py-1" role="none">
                            <a
                                href="#"
                                class="text-gray-700 block px-4 py-2 text-sm"
                                role="menuitem"
                                tabindex="-1"
                                id="menu-item-2"
                            >
                                Archive
                            </a>
                            <a
                                href="#"
                                class="text-gray-700 block px-4 py-2 text-sm"
                                role="menuitem"
                                tabindex="-1"
                                id="menu-item-3"
                            >
                                Move
                            </a>
                        </div>
                        <div class="py-1" role="none">
                            <a
                                href="#"
                                class="text-gray-700 block px-4 py-2 text-sm"
                                role="menuitem"
                                tabindex="-1"
                                id="menu-item-4"
                            >
                                Share
                            </a>
                            <a
                                href="#"
                                class="text-gray-700 block px-4 py-2 text-sm"
                                role="menuitem"
                                tabindex="-1"
                                id="menu-item-5"
                            >
                                Add to favorites
                            </a>
                        </div>
                        <div class="py-1" role="none">
                            <a
                                href="#"
                                class="text-gray-700 block px-4 py-2 text-sm"
                                role="menuitem"
                                tabindex="-1"
                                id="menu-item-6"
                            >
                                Delete
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
