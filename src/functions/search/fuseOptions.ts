import { searchFields } from "./options";

export const fuseOptions = {
  includeScore: true,
  includeMatches: true,
  threshold: 0.2,
  ignoreLocation: true,
  keys: searchFields,
};