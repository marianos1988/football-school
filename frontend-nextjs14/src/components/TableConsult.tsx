import "@/styles/TableConsult.css";
import btnEdit from "../../public/btns/btn-edit.png";
import btnDelete from "../../public/btns/btn-delete.png";
import btnPay from "../../public/btns/btn-pay.png";
import Image from "next/image";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'

type Props = {
  listReserve: {
    idReserve: number,
    idStadium: number,
    idUser: number,
    nameClient: string,
    phone: string,
    date: string,
    time: string,
    email: string,
    cash: number
  }[]
}

export const TableConsult = ({ listReserve }: Props) => {
  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th>Cliente</Th>
            <Th>Fecha</Th>
            <Th>Hora</Th>
            <Th>Nro. Cancha</Th>
            <Th>Seña</Th>
            <Th>Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            listReserve.map(
              ((reserve, index) => (
                <Tr>
                  <Td>{reserve.nameClient}</Td>
                  <Td>{reserve.date}</Td>
                  <Td>{reserve.time}</Td>
                  <Td>1</Td>
                  <Td>{reserve.cash}</Td>
                  <Td>
                    <div className="box-buttons">
                      <Image src={btnPay} alt="Pagar"  width={30} height={30}></Image>
                      <Image src={btnEdit} alt="Editar" width={30} height={30}></Image>
                      <Image src={btnDelete} alt="Eliminar"width={30} height={30}></Image>
                    </div>
                  </Td>
                </Tr> 
              ))

          )}
        </Tbody>
      </Table>
    </>
  )
}