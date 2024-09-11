import { parametersReservationStadium } from "@/panelParameters/parameters";
import { NextResponse } from "next/server";

export async function POST(Request:Request) {
    const newID = await Request.json();


    parametersReservationStadium.push(newID);
    parametersReservationStadium.shift();


     return NextResponse.json(parametersReservationStadium[0].id); 
}

export function GET() {
    return NextResponse.json(parametersReservationStadium[0])
}