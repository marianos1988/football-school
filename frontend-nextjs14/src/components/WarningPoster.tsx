import style from "@/styleModules/warningPoster.module.css";

export const WarningPoster = () => {

  return (
    <>
      <div className={style.poster}>
        <h2 className={style.tittle}>Error</h2>
        <h3 className="sub-tittle">No se peude conectar al servidor</h3>
      </div>
    </>
  )
}