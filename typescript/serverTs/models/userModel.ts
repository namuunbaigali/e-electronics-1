import mongoose ,{Schema}from 'mongoose'
export interface UserInterface{
    _id:mongoose.Types.ObjectId,
    name:string,
    email:string,
    password:string
}


const movieSchema=new Schema<UserInterface>({
    name:{type:String,required:true}
})

const movieModel=mongoose.model<UserInterface>("User",movieSchema)

export default movieModel