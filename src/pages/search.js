import React, { useState } from 'react';
import {
  Box,
  Grid,
  Autocomplete,
  TextField,
  Button,
  Typography,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const countrys = [
  { label: 'Amerika' },
  { label: 'Anglija' },
  { label: 'Armėnija' },
  { label: 'Belgija' },
  { label: 'Brazilija' },
  { label: 'Graikija' },
  { label: 'Gruzija' },
  { label: 'Indija' },
  { label: 'Ispanija' },
  { label: 'Italija' },
  { label: 'Japonija' },
  { label: 'Kinija' },
  { label: 'Kolumbija' },
  { label: 'Kosta Rika' },
  { label: 'Lenkija' },
  { label: 'Lietuva' },
  { label: 'Meksika' },
  { label: 'Norvegija' },
  { label: 'Portugalija' },
  { label: 'Prancūzija' },
  { label: 'Tailandas' },
  { label: 'Turkija' },
  { label: 'Ukraina' },
  { label: 'Vengrija' },
];

const categorys = [
  { label: 'Pagrindinis' }, 
  { label: 'Sriuba' },
  { label: 'Salotos' }, 
  { label: 'Užkandis' }, 
  { label: 'Desertas'},
 ];

const ingredients = [ 'Actas', 'Agurkai', 'Aliejus', 'Alyvuogės', 'Aviena', 'Avokadas', 'Bananai', 'Bazilikai',
'Braškės', 'Bulvės', 'Cinamonas', 'Citrina', 'Cukrus', 'Česnakas', 'Čili pipirai', 'Druska', 'Figos', 'Garstyčios', 
'Grietinėlė', 'Grybai', 'Jautiena', 'Kakava', 'Kalendros', 'Kiaušiniai', 'Kokosas', 'Krapai', 'Krevetės', 
'Kukurūzai', 'Lašiša', 'Medus', 'Midijos', 'Mielės', 'Migdolai', 'Miltai', 'Morkos', 'Muskato riešutas', 
'Obuoliai', 'Paprika', 'Petražolės', 'Pienas', 'Pipirai', 'Pomidorai', 'Razinos', 'Ryžiai', 'Rozmarinas', 
'Sūris', 'Svogūnai', 'Šokoladas', 'Šparagai', 'Špinatai', 'Tunas', 'Varškė', 'Vanilinis cukrus', 'Vynas' ];


const SearchPage = () => {
 const [country, setCountry] = useState('');
 const [category, setCategory] = useState('');
 const [ingredient, setIngredient] = useState(null);

const handleCountryChange =(_, {label: country}) => {
  setCountry(country);
};
const handleCategoryChange =(_, {label: category}) => {
  setCategory(category);
};


const SearchPageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: `calc(100vh - ${theme.mixins.toolbar[theme.breakpoints.up('sm')].minHeight}px)`,
}));

const navigate = useNavigate();

// const formatFormData = () => {
//   const [country, category, ingredients] = recipe;

const handleSubmit = (grid) => {
  let to;
  switch (grid) {
case 'grid':
  to = '/recipe-grid';
  break;
  }
  // const data = formatFormData();
  //   navigate(to, { state: data });
};

  return (
    <SearchPageContainer>
      <Paper sx={{ 
        width: 400, 
        p: 3, 
        mt: 10, 
        backgroundColor: "#A3D2CA",
        border: "1px solid black",
        borderRadius: 5
        }} elevation={4}>
        <Typography align="center" sx={{ mb: 3 }} component="h2" variant="h4" color="#132C33">Ieškoti receptų</Typography>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Autocomplete
              id="country"
              disablePortal
              options={countrys}
              onChange={handleCountryChange}
              renderInput={(props) => <TextField {...props} label="Šalis" name="country" />}
            />
          </Grid>
          <Grid item sm={12}>
            <Autocomplete
              id="category"
              fullWidth
              options={categorys}
              onChange={handleCategoryChange}
              renderInput={(props) => (
                <TextField
                  {...props}
                  label="Kategorija"
                  name="Kategorija"
                />
              )}
            />
          </Grid>

          <Grid item sm={12}>
            <Autocomplete
              id="ingredients"
              fullWidth
              options={ingredients}
              onChange={(_, selectedIngredient) => setIngredient(selectedIngredient)}
              renderInput={(props) => (
              <TextField 
              {...props} 
              label="Ingredientai" 
              name="Ingredientai" />
              )}
            />
          </Grid> 
        </Grid>
        
        <Box sx={{ display: 'flex', jsutifyContent: 'center', gap: 2 }}>
          <Button 
          style={{
            backgroundColor: "#132C33",
            marginLeft: "85px",
            marginTop: "30px",
          }}
            variant="contained" onClick={() => handleSubmit('grid')}>Rodyti receptus</Button>
        </Box>
      </Paper>
    </SearchPageContainer>

  );
};

export default SearchPage;