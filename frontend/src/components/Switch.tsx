import "../styles/Switch.css";

type Props = {
  stateSwitch: (checked: boolean) => void
}

export const Switch = ({ stateSwitch }:Props) => {

  const handleOnChange = (checked:boolean)=>{
    stateSwitch(checked);

  }

  
  return (
    <>
      <span className="switch">
        <input id="switch-round" type="checkbox" onChange={(e:any) => handleOnChange(e.target.checked)}/>
        <label htmlFor="switch-round"></label>
      </span>
    </>

  )
}