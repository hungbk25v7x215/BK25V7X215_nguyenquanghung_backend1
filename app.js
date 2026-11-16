import express from "express";
import cors from "cors";
import contactsRouter from "./app/routes/contact.route.js";
import ApiError from "./app/api-error.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Chào mừng bạn đến với ứng dụng sổ liên lạc." });
});

app.use("/api/contacts", contactsRouter);
app.use((_req, _res, next) => next(new ApiError(404, "Resource not found")));
app.use((error, _req, res, _next) => {
  const status = error.statusCode || 500;
  res
    .status(status)
    .json({ message: status >= 500 ? "Internal Server Error" : error.message });
});

export default app;
