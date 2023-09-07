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
        <div>
            <p>{name}</p>
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
