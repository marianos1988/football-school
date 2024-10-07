"use client";
import { Navbar } from "@/components/Navbar";
import { WarningPoster } from "@/components/WarningPoster";
import styles from "@/styleModules/generalModules.module.css";
import { PropertiesHome } from "@/types/TypesHome";
import { useSelector } from "react-redux";


export default function LayoutPanel({ children }:{children:React.ReactNode}) {

  const { blur } = useSelector((state:PropertiesHome) => state.properties );
  
    return(
      <>
        <div className={styles.backgroundPanel}>
          <Navbar />
          <div className={styles.containerPoster}>
            <WarningPoster />
          </div>
          <div className={(blur) ? (styles.activeBlur) : ("")}>
            { children }
          </div>
        </div>
      </>
    )
}