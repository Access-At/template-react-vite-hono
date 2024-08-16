import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono().basePath("/api");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/test", (c) =>
  c.json({
    status: true,
    message: "Successfully get data",
    data: {
      title: "Title hello world",
      desc: "Description hello world",
    },
  })
);

export default app;
