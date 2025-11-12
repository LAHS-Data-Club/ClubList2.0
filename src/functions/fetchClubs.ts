import type { Club } from "../lib/types";

// TODO: update the cachedclublist website...
// TODO: fix this

export async function fetchClubs(): Promise<Club[]> {
  const res = await fetch("https://cachedclublist.lahsdataclub.com/clubs.json"); 
  const clubsJSON = await res.json();

  const clubs = [];
  for (let i = 0; i < clubsJSON.length; i++) {
    const club = { ...clubsJSON[i].fields };
    for (const key in club) {
      club[key] = club[key].stringValue;
    }
    const tags = club.tags.split(",")
      .map((x: string) => x.trim())
      .filter((x: string) => x.length);
    clubs.push({ ...club, tags, id: i });
  }

  // shift data club to the front :)
  const dataClubIndex = clubs.findIndex((club) => club.name === "Data Club");
  if (dataClubIndex !== -1) {
    const dataClub = clubs.splice(dataClubIndex, 1);
    clubs.unshift(dataClub[0]);
  }
  return clubs;
}