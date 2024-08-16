import { apiResponseSchema } from "@/schemas/apiResponseSchema";
import { GET } from "@/util/fetch";
import { useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { z } from "zod";

const get = apiResponseSchema.extend({
  data: z.object({
    title: z.string(),
    desc: z.string(),
  }),
});

export type GetType = z.infer<typeof get>;
function useGetQuery(): UseQueryOptions<z.infer<typeof get>, unknown> {
  return {
    queryKey: ["get"],
    queryFn: () => GET<GetType>("/test", get),
  };
}

export function useFetch(): UseQueryResult<GetType, unknown> {
  const options = useGetQuery();
  return useQuery<GetType, unknown>(options);
}
