import { Request,Response } from "express";
import movieModel,{ IMovie } from "../models/movieModel";

// export const countAllUsers = async (req: Request, res: Response) => {
//   res.json(await movieModel.count({}));
// };

export const findAllMovies= async (req:Request,res: Response)=>{
    const {limit="10",skip='0'}=req.query
    const result:IMovie[] = await movieModel.find({}).limit(Number(limit)).skip(Number(skip));
    res.json(result)
};

export const findUserById= async (req:Request,res: Response)=>{
const {_id}=req.params;

    const result:IMovie|null = await movieModel.findById(_id);
    res.json(result)
}

export const createMovies = async (req: Request, res: Response) => {
  const newUser = await movieModel.create(req.body);
  res.json(newUser);
};

export const deleteMovies= async (req:Request,res: Response)=>{
    const {_id}=req.params
    const deleteUser = await movieModel.findByIdAndDelete(_id);
    res.json(deleteUser)
}

export const updateMovies= async (req:Request,res: Response)=>{
    const {_id}=req.params
    const updateUser = await movieModel.findByIdAndUpdate(_id);
    res.json(updateUser)
}