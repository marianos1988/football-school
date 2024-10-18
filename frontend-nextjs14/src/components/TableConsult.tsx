import "@/styles/TableConsult.css";
import btnEdit from "../../public/btns/btn-edit.png";
import btnDelete from "../../public/btns/btn-delete.png";
import btnPay from "../../public/btns/btn-pay.png";
import Image from "next/image";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'

type Props = {}

export const TableConsult = (props: Props) => {
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
          <Tr>
            <Td>Nahuel Gonzalez</Td>
            <Td>16-10-2024</Td>
            <Td>17:00Hs</Td>
            <Td>1</Td>
            <Td>$20000</Td>
            <Td>
              <div className="box-buttons">
                <Image src={btnPay} alt="Pagar"  width={30} height={30}></Image>
                <Image src={btnEdit} alt="Editar" width={30} height={30}></Image>
                <Image src={btnDelete} alt="Eliminar"width={30} height={30}></Image>
              </div>
            </Td>
          </Tr> 
          <Tr>
            <Td>Martin Fernandez</Td>
            <Td>25-11-2024</Td>
            <Td>12:00Hs</Td>
            <Td>2</Td>
            <Td>$25000</Td>
            <Td>
                <div className="box-buttons">
                <Image src={btnPay} alt="Pagar"  width={30} height={30}></Image>
                <Image src={btnEdit} alt="Editar" width={30} height={30}></Image>
                <Image src={btnDelete} alt="Eliminar"width={30} height={30}></Image>
              </div>
            </Td>
          </Tr>
          <Tr>
            <Td>Juan Manuel Uriarte</Td>
            <Td>22-12-2024</Td>
            <Td>15:30Hs</Td>
            <Td>2</Td>
            <Td>$10000</Td>
            <Td>
                <div className="box-buttons">
                  <Image src={btnPay} alt="Pagar"  width={30} height={30}></Image>
                  <Image src={btnEdit} alt="Editar" width={30} height={30}></Image>
                  <Image src={btnDelete} alt="Eliminar"width={30} height={30}></Image>
                </div>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  )
}