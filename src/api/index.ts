import { example } from "@/api/routes/example";
import { Hono } from "hono";
import { logger } from "hono/logger";

const app = new Hono().basePath("/api");

app.use(logger());

const route = app.route("/", example);

export type ServerType = typeof route;

export default app;
