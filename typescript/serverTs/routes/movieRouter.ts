import { Router } from "express";
import {  createMovies, deleteMovies, findAllMovies, updateMovies } from "../controllers/moviesController";

const moviesRouter=Router()

moviesRouter.get('/',findAllMovies)
// moviesRouter.get('/:_id',findMovieById)
// moviesRouter.get("/count", countAllMovies);
moviesRouter.post("/", createMovies);
moviesRouter.delete('/:_id',deleteMovies)
moviesRouter.put('/:_id',updateMovies)

export default moviesRouter;