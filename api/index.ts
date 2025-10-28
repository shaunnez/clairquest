import express from "express";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const app = express();
app.use(express.json());

app.get("/api/health", (_req, res) => res.json({ ok: true }));

export default (req: VercelRequest, res: VercelResponse) => app(req, res);
