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
    <>  <div className="container-list">
          <table>
            <thead>
              <tr className="thead-list">
                <th className="row">Cliente</th>
                <th>Telefono</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Seña</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="name-client">Martin asfdsafsdafsdfdsaf</td>
                <td>1144657890</td>
                <td>16-06-2024</td>
                <td>18:00hs</td>
                <td>$15000</td>
                <td>Botones</td>

              </tr>
            </tbody>

          </table>
        </div>

    </>
  )
}