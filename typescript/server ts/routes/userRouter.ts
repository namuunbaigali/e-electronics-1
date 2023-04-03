import { Router } from "express";
import {  createUser, deleteUser, findAllUsers, findUserById, updateUser } from "../controllers/userController";

const usersRouter=Router()

usersRouter.get('/',findAllUsers)
usersRouter.get('/:_id',findUserById)
// usersRouter.get("/count", countAllUsers);
usersRouter.post("/", createUser);
usersRouter.delete('/:_id',deleteUser)
usersRouter.put('/:_id',updateUser)

export default usersRouter;