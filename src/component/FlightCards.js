import React from 'react'
import {Grid, Card, CardContent, Typography} from '@material-ui/core'

const FlightCards = ({flights}) => (
    <Grid container spacing={1}>
    {
        flights.map(
            flight => (
            <Grid item md={3}>
                <Card >
                <CardContent >
                    <Typography variant="h7">
                        <p>Cidade (Saída): {flight.from_city} (id: {flight.from_id})</p>
                        <p>Cidade (Destino): {flight.to_city} (id: {flight.to_id})</p>
                        <p>Data: {flight.flight_date}</p>  
                    </Typography>
                    <Typography variant="h8" color="textSecondary" align="right">
                        identificador: {flight.flight_id}
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            )
        )
    } 
    </Grid>
)

export default FlightCards