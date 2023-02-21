const express=require("express");
const app=express();

 //exporting this app to import in server

/*The express module is imported and assigned to the constant express.
Then, the express() function is called to create an instance of the Express application stored in 'app'.
finally app is exported. This is useful because  it allows you to add middleware and routes to the application instance, and configure it as needed before exporting it. 
Providing greater flexibility and control over the app's behaviour. So it is beneficial for functions like logging, authentication,
data validation etc */

app.use(express.json());

const product = require("./routes/productRoute");


app.use("/api/v1",product)
module.exports = app