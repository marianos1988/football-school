import style from "@/styleModules/generalModules.module.css";

export default function LayoutAuth({ children }: { children: React.ReactNode}) {
  return(
    <>
      <div className={style.backgroundPanel}>
        {children}
      </div>
    </>
  )
}