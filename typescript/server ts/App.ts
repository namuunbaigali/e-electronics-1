import express ,{Express,Request,Response} from "express";
import usersRouter from "./routes/userRouter";


const app:Express = express();
app.use(express.json())



app.get("/", (req:Request, res:Response) => {
  res.json("hello");
});




app.use("/api/users",usersRouter)

export default app

