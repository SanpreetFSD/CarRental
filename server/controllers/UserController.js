const UserModel = require( "../models/UserModel")
const bcrypt = require('bcrypt');
const saltRounds = 10;


const registerController= async(req, res) => {
    const{username, email, password} =req.body;
    const hash = await bcrypt.hash(password, saltRounds);
    let userobj = {
        username: username,
        email: email,
        password: hash
    }
    UserModel.find({username}).then((data)=>{
        if(data.length == 0){
            UserModel(userobj).save().then(()=>
                res.send({
                    message:"user registration successful", data
                })
            )
            .catch((error)=>
            res.send({
                message:"user registration unsuccessful", error
            })
            )
        }
    })
}


// const userController= async(req, res) => {
    
// }

module.exports={
    registerController
    
}


// adding for testing