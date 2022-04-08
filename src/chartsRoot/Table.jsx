import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});



export default function MyTable({rows, columns, align, caption, includeTotals}) {
  const classes = useStyles();

  columns = columns || [] // List of table headers
  rows = rows || [[]] // List of List containing table rows each row in a list
  align = 'center' // Alignment of table cells and columns
  caption = caption || '' // Table caption shown belwo the table to the left
  const [TotalRow, setTotalRow] = useState([]);
  
 
  useEffect(() => {
    let total = []

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
  }, [rows])



 
  return (
    <Grid container spacing={1} >

      <Grid item xs={12}>
        <b>{caption}</b>
      </Grid>
      <Grid item xs={12}>
      <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="caption table">
        <TableHead>
          <TableRow>{columns.map((column) => (<TableCell key={column} align={'center'}><b>{column}</b></TableCell>
            ))}
            </TableRow>
            </TableHead>
            <TableBody>
          {rows.map((row) => (
            <TableRow key={row}>
                {row.map((item) => (
                    <TableCell key={item} align={'center'}>{isNaN(item)? item: item.toLocaleString()}</TableCell>
                ))}
            </TableRow>
          ))}
          {
          includeTotals?
            (<TableRow>
            {TotalRow.map((item, i) => (
                <TableCell key={i} align={'center'} className='totalCell'>{item.toLocaleString()}</TableCell>
            ))}
          </TableRow>): null
        }
        </TableBody>
      </Table>
    </TableContainer>
      </Grid>
    
    </Grid>
  );
}