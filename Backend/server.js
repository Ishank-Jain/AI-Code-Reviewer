import dotenv from "dotenv";
dotenv.config();

import App from './src/app.js';
const port = 5555


// server started callback executed
App.listen(port, () => console.log(`app started at port : ${port}`)) 