import Express from "express";
import { Book } from "../models/bookModel.js";

const router = Express.Router();


router.post('', (req, res) => {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
        res.send('Send all required fields: title, author, publishYear')
    }
    const newBook = {
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear
    };

    const book = Book.create(newBook)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send(err);
        })
});


// app.post('/', async (request, response) => {
//     try {
//         if (
//             !request.body.title || !request.body.author || !request.body.publishYear
//         ) {
//             response.send('Send all required fields: title, author, publishYear'
//             );
//         }
//         const newBook = {
//             title: request.body.title,
//             author: request.body.author,
//             publishYear: request.body.publishYear,
//         };

//         const book = await Book.create(newBook);        // .......another way of writing...........
//         response.send(book);

//     } catch (error) {
//         console.log(error.message);
//         response.send(" message: error.message ");
//     }
// })

router.get('', (req, res) => {
    Book.find()
        .then((data) => {
            const response = {
                data: data,
            }
            res.json(response)
        })

        .catch((err) => {
            res.send(err)
        })
});

router.get('/:id', (req, res) => {

    Book.findById(req.params.id)
        .then((data) => {
            res.json(data)
        })

        .catch((err) => {
            res.send(err)
        })
})


router.put('/:id', (req, res) => {
    // if (!req.body.title || !req.body.author || !req.body.publishYear) {
    //     res.send('Send all required fields: title, author, publishYear')
    // }
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => {
            console.log("updated successfully");
        })

        .catch((err) => {
            res.send("not updated :" + err)
        })

});


router.delete('/:id', (req, res) => {

    Book.findByIdAndDelete(req.params.id)
        .then((data) => {
            console.log("delete successfully");
        })

        .catch((err) => {
            res.send("not deleted :" + err)
        })

});

export default router;