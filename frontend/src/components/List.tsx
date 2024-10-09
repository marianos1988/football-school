import "../styles/List.css";
import btnEdit from "../assets/btn-edit.png";
import btnDelete from "../assets/btn-delete.png";
import btnPay from "../assets/btn-pay.png"
import { useList } from "../hooks/useList";
import { FormReservationEdit } from "../types/TypesFormReservation";
//Lista Viejaaaa

 

type Props = {
  rows: {
    id: number,
    idStadium: number,
    nameClient: string,
    phone: string,
    date: string,
    time: string,
    cash: number
  }[],
  handleChangeSubSection: (subSection:string)=> void,
  handleSetEditRow: (row: FormReservationEdit) => void
}

type Row = {

    id: number,
    idStadium: number,
    nameClient: string,
    phone: string,
    date: string,
    time: string,
    cash: number

}

export const List = ({ rows, handleChangeSubSection,handleSetEditRow }: Props) => {

  const { selectReserveRow } = useList();

  const handleEdit = async (row:Row)=> {

   await selectReserveRow(row.id).then(
    (ele) => handleSetEditRow(ele)
   )
   

  }

  return ( 
    <>  
    <div className="container-list">
          <table>
            <thead>
              <tr className="thead-list">
                <th className="row">Cliente</th>
                <th>Telefono</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Seña</th>
                <th>N°<br />Cancha</th>
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
                      <td></td>
                      <td></td>
                    </tr>
                  ) 
                : (
                    rows.map(
                      row => (
                        <tr key={row.id}>
                          <td className="name-client">{row.nameClient}</td>
                          <td>{row.phone}</td>
                          <td>{row.date}</td>
                          <td>{`${row.time}Hs`}</td>
                          <td>{`$${row.cash}`}</td>
                          <td>{`${row.idStadium}`}</td>
                          <td>
                            <img src={btnEdit} alt="Editar" onClick={()=>{
                              handleChangeSubSection("editConsultStadium");
                              handleEdit(row)
                            
                            }}/>
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