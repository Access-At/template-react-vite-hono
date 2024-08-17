import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono().basePath("/api");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
const route = app
  .get("/", (c) =>
    c.json({
      status: true,
      message: "Hello this is api",
    })
  )
  .get("/test", (c) =>
    c.json(
      {
        ok: true,
        message: "Successfully get data",
        data: {
          title: "Title Hello World",
          desc: "Description Hello World",
        },
      },
      200
    )
  );

export type ServerType = typeof route;

export default app;
