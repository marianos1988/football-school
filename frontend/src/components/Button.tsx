import "../styles/Button.css";

type Props = {
  name: string
}

export const Button = ({ name }: Props) => {
  return (
    <button className="btn-global"><span>{name}</span><i></i></button>
  )
}