import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = "mongodb+srv://ahmet:soWjip-9vehve-nemwox@ahmet.zjjevax.mongodb.net/?retryWrites=true&w=majority";


export async function GET() {
  
  const client = await MongoClient.connect(uri);
  const db = client.db("meetups");
  console.log(db);
  const meetupsCollection = db.collection("meetups");
  console.log(meetupsCollection);
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return NextResponse.json({ message: "Hello World!", meetups });
}
/* 



import { NextResponse } from "next/server";




// Create a MongoClient with a MongoClientOptions object to set the Stable API version


export async function GET() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
  return NextResponse.json(
    { message: "User found", result },
    { status: 201 }
  );
} */