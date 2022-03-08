import React from "react";
import { Box, Paper, Typography } from '@mui/material';
import RecipeGridPage from '../recipe-grid-page/recipe-grid-page';
import '../style.scss'

const Amerika = () => (
    <Box>
    <Paper sx={{pt: 30}}>
        <Typography></Typography>
        <RecipeGridPage/>
    </Paper>
    </Box>
);

export default Amerika;


{/* <div className="text">
            //     <h1>Amerikos virtuvė</h1>
            //     <p> Tai viena iš vakarietiškos užjūrio virtuvės, kurios tradicijos paplitusios Jungtinėse Amerikos Valstijose bei
            //         jos kaimyninėse šalyse. Šiaurės Amerika garsi savo kulinarijos paveldu, amerikietiškai maistas gaminamas
            //         beribiuose šiuo žemyno plotuose, besidriekiančiuose nuo Aliaskos iki pat Meksikos ribų. Šios virtuvės maisto
            //         gaminimo būdui susiformuoti padėjo valgių paruošimai, kuriuos naudojo pirmieji emigrantai iš Europos. Tais
            //         laikais atvykėliai jau naudojo keptuves bei puodus, daugelis amerikietiškų patiekalų troškinami arba kepami iki
            //         šiol.</p>
            // </div> */}