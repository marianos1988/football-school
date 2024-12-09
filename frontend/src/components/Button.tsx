import "@/styles/Button.css";

type Props = {
  name: string,
  handleFunction: any,
  moving: boolean,
  nameEffect: string
}

export const Button = ({ name, handleFunction, moving, nameEffect }: Props) => {
  return (
    <button onClick={handleFunction} className={(moving) ? (`btn-global ${nameEffect}`) : (`btn-global`)}><span>{name}</span><i></i></button>
  )
}