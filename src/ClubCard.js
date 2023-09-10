export default function ClubCard({
    id,
    name,
    description,
    advisor,
    contact,
    date,
    time,
    location,
}) {
    return (
        <div className="p-5 backdrop-blur bg-white/40 rounded-[1rem] drop-shadow-xl max-w-lg">
            <p className="font-display">{name}</p>
            <p>{description}</p>
            <p>{advisor}</p>
            <p>{contact}</p>
            <p>
                {date} {time}
            </p>
            <p>{location}</p>
        </div>
    );
}
