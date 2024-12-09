"use client"
import "@/styles/Home.css";
import { useUtils } from "@/hooks/useUtils";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Home() {

  const route = useRouter();
  const { checkLogin } = useUtils();

  const checkLoginPage = async () =>{

    const token = await fetch("http://localhost:3000/protected/",{
      credentials: "include"
    })
    console.log(token)
    const validation = await checkLogin();

    if(!validation) {
      route.push("/auth/login");
    }
  }

  useEffect(()=>{
    checkLoginPage();
  })

  return(
    <>
      <div className="container-home">
        <h1>Bienvenido Panel ACO</h1>
      </div>
    </>
  )
}