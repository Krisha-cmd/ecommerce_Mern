const app = require("./app");

const dotenv = require("dotenv"); //imports dotevn module which loads environment variables.
//it stores api keys and database credentials securely

//config

dotenv.config({path:"backend/config/config.env"})// the env varibales in config.env is loaded into process.env by using .config()

app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)

})//starts the server and listens for incoming requests on the specific PORT 
//the last argument a callback function is  called once the server starts listening for requests. This function simply logs a message to the console indicating that the server is running and listening on the specified port.

