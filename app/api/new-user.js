import { MongoClient } from "mongodb";

const uri = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.zjjevax.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(uri);
    const db = client.db();

    const userCollection = db.collection(process.env.mongodb_collection);

    const result = await userCollection.insertOne(data);
    client.close();
    res.status(201).json({ message: "user inserted!" });
  }
}

export default handler;
