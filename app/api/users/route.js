import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";


const uri = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.zjjevax.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

export async function GET(request, { params }) {
    console.log(process.env.mongodb_collection);
    console.log(uri);
    const client = await MongoClient.connect(uri);
    const db = client.db();
    const userCollection = db.collection(process.env.mongodb_collection);
    console.log(userCollection);
    const result = await userCollection.find().toArray();
    client.close();
    return NextResponse.json(
      { message: "User found", result },
      { status: 201 }
    );
}