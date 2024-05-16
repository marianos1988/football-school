import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,

  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



function createData(
  nameClient: string,
  phone: string,
  date: string,
  time: string,
  cash: number,
) {
  return { nameClient, phone, date, time, cash };
}

const rows = [
  createData('Ramiro', "1512341234", "15-07-2024", "13:30", 15000),
  createData('Santiago', "1545458865", "30-07-2024", "17:00", 25000),
  createData('Lucas', "1543216789", "16-08-2024", "13:30", 15000),
  createData('Marcos', "1512341234", "05-09-2024", "16:30", 10000),
  createData('Julian', "1574352043", "10-08-2024", "12:30", 10000),
];

export default function List() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Cliente</StyledTableCell>
            <StyledTableCell align="right">Fecha</StyledTableCell>
            <StyledTableCell align="right">Hora</StyledTableCell>
            <StyledTableCell align="right">Seña</StyledTableCell>
            <StyledTableCell align="right">Acciones</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.nameClient}>
              <StyledTableCell component="th" scope="row">
                {row.nameClient}
              </StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.time}</StyledTableCell>
              <StyledTableCell align="right">${row.cash}</StyledTableCell>
              <StyledTableCell align="right">Iconos</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
