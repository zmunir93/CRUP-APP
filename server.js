const express = require('express');
const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');

const app=express();

async function main() {

    const uri = "mongodb+srv://zmunir93:Chicken12@crud-app.0e40d.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
        await client.connect();

        await listDatabases(client);
    } catch(e) {
        console.error(e);
    }

    finally {
        await client.close();
    }
}
main().catch(console.error);

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(`- ${db.name}`));
}


// const url = "mongodb+srv://zmunir93:Chicken12@crud-app.0e40d.mongodb.net/?retryWrites=true&w=majority"

// mongoose.connect(url, {useNewUrlParser: true});
// const con = mongoose.connection
// app.use(express.json());
// try{
//     con.on('open', () => {
//         console.log('connected');
//     })
// }catch(error)
// {
//     console.log(`Error: ${error}`);
// }

app.get("/", function(req, res) {
    res.send("express is working")
})

const port = 3000
app.listen(port, () => {
    console.log('Server started on localhost:3000');
})