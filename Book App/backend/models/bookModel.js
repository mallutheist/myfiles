import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        publishYear: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export const Book = new mongoose.model('bookcol', BookSchema)


