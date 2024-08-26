import "@/styles/Button.css";

type Props = {
  name: string,
  handleFunction: any
}

export const Button = ({ name, handleFunction }: Props) => {
  return (
    <button onClick={handleFunction} className="btn-global"><span>{name}</span><i></i></button>
  )
}