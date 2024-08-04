import { connect, disconnect } from "mongoose";

function connectToDatabase() {
    return connect(process.env.MONGODB_URL)
        .then(() => {
            console.log('mongodb connected succesfully');
        }).catch((err) => {
            console.log(err)
        });
};

async function disconnectFromDatabase() {
    try {
        await disconnect()
    } catch (error) {
        console.log(error)
    }
}


export { connectToDatabase, disconnectFromDatabase };
