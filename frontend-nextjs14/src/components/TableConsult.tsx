import "@/styles/TableConsult.css";
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
            <Td>Botones</Td>
          </Tr>
          <Tr>
            <Td>Martin Fernandez</Td>
            <Td>25-11-2024</Td>
            <Td>12:00Hs</Td>
            <Td>2</Td>
            <Td>$25000</Td>
            <Td>Botones</Td>
          </Tr>
          <Tr>
            <Td>Juan Manuel Uriarte</Td>
            <Td>22-12-2024</Td>
            <Td>15:30Hs</Td>
            <Td>2</Td>
            <Td>$10000</Td>
            <Td>Botones</Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  )
}