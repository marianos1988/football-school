import "../styles/List.css"

type Props = {
  rows: {
    id: number,
    idStadium: number,
    nameClient: string,
    phone: string,
    date: string,
    time: string,
    cash: number
  }[]
}

export const List = ({ rows }: Props) => {
  return (
    <>
      <div className="grid-table-head">
        <div className="grid-item-head">Cliente</div>
        <div className="grid-item-head">Telefono</div>
        <div className="grid-item-head">Fecha</div>
        <div className="grid-item-head">Hora</div>
        <div className="grid-item-head">Seña</div>
        <div className="grid-item-head">Acciones</div>
      </div>
      <div className="grid-table-body">

      </div>
    </>
  )
}