import { ServerType } from "@/api";
import { hc } from "hono/client";

export const client = hc<ServerType>(`${window.location.origin}`);
