import "../styles/PosterConfirmation.css";
import { Button } from "./Button";
import { useDispatch } from "react-redux";
import { inactivePosterConfirmation, unsetBlur } from "../reducers/properties/PropertiesSlice";

type Props = {
  message: string,
  action:  ()=> void,
}

export const PosterConfirmation = ({message, action}: Props) => {
  const dispatch = useDispatch();
  return (
    <div className="container-poster post-active">
      <div className="poster">
        <h2>{message}</h2>
        <div className="box-buttons">
          <div className="btn">
            <Button
              name="Si"
              handleFunction={action}
            />
          </div>

          <div className="btn">
            <Button
              name="No"
              handleFunction={()=>{
                dispatch(inactivePosterConfirmation());
                dispatch(unsetBlur());
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}