const userModel = require("./../models/user");

//To create new user

exports.createUser = async (req,res) => {
    try{
        const savedData = await new userModel(req.body).save();
        res.status(201).json(savedData);
    }
    catch(err){
        res.status(500).json({err})
    }
} 

//to get all user data
exports.getAllUser = async (req,res) => {
    try{
        const users = await userModel.find();
        res.json(users);
    }catch(err){
        res.json({err});
    }
    }

//to get specific user
exports.getUser = async (req,res) => {
    try{
        const users = await userModel.find({_id:req.params.userID});
        res.json(users);
    }catch(err){
        res.json({err});
    }
} 

//to delete user
exports.deleteUser = (req,res) => {
    userModel.findOneAndDelete({_id:req.params.userID},(err,data) => {
    if(err){
        res.json(err);
    }else{
        res.json(data);
    }
});
}

//to update user
exports.updateUser = (req,res) => {
    userModel.findByIdAndUpdate({_id:req.params.userID},req.body,{new:true},(err,data) => {
        if(err){
            res.json(err);
        }else{
            res.json(data);
        }
    });
}

