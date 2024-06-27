import "../styles/PosterConfirmation.css";
import { Button } from "./Button";

type Props = {
  message: string,
  action:  ()=> void
}

export const PosterConfirmation = ({message, action}: Props) => {
  return (
    <div className="container-poster">
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
              handleFunction={()=>{}}
            />
          </div>
        </div>
      </div>
    </div>
  )
}