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
    minWidth: 300,
  },
});



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
                        {isNaN(item)? item: item.toLocaleString()}
                    </TableCell>
                ))}
            </TableRow>
          ))}
          {includeTotals &&
            <TableRow>
            {TotalRow.map((item, i) => (
                <TableCell key={i} align={'left'} className='totalCell'>
                    {item.toLocaleString()}
                </TableCell>
            ))}
          </TableRow>
        }
        </TableBody>
      </Table>
    </TableContainer>
  );
}