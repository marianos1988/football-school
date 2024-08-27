import { parametersStadiums } from "@/panelParameters/parameters";

import { NextResponse } from "next/server";

export async function GET() {
  
  const parameters = parametersStadiums;
  return NextResponse.json(parameters);
}