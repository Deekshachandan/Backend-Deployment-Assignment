const express = require("express");

const noteRouter = express.Router();

const { NoteModel } = require("../Model/noteSchema");

noteRouter.use(express.json());




noteRouter.get("/", async (req, res) => {
let data= await NoteModel.find()
console.log(data)
res.send(data)
});


// Post request
noteRouter.post("/add",  async (req, res) => {
  try {
    let data = req.body; // get the data from body
    let note = new NoteModel(data); //craete the new data
    console.log(note);
    await note.save(); // save it to mongo
    res.send("data has been sent");
  } catch (err) {
    res.send("something went wrong couldnot post / add the data");
    console.log("An error occured");
  }
});


// Patch Request
noteRouter.patch("/update/:id",async(req,res)=>{
    try{
        let id = req.params.id;
        let data = req.body;
        const notes = await NoteModel.findByIdAndUpdate({_id:id}, data)
      console.log(notes);
      res.send(` Document with ${id} has been updated `)
    }
    catch(err){
        console.log(err);
        res.send(err.message);
    }
})




//Delete the request

noteRouter.delete("/delete/:id",async(req,res)=>{
    let id = req.params.id;
    try{
        let data = req.body;
        let notes = await NoteModel.findByIdAndDelete({_id:id}, data);
        res.send(`id ${id} has been deeleted from DataBase`);
          console.log(notes)
    }
    catch(err){
        console.log(err);
        res.send(err.message);
    }
})




// Put request
noteRouter.put("/update/:id",async(req,res)=>{
    try{
        let id = req.params.id;
        let data = req.body;
        const notes = await NoteModel.findByIdAndUpdate({_id:id}, data)
      console.log(notes);
      res.send(` Document with ${id} has been updated `)
    }
    catch(err){
        console.log(err);
        res.send(err.message);
    }
})





module.exports = {
  noteRouter,
};
