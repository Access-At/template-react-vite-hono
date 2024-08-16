import { useFetch } from "@/query/get";

export default function Home() {
  const { data: get, isPending, isError, error } = useFetch();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error: {error instanceof Error ? error.message : "An unknown error occurred"}</div>;

  return (
    <div className="flex flex-col">
      <span>{get.data.title}</span>
      <span>{get.data.desc}</span>
    </div>
  );
}
