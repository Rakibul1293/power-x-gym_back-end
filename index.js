const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());


const uri = process.env.DB_PATH;

let client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


// app.get('/appointments', (req, res) => {
//     // client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//     client.connect(err => {
//         const collection = client.db("doctorPortal").collection("docAppointList");
//         collection.find().toArray((err, documents) => {
//             if (err) {
//                 console.log(err);
//                 res.status(500).send({ message: err });
//             }
//             else {
//                 res.send(documents);
//             }
//         });
//         // client.close();
//     });
// });

// app.get('/appointedPeople', (req, res) => {
//     // client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//     client.connect(err => {
//         const collection = client.db("doctorPortal").collection("appointedPeople");
//         collection.find().toArray((err, documents) => {
//             if (err) {
//                 console.log(err);
//                 res.status(500).send({ message: err });
//             }
//             else {
//                 res.send(documents);
//             }
//         });
//         // client.close();
//     });
// });

// app.get('/appointedPeople/:key', (req, res) => {
//     const key = req.params.key;
//     console.log(key);

//     // client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//     client.connect(err => {
//         const collection = client.db("doctorPortal").collection("appointedPeople");
//         collection.find({ joinAppointDate: key }).toArray((err, documents) => {
//             if (err) {
//                 console.log(err);
//                 res.status(500).send({ message: err });
//             }
//             else {
//                 console.log(documents);
//                 res.send(documents);
//             }
//         });
//         // client.close();
//     });
// });



app.get('/userDetails', (req, res) => {
    // client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("powerXGgym").collection("userDetails");
        collection.find().toArray((err, documents) => {
            if (err) {
                console.log(err);
                res.status(500).send({ message: err });
            }
            else {
                res.send(documents);
            }
        });
        // client.close();
    });
});



//delete
//update
// post
app.post('/userDetails', (req, res) => {
    const userDetails = req.body;
    // client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("powerXGgym").collection("userDetails");
        collection.insertOne(userDetails, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send({ message: err });
            }
            else {
                res.send(result.ops[0]);
            }
        });
        // client.close();
    });
});






// app.post('/prescriptionAdded/:key', (req, res) => {
//     const prescriptionAdded = req.body;
//     console.log(prescriptionAdded);
//     const key = req.params.key;
//     console.log(key);
//     // client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//     client.connect(err => {
//         const collection = client.db("doctorPortal").collection("appointedPeople");
//         collection.updateOne({ "_id": ObjectID(key) }, { "$set": prescriptionAdded }, { upsert: true }, (err, result) => {
//             if (err) {
//                 console.log(err);
//                 res.status(500).send({ message: err });
//             }
//             else {
//                 // console.log(result);
//                 res.send(result);
//             }
//         });
//         // client.close();
//     });
// });









// app.post('/getfoodItemsByKey', (req, res) => {
//     const key = req.params.key;
//     const productKeys = req.body;
//     console.log(productKeys);

//     client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//     client.connect(err => {
//         // const collection = client.db("onlineFoodStore").collection("foodType");
//         collection.find({ key: { $in: productKeys } }).toArray((err, documents) => {
//             if (err) {
//                 console.log(err);
//                 res.status(500).send({ message: err });
//             }
//             else {
//                 res.send(documents);
//             }
//         });
//         // client.close();
//     });
// });

// app.post('/placeOrder', (req, res) => {
//     const orderDetails = req.body;
//     orderDetails.orderTime = new Date();
//     console.log(orderDetails);
//     // client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//     client.connect(err => {
//         const collection = client.db("onlineFoodStore").collection("orders");
//         collection.insertOne(orderDetails, (err, result) => {
//             if (err) {
//                 console.log(err);
//                 res.status(500).send({ message: err });
//             }
//             else {
//                 res.send(result.ops[0]);
//             }
//         });
//         // client.close();
//     });
// });

const port = process.env.PORT || 4200;
app.listen(port, () => console.log('Listenting to port 4200'));