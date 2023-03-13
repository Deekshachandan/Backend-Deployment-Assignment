const mongoose=require("mongoose")

const noteSchema=mongoose.Schema({
    Title:String,
    Note:String,
    id:Number
 
})

const NoteModel=mongoose.model("note" , noteSchema)

module.exports={NoteModel}