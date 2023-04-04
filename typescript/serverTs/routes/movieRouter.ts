import { Router } from "express";
import {  createMovies, deleteMovies, findAllMovies, updateMovies } from "../controllers/moviesController";

const usersRouter=Router()

usersRouter.get('/',findAllMovies)
// usersRouter.get('/:_id',findMovieById)
// usersRouter.get("/count", countAllMovies);
usersRouter.post("/", createMovies);
usersRouter.delete('/:_id',deleteMovies)
usersRouter.put('/:_id',updateMovies)

export default usersRouter;