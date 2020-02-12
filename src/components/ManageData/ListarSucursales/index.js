import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import ListarProductos from './../ListarProductos'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const ListarSucursales =  ( { sucursal } ) => {
    const classes = useStyles();

  

    const productoSucursal = productos =>{
        console.log(productos)
    }

    return ( 
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell>Lugar</TableCell>
                    <TableCell>Accion</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sucursal.map(row => (
                    <TableRow key={row.ubicacion}>
                        <TableCell component="th" scope="row">
                        {row.ubicacion}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            <Button variant="contained" color="secondary" onClick={  () => productoSucursal(row.productos) }>Mirar Productos</Button>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
            {productoSucursal() ? <ListarProductos productos= { productoSucursal() }></ListarProductos> : <div>Aqui se deberian mostrar los productos</div> }
        </div>
   )
}

export default ListarSucursales;