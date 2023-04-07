import { Request,Response } from "express";
import MovieModel,{ IMovie } from "../models/movieModel";

// export const countAllUsers = async (req: Request, res: Response) => {
//   res.json(await movieModel.count({}));
// };
export const findAllMovieIds = async (req: Request, res: Response) => {
  const result = await MovieModel.find().select({ _id: 1 });
  res.json(result.map((movieId) => movieId._id));
};


export const findAllMovies= async (req:Request,res: Response)=>{
    const {limit="12",skip='0',ordering='releasedDesc',q=''}=req.query
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
    const result:IMovie[] = await MovieModel.find({"title":{$regex: new RegExp(`${q}`)}}).sort(sort).limit(Number(limit)).skip(Number(skip));
   try {
     res.json(result)
   } catch (error) {
    console.log(error);
    
   }
};

export const findMoviesById= async (req:Request,res: Response)=>{
const {_id}=req.params;

    const result:IMovie|null = await MovieModel.findById(_id);
  try {
     res.json(result)
   } catch (error) {
    console.log(error);
    
   }
}

export const createMovies = async (req: Request, res: Response) => {
  const newUser = await MovieModel.create(req.body);
  res.json(newUser);
};

export const deleteMovies= async (req:Request,res: Response)=>{
    const {_id}=req.params
    const deleteUser = await MovieModel.findByIdAndDelete(_id);
    res.json(deleteUser)
}

export const updateMovies= async (req:Request,res: Response)=>{
    const {_id}=req.params
    const updateUser = await MovieModel.findByIdAndUpdate(_id);
    res.json(updateUser)
}