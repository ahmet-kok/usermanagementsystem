import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";


const uri = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.zjjevax.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

export async function POST(request, { params }) {
    const data = params;
    const client = await MongoClient.connect(uri);
    const db = client.db();
    const userCollection = db.collection(process.env.mongodb_collection);
    const { searchParams } = request.nextUrl;
  const name = searchParams.get("name");


    const result = await userCollection.insertOne(data);
    client.close();
    res.status(201).json({ message: "user inserted!" });
    return NextResponse.json(
      { message: "User inserted", result },
      { status: 201 }
    );
}

export async function GET(request, { params }) {
    const client = await MongoClient.connect(uri);
    const db = client.db();
    const userCollection = db.collection(process.env.mongodb_collection);
    const result = await userCollection.find().toArray();
    client.close();
    return NextResponse.json(
      { message: "User found", result },
      { status: 201 }
    );
}