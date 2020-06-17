import React, {Component, Text} from 'react'
import axios from 'axios'
import './App.css'
import PlaceCards from './component/PlaceCards'
import FlightCards from './component/FlightCards'

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
      <div>
        <grid> 
        {
          <div className="columns">
            <p>Cidades</p>
            <PlaceCards places={this.state.places}/>
          </div>
        } 
        </grid>
        <grid> 
        {
          <div className="columns">
            <p>Voos</p>
            <FlightCards flights={this.state.flights}/>
          </div>
        } 
        </grid>
      </div>
    );
  }

}

export default App;