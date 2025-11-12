import { queryOptions } from "@tanstack/react-query";
import { fetchClubs } from "./fetchClubs";

export function clubOptions() {
  return queryOptions({
    queryKey: ["clubs"],
    queryFn: fetchClubs,
    staleTime: 1000 * 60 * 60 * 24,
    throwOnError: true,
  });
}