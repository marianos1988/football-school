import btnUpdate from "../assets/btn-update.gif";
import "../styles/ButtonUpdate.css";

export const ButtonUpdate = () => {


  return (
    <>
      <div className="box-btn-update">
        <img src={btnUpdate} alt="Actualizar" className="btn-update"/>
        <p>Actualizar</p>
      </div>

    </>
  )
}