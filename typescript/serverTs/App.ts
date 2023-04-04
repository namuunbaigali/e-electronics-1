import express ,{Express,Request,Response} from "express";
import moviesRouter from "./routes/movieRouter";
import usersRouter from "./routes/userRouter";


const app:Express = express();
app.use(express.json())



app.get("/", (req:Request, res:Response) => {
  res.json("hello");
});




app.use("/api/users",usersRouter)
app.use("/api/movies",moviesRouter )

export default app

