import React from "react";
import { Box, Paper, Typography } from '@mui/material';
import RecipeGridPage from '../recipe-grid-page/recipe-grid-page';
import '../style.scss'



const Amerika = () => (
    <Box>
    <Paper sx={{pt: 15, backgroundColor: "#A3D2CA"}}>
        <Typography sx={{ 
            fontWeight: "bold", 
            fontSize: "30px",
            fontFamily: "Josefin Sans",
            textAlign: "center",
            mb: "10px" 
            }}> Amerikos virtuvė</Typography>
        <Typography sx={{ 
            fontFamily: "Josefin Sans",
            fontSize: "17px",
            ml: "255px", 
            width: "760px", 
            textAlign: "justify",
            mb: "20px" 
            }}>Tai viena iš vakarietiškos užjūrio virtuvės, kurios tradicijos paplitusios Jungtinėse 
            Amerikos Valstijose bei jos kaimyninėse šalyse. Šiaurės Amerika garsi savo kulinarijos paveldu, 
            amerikietiškai maistas gaminamas beribiuose šiuo žemyno plotuose, besidriekiančiuose nuo Aliaskos 
            iki pat Meksikos ribų. Šios virtuvės maisto gaminimo būdui susiformuoti padėjo valgių paruošimai, 
            kuriuos naudojo pirmieji emigrantai iš Europos. Tais laikais atvykėliai jau naudojo keptuves bei 
            puodus, daugelis amerikietiškų patiekalų troškinami arba kepami iki šiol.</Typography>
           
            
        <RecipeGridPage/>
       
         
    </Paper>
    </Box>
);

export default Amerika;


 
            