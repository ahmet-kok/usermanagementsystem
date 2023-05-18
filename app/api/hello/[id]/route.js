import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const id = params.id;
  const { searchParams } = request.nextUrl;
  const name = searchParams.get("name");

  return NextResponse.json(
    { message: "Hello World!", id, name },
    { status: 201 },
    { headers: { "x-custom-header": "hello" } }
  );
}
