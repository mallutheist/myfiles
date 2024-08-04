import Express from "express";
const app = Express();


import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose"
import router from "./routes/BookRoutes.js";
import bodyParser from "body-parser";
// import BookRoutes from "./routes/BookRoutes.js"
import cors from "cors"
app.use(Express.urlencoded({ extended: true }));
app.use(cors())

// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );


app.use(Express.json())

app.get('/', (req, res) => {
    res.send('hellobrooooooooooooooooooooooos')
})

app.use('/book', router)

mongoose.connect(mongoDBURL)
    .then((val) => {
        console.log('mongodb connected');
        app.listen(PORT, () => {
            console.log(`server start running on port ${PORT}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })
