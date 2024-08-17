import { client } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export function useGetQuery() {
  return useQuery({
    queryKey: ["test"],
    queryFn: () => client.api.test.$get().then((res) => res.json()),
  });
}
