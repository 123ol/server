const mongoose = require("mongoose");

const DB = "mongodb+srv://fitbody:o901IbQ9vZEIqhOx@cluster0.cxhqody.mongodb.net/?retryWrites=true&w=majority"
                                                        
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));
