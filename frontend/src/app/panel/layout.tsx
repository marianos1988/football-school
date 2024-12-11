"use client";
import { Navbar } from "@/components/Navbar";
import { WarningPoster } from "@/components/WarningPoster";
import styles from "@/styleModules/generalModules.module.css";
import { PropertiesHome } from "@/types/TypesHome";
import { ErrorsPoster } from "@/types/TypesReducers";
import { useSelector } from "react-redux";
import "@/styleModules/generalModules.module.css"


export default function LayoutPanel({ children }:{children:React.ReactNode}) {

  const { blur } = useSelector((state:PropertiesHome) => state.properties );
  const { isActive } = useSelector((state:ErrorsPoster) => state.errorPoster);
  
    return(
      <>
        <div className={styles.backgroundPanel}>
          <Navbar />
          <div className={(isActive) ? (styles.containerPosterActive) : (styles.containerPosterInactive)} >
            <WarningPoster />
          </div>
          <div className={(blur) ? (styles.activeBlur) : ("")}>
            { children }
          </div>
        </div>
      </>
    )
}