import { Router } from "express";
import {  createMovies, deleteMovies, findAllMovieIds, findAllMovies, findMoviesById, updateMovies } from "../controllers/moviesController";

const moviesRouter=Router()

moviesRouter.get('/',findAllMovies)
moviesRouter.get("/ids", findAllMovieIds);
moviesRouter.get('/:_id',findMoviesById)
// moviesRouter.get("/count", countAllMovies);
moviesRouter.post("/", createMovies);
moviesRouter.delete('/:_id',deleteMovies)
moviesRouter.put('/:_id',updateMovies)


export default moviesRouter;