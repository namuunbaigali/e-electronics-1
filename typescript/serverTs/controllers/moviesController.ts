import { Request,Response } from "express";
import movieModel,{ IMovie } from "../models/movieModel";

// export const countAllUsers = async (req: Request, res: Response) => {
//   res.json(await movieModel.count({}));
// };

export const findAllMovies= async (req:Request,res: Response)=>{
    const {limit="10",skip='0',ordering='releasedDesc'}=req.query
    let sort=''
    switch(ordering){
        case "releasedDesc":sort="-released"; 
        break;
        case "imdbRatingDesc":sort="-awards.wins"
        break
        case'titleAsc':sort="title"
        break 
        case'titleDesc':sort="-title"
        break
        default:sort='released'
        break
    }
    const result:IMovie[] = await movieModel.find({}).sort(sort).limit(Number(limit)).skip(Number(skip));
   try {
     res.json(result)
   } catch (error) {
    console.log(error);
    
   }
};

export const findMoviesById= async (req:Request,res: Response)=>{
const {_id}=req.params;

    const result:IMovie|null = await movieModel.findById(_id);
  try {
     res.json(result)
   } catch (error) {
    console.log(error);
    
   }
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