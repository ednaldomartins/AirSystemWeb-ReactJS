import React from 'react';
import {Grid, Card, CardContent, Typography, makeStyles} from '@material-ui/core'

const PlaceCards = ({places}) => (
    <Grid container spacing={1}>
    {
        places.map(
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

export default PlaceCards