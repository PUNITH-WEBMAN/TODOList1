const Todo = require("../model/todo");

const createToDo = async (req,res) => {
    const{message} = req.body;
    if(req.body.message ===""){
        return res.status(401).json({errorMessage:"Message cannot be found"})
    }
    if(!message || message.length<4 || message.length>20){
        return res.status(400).json({errorMessage:"message must be between 4 and 20 character."});
    }
    try{
        const addToDo = await Todo.create({message});
        res.status(200).json({success:"Created", data:addToDo});
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:"Internal server error"});
    }
};

const getAllToDo = async (req, res) =>{
    try{
        const getAllToDo = await Todo.find({});
        res.status(200).json({data: getAllToDo});
    }
    
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
    
};

// 
const deleteToDo = async (req,res)=>{
    try {
      const deleted = await Todo.findByIdAndDelete(req.params.id);
      if (!deleted){
        res.status(200).json({error:"Todo not found"});
      }
      res.status(200).json({success:"deleted"});
      }
     catch (error) {
      console.log(error) 
      res.status(500).json({ error: "Internal server error" }); 
    }
};


const updateToDo = async (req,res) => {
    try{
        const updateToDo = await Todo.findByIdAndUpdate(
            req.params.id,
            {message:req.body.message,},
            {new:true}
    );
    if(!updateToDo){
        res.status(404).json({error:"ToDo not found"});
        
    }
    res.json({success:"updated", data:updateToDo}); 
    }
     catch(error){
        console.log(error)
        res.status(400).json({error: "Invalid ID or update data"});
    }
};
module.exports = {
    createToDo,
    getAllToDo,
    updateToDo,
    deleteToDo
};