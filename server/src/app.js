import express, { json } from "express";
import cors from "cors";
import usersRouter from "./routers/usersRouter";
import userRolesRouter from "./routers/userRolesRouter";
import authRouter from "./routers/authRoter";

export const app = express();
app.use(json());
app.use(cors());

app.use(authRouter);
app.use("/api/users/", usersRouter);
app.use("/api/userRoles", userRolesRouter);

export default app;
