import styles from "@/styleModules/generalModules.module.css";

export default function LayoutAdmin({ children }:{children:React.ReactNode}) {
    return(
      <>
        <div className={styles.backgroundPanel}>
          { children }
        </div>
      </>
    )
}