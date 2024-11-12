import "@/styles/TableConsult.css";
import btnEdit from "../../public/btns/btn-edit.png";
import btnDelete from "../../public/btns/btn-delete.png";
import btnPay from "../../public/btns/btn-pay.png";
import Image from "next/image";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { useRouter } from "next/navigation";
import { useTableConsult } from "@/hooks/useTableConsult";

type Props = {
  listReserve: {
    idReserve: number,
    idStadium: number,
    idUser: number,
    numberStadium: number,
    nameClient: string,
    phone: string,
    date: string,
    time: string,
    email: string,
    cash: number
  }[]
}

export const TableConsult = ({ listReserve }: Props) => {
  const router = useRouter();
  const { showDataInTable } = useTableConsult();

  const showListReserve = showDataInTable(listReserve)

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
            (listReserve.length > 0) ? (

              showListReserve.map(
                ((reserve) => (
                  <Tr key={reserve.idReserve}>
                    <Td>{reserve.nameClient}</Td>
                    <Td>{reserve.date}</Td>
                    <Td>{reserve.time}</Td>
                    <Td>{reserve.numberStadium}</Td>
                    <Td>{reserve.cash}</Td>
                    <Td>
                      <div className="box-buttons">
                        <Image src={btnPay} alt="Pagar"  width={30} height={30} ></Image>
                        <Image src={btnEdit} alt="Editar" width={30} height={30} onClick={()=>{
                            router.push("/panel/stadiums/consultStadium/editReserve")
                          }}></Image>
                        <Image src={btnDelete} alt="Eliminar"width={30} height={30}></Image>
                      </div>
                    </Td>
                  </Tr> 
                ))
              )
            ) : (
              <Tr>
                <Td>-----</Td>
                <Td>-----</Td>
                <Td>-----</Td>
                <Td>-----</Td>
                <Td>-----</Td>
                <Td>
                  <div className="box-buttons">
                  -----
                  </div>
                </Td>
              </Tr> 
            )

          }
        </Tbody>
      </Table>
    </>
  )
}