require('dotenv').config()
const { MongoClient } = require('mongodb');
const express = require('express');
const cors = require('cors');

// Express setup
const app = express();
const port = 3000;

const mongoURI = process.env.API_URL; // Your MongoDB connection string
const client = new MongoClient(mongoURI);

// Middleware to parse JSON requests
app.use(express.json());

// Use the cors middleware with appropriate options
app.use(
  cors({
    origin: 'https://bug-free-robot-gpx597wv5wjh9rrw-5173.app.github.dev:5173', // Replace with your frontend's domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  })
);

// Fetch data from MongoDB
app.post('/getdata/:type', async (req, res) => {
  const db = (req.params.type === 'admin') ? process.env.ADMIN_DB : process.env.USER_DB;
  const coll = (req.params.type === 'admin') ? process.env.ADMIN_DB_COLLECTION : req.body.username;

  try {
    const connection = client.db(db).collection(coll);
    const data = await connection.find(req.body).toArray();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: `An error occurred while fetching data.${error}` });
  }
});



// Insert data into MongoDB
app.post('/insertdata/:type', async (req, res) => {
  const db = (req.params.type === 'admin') ? process.env.ADMIN_DB : process.env.USER_DB;
  const coll = (req.params.type === 'admin') ? process.env.ADMIN_DB_COLLECTION : req.body.username;

  
  try {
    const connection = client.db(db).collection(coll);
    const result = await connection.insertOne(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.json({ error: `An error occurred while inserting data.${error}` });
  }
});


// Delete data from MongoDB
app.delete('/deletedata/:type', async (req, res) => {
  const db = (req.params.type === 'admin') ? process.env.ADMIN_DB : process.env.USER_DB;
  const coll = (req.params.type === 'admin') ? process.env.ADMIN_DB_COLLECTION : req.body.username;

  try {
    const connection = client.db(db).collection(coll);
    const result = await connection.deleteOne(req.body);
    if (result.deletedCount === 0) {
      res.status(404).json({ error: 'No data deleted.' });
    } else {
      res.status(204).send("Data Deletion successful!");
    }
  } catch (error) {
    console.error(`Error deleting data: ${error}`);
    res.status(500).json({ error: 'An error occurred while deleting data.' });
  }
});

// Update data in MongoDB
app.put('/updatedata/:type', async (req, res) => {
  const db = (req.params.type === 'admin') ? process.env.ADMIN_DB : process.env.USER_DB;
  const coll = (req.params.type === 'admin') ? process.env.ADMIN_DB_COLLECTION : req.body.username;

  try {
    const connection = client.db(db).collection(coll);
    const id = req.body.id;
    const updatedData = req.body;

    const result = await connection.updateOne({ _id: id }, { $set: updatedData });
    if (result.modifiedCount === 0) {
      res.status(404).json({ error: 'No data updated.' });
    } else {
      res.status(200).json({ message: 'Data updated successfully.' });
    }
  } catch (error) {
    console.error(`Error updating data: ${error}`);
    res.status(500).json({ error: 'An error occurred while updating data.' });
  }
});


// Start the Express server &connect to mongodb

app.listen(port, async () => {
  try {
    console.log(`Mongo Backend server is running on port ${port}`);
    await client.connect();
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error}`);
  }
});



















