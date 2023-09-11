export default function Search({ onChange }) {
    return (
        <input
            type="text"
            placeholder="Search for clubs!"
            onChange={onChange}
            className="width-100 bg-white/50 mb-5 p-3 rounded-md drop-shadow-md focus:outline-none focus:drop-shadow-lg focus:bg-white/70 font-body transition duration-100"
        />
    );
}
