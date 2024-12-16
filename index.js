import dotenv from "dotenv";
import connectDb from "./src/db/index.js";
import Routes from "./src/Routes/route.js"
import { app } from "./src/app.js";

dotenv.config({
    path:"./env"
})


app.use('/',Routes);

connectDb()
.then(() =>{
    app.listen(process.env.PORT || 3000, () =>{
        console.log(`server is running ${process.env.PORT}`);   
    })
})
.catch((err) => {
    console.error("Server connecting faild",err.message);
})