import "../styles/List.css";
import btnEdit from "../assets/btn-edit.png";
import btnDelete from "../assets/btn-delete.png";
import btnPay from "../assets/btn-pay.png"

type Props = {
  rows: {
    id: number,
    idStadium: number,
    nameClient: string,
    phone: string,
    reserveDate: string,
    reserveTime: string,
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
              {
                (rows.length < 1) 
                  ? (
                    <tr>
                      <td className="name-client"></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>

                      </td>
                    </tr>
                  ) 
                : (
                    rows.map(
                      row => (
                        <tr key={row.id}>
                          <td className="name-client">{row.nameClient}</td>
                          <td>{row.phone}</td>
                          <td>{row.reserveDate}</td>
                          <td>{row.reserveTime}</td>
                          <td>{`$${row.cash}`}</td>
                          <td>
                            <img src={btnEdit} alt="Editar" />
                            <img src={btnDelete} alt="Eliminar" />
                            <img src={btnPay} alt="Pagar" />
                          </td>
                        </tr>
                      )
                    )
                  )
              }

            </tbody>
 
          </table>
        </div>

    </>
  )
}