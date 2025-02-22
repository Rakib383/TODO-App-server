const express = require("express");

var cors = require("cors");
require("dotenv").config();
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.25zkwku.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const userCollection = client.db("TaskMinder").collection("users");
    const taskCollection = client.db("TaskMinder").collection("tasks");

    //  user api

    app.post("/users", async (req, res) => {
      const userInfo = req.body;
      const existingUser = await userCollection.findOne({
        email: userInfo.email,
      });
      if (existingUser) {
        return res.send({ message: "user already exist" });
      }
      const result = await userCollection.insertOne(userInfo);
      res.send(result);
    });

    // task api

    app.get("/tasks",async (req,res) => {
        const uid = req.query.uid
        // console.log(uid);
        const result = await taskCollection.find({userID:uid}).toArray()
        // console.log(result);
        res.send(result)
    })
    app.post("/tasks", async (req, res) => {
        const task = req.body;
        
        const result = await taskCollection.insertOne(task);
        res.send(result);
      });

    app.patch("/tasks/:id",async (req,res) => {
        const id = Number(req.params.id)
      
        const updatedTask = req.body
    
        const result = await taskCollection.updateOne({_id:id},{
            $set:updatedTask
        })
        res.send(result)
    })

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("todo app is working");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
