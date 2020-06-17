import React, {Component} from 'react';
import logo from './logo.svg';
import {Grid, Card, CardContent, Typography, makeStyles} from '@material-ui/core'
import axios from 'axios'
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      places: [],
      flights: []
    }
  }
  
  async componentDidMount() {
    await axios
      .get("http://localhost:3000/places", {method: "GET"})
      .then(res => {
        this.setState( { places: res.data.places } )
        console.log(res.data.places)
      })

    await axios
      .get("http://localhost:3000/flight/all", {method: "GET"})
      .then(res => {
        this.setState( { flights: res.data.flights } )
        console.log(res.data.flights)
      })
  }

  render() {
    return (
      <grid> {
        getComponentListPlace(this.state.places)
      } </grid>
    );
  }

}

const getComponentListPlace = (props) => {
  return (
    <Grid container spacing={1}>
    {
      props.map(
        place => (
          <Grid item md={3}>
            <Card >
              <CardContent >
                <Typography variant="h7">
                  <p>País: {place.country}</p>
                  <p>Estado: {place.estate}</p>
                  <p>Cidade: {place.city}</p>
                  <p>CEP: {place.zip_code}</p>  
                </Typography>
                <Typography variant="h8" color="textSecondary" align="right">
                  identificador: {place.place_id}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )
      )
    } 
    </Grid>
  )
} 

export default App;