/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Box, Link, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

// third-party
import { NumericFormat } from 'react-number-format';

// project import
import Dot from 'components/@extended/Dot';

function createData(timestamp, sender, signature, hash) {
  return { timestamp, sender, signature, hash };
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  // const stabilizedThis = array.map((el, index) => [el, index]);
  // stabilizedThis.sort((a, b) => {
  //   const order = comparator(a[0], b[0]);
  //   if (order !== 0) {
  //     return order;
  //   }
  //   return a[1] - b[1];
  // });
  // return stabilizedThis.map((el) => el[0]);
}

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
  {
    id: 'sender',
    align: 'left',
    disablePadding: false,
    label: 'Patient Public Key'
  },
  {
    id: 'hospital',
    align: 'left',
    disablePadding: true,
    label: 'Hospital'
  },
  {
    id: 'doctor-in-charge',
    align: 'left',
    disablePadding: false,
    label: 'Doctor'
  },
  {
    id: 'treatment',
    align: 'left',
    disablePadding: false,
    label: 'Treatment'
  },
  {
    id: 'diagnosis',
    align: 'left',
    disablePadding: false,
    label: 'Diagnosis'
  }
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead({ order, orderBy }) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

OrderTableHead.propTypes = {
  order: PropTypes.string,
  orderBy: PropTypes.string
};

// ==============================|| ORDER TABLE - STATUS ||============================== //

const OrderStatus = ({ status }) => {
  let color;
  let title;

  switch (status) {
    case 0:
      color = 'warning';
      title = 'Pending';
      break;
    case 1:
      color = 'success';
      title = 'Approved';
      break;
    case 2:
      color = 'error';
      title = 'Rejected';
      break;
    default:
      color = 'primary';
      title = 'None';
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
};

OrderStatus.propTypes = {
  status: PropTypes.number
};

// ==============================|| ORDER TABLE ||============================== //

// eslint-disable-next-line react/prop-types
export default function MedicalRecordTable({ medicalRecords }) {
  const [order] = useState('asc');
  const [orderBy] = useState('trackingNo');
  const [selected] = useState([]);
  console.log(medicalRecords);
  const isSelected = (trackingNo) => selected.indexOf(trackingNo) !== -1;

  return (
    <Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          '& td, & th': { whiteSpace: 'nowrap' }
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          sx={{
            '& .MuiTableCell-root:first-of-type': {
              pl: 2
            },
            '& .MuiTableCell-root:last-of-type': {
              pr: 3
            }
          }}
        >
          <OrderTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {medicalRecords.length > 0 &&
              // stableSort(pendingTransactions, getComparator(order, orderBy)).map((row, index) => {
              medicalRecords.map((row, index) => {
                console.log(row);
                const isItemSelected = isSelected(row.timestamp);
                const labelId = `enhanced-table-checkbox-${index}`;
                console.log(row);

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.timestamp}
                    selected={isItemSelected}
                  >
                    {/* <TableCell component="th" id={labelId} scope="row" align="left">
                      <Link color="secondary" component={RouterLink} to="">
                        {row.timestamp}
                      </Link>
                    </TableCell> */}
                    <TableCell align="left">{row.sender.slice(27, 47) + '....'}</TableCell>
                    <TableCell align="left">{row.medicalRecord.hospital}</TableCell>
                    <TableCell align="left">{row.medicalRecord.doctorInCharge} </TableCell>
                    <TableCell align="left">{row.medicalRecord.treatment} </TableCell>
                    <TableCell align="left">{row.medicalRecord.diagnosis} </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
