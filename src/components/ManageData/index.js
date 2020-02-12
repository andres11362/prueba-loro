import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Col } from 'react-flexbox-grid';
import datos from './../../datos.json';
import ListarSucursales from './ListarSucursales'
import './styles.css'


class ManageData extends Component{
    

    constructor(props){
        super(props)
        this.state = { sucursales: null }
    }


    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState){
    }

    
    cargarSucursales(sucursal){
        this.setState({ sucursales: sucursal })
    }

    renderTiendas(){
     
        return datos.tienda.map( data => (  
        <Col key= {data.id}>
            <Card className="root" key= {data.id} >
                <CardActionArea>
                    <CardMedia
                    className="media"
                    image={ data.logo }
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            { data.nombre }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {data.descripcion}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Total: {data.total}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={ () => this.cargarSucursales(data.sucursal) }>
                        Mostrar Sucursales
                    </Button>
                </CardActions>
            </Card>
        </Col>));
    }

    render(){
        const { sucursales } = this.state
        return (
            <div>
               { this.renderTiendas() }
               {sucursales ? <ListarSucursales sucursal={ sucursales }></ListarSucursales> : <div>No hay nada</div> }
            </div>
        )
    }


}



export default ManageData;