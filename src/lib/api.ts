import { ServerType } from "@/api/server";
import { hc } from "hono/client";

export const client = hc<ServerType>(`${window.location.origin}`);
