import mongoose from "mongoose";

function connect(){
    mongoose.connect('mongodb://localhost:27017/AI_database').then(function(){
        console.log('connected to databse successfully')
    }).catch(err=>{
        console.log(err)
    })
}

export default connect
