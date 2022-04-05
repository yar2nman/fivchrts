import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    // minWidth: 300,
  },
});

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function MyTable({rows, columns, align, caption, includeTotals}) {
  const classes = useStyles();

  columns = columns || [] // List of table headers
  rows = rows || [[]] // List of List containing table rows each row in a list
  align = align || 'left' // Alignment of table cells and columns
  caption = caption || '' // Table caption shown belwo the table to the left
  const [TotalRow, setTotalRow] = useState([]);
  
 
  useEffect(() => {
    let total  = []

    rows.forEach(row => {
      if (total.length === 0) {
        total = row
      } else {
        total = total.map((value, index) => {
          if (isNaN(value)) {
            return 'Total'
          }else {
          return value + row[index]
          }
        })     
      }  
      console.log(total, 'total =================>')

      setTotalRow(total)
    })
  }, [])



 
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="caption table">
      { caption && <caption>{caption}</caption>}
        <TableHead>
          <TableRow>
            {columns.map((column) => (
                <TableCell key={column} align={'center'}>
                    <i><b>{column}</b></i>
                </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row}>
                {row.map((item) => (
                    <TableCell key={item} align={'left'}>
                        {item}
                    </TableCell>
                ))}
            </TableRow>
          ))}
          {includeTotals &&
            <TableRow>
            {TotalRow.map((item, i) => (
                <TableCell key={i} align={'left'} className='totalCell'>
                    {item}
                </TableCell>
            ))}
          </TableRow>
        }
        </TableBody>
      </Table>
    </TableContainer>
  );
}