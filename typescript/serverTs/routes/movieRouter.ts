import { Router } from "express";
import {  createMovies, deleteMovies, findAllMovies, findMoviesById, updateMovies } from "../controllers/moviesController";

const moviesRouter=Router()

moviesRouter.get('/',findAllMovies)
moviesRouter.get('/:_id',findMoviesById)
// moviesRouter.get("/count", countAllMovies);
moviesRouter.post("/", createMovies);
moviesRouter.delete('/:_id',deleteMovies)
moviesRouter.put('/:_id',updateMovies)

export default moviesRouter;