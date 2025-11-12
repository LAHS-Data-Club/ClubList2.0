import Fuse from "fuse.js";
import type { Club } from "../../lib/types";
import { fuseOptions } from "./fuseOptions";
import { searchFields } from "./options";

export const fuse = new Fuse<Club>([], fuseOptions);

// kinda scuffed lol but im too lazy to fix
export function getSearchResults(
  clubs: Club[],
  searchQuery: string, 
  dateFilters: string[],
  timeFilters: string[],
  tagFilters: string[],
) {
  const query: Fuse.Expression = { $and: [] };
  let results = clubs;

  // normal fuzzy search
  if (searchQuery.length !== 0) {
    query.$and?.push({
      $or: searchFields.map((field) => ({
        [field]: searchQuery,
      })),
    });
  }

  if (dateFilters.length > 0) {
    query.$and?.push({
      $or: dateFilters.map((filter) => ({ day: filter })),
    });
  }

  if (timeFilters.length > 0) {
    query.$and?.push({
      $or: timeFilters.map((filter) => ({ time: filter })),
    });
  }

  if (query.$and?.length) {
    results = fuse.search(query).map((result) => result.item);
  }

  if (tagFilters.length > 0) {
    results = results.filter((club) => 
      tagFilters.some(tag => club.tags.includes(tag))
    );
  }
  return results;
}
