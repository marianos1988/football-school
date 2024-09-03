"use client"
import "@/styles/Home.css";
import { useUtils } from "@/hooks/useUtils";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Home() {

  const route = useRouter();
  const { checkLoginBackend } = useUtils();

  const checkLoginPage = async () =>{

    const validation = await checkLoginBackend();

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