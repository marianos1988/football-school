import { parametersLogin } from "@/panelParameters/parameters";
import { NextResponse } from "next/server";

export async function GET() {

  const newLogin = {
    isLogin: false,
    id: 0,
    username: ""
  }

  parametersLogin.push(newLogin);
  parametersLogin.shift();
  
  return NextResponse.json(true)

}