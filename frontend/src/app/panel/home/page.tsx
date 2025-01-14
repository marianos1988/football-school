"use client"
import "@/styles/Home.css";
import { useUtils } from "@/hooks/useUtils";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Home() {


  const { checkLogin } = useUtils();
  const route = useRouter();

  
  const checkLoginPage = async () =>{
  
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