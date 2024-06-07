import btnUpdate from "../assets/btn-update.png";
import "../styles/ButtonUpdate.css";

type Props = {
  handleOnClick: ()=>void
}

export const ButtonUpdate = ({ handleOnClick }: Props) => {

  

  return (
    <>
      <div className="box-btn-update">
        <img src={btnUpdate} alt="Actualizar" className="btn-update" onClick={handleOnClick}/>
        <p>Actualizar</p> 
      </div>

    </>
  )
}