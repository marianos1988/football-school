import { Navbar } from "@/components/Navbar";
import styles from "@/styleModules/generalModules.module.css";

export default function LayoutAdmin({ children }:{children:React.ReactNode}) {
    return(
      <>
        <div className={styles.backgroundPanel}>
          <Navbar />
          { children }
        </div>
      </>
    )
}