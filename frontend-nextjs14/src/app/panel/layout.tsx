"use client"
import { Navbar } from "@/components/Navbar";
import styles from "@/styleModules/generalModules.module.css";
import { PropertiesHome } from "@/types/TypesHome";
import { useSelector } from "react-redux";

export default function LayoutAdmin({ children }:{children:React.ReactNode}) {

  const { blur } = useSelector((state:PropertiesHome) => state.properties );
  
    return(
      <>
        <div className={styles.backgroundPanel}>
          <Navbar />
          <div className={(blur) ? (styles.activeBlur) : ("")}>
            { children }
          </div>
        </div>
      </>
    )
}