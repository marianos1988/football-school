import { NextResponse } from "next/server";

export async function GET() {

  try{

    const data = await fetch("http://localhost:3000");
    const validation = await data.json();

    return NextResponse.json(validation);
  } catch {

    return NextResponse.json(false);
  }
  
}