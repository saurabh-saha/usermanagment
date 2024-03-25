const mongoose = require("mongoose");

const connectDb = async () => {
    try{
        console.log("Connection....")
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connected: ", connect.connection.host, connect.connection.name);
    }catch(err) {
        console.log("Database not connected", err);
        process.exit(1);
    }
}

module.exports = connectDb;