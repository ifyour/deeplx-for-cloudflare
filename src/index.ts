import { Hono } from "hono";
import { query } from "@ifyour/deeplx";

const app = new Hono();

app
  .get("/", (c) => c.redirect("/translate"))
  .get("/translate", (c) => c.text("Please use POST method :)"))
  .post("/translate", async (c) => {
    const params = await c.req.json().catch(() => ({}));
    const result = await query(params, {
      proxyEndpoint: "https://ideepl.vercel.app/jsonrpc",
    });
    return c.json(result, result.code);
  });

export default app;
