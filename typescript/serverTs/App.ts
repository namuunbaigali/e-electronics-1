import express ,{Express,Request,Response} from "express";
import moviesRouter from "./routes/movieRouter";
import usersRouter from "./routes/userRouter";
import cors from "cors";


const app:Express = express();
app.use(cors());
app.use(express.json())



app.get("/", (req:Request, res:Response) => {
  res.json("hello");
});




app.use("/api/users",usersRouter)
app.use("/api/movies",moviesRouter )

export default app

