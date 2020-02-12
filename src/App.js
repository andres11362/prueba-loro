import React, { Component } from 'react';
import './App.css';
import ManageData from './components/ManageData'
import { Grid, Row } from 'react-flexbox-grid';
import Typography from '@material-ui/core/Typography';
import { AppBar, Toolbar } from '@material-ui/core';


class App extends Component {

  render(){
    return (
      <Grid>
        <Row>
          <AppBar position="static">
            <Toolbar>
              <Typography>
                Prueba Loro
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
            <ManageData></ManageData>
        </Row>
      </Grid>
    );
  }
  
}

export default App;
