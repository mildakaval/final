import React, { useCallback } from "react";
import { 
  Box, 
  Typography, 
  CardMedia,
  Grid
 } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RecipeGridPageCard = ({ id, img, category, title, country, ingredients, instructions }) => {
    const navigate = useNavigate();
  
    const navigateToRecipe = useCallback(() => {
      navigate(`/recipe/${id}`);
    }, [id]);
  
  

    return (
      <Box sx={{ 
       border: "2px solid black", 
       borderRadius: "10px",
       boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
       width: "500px",
       height: "auto",
       ml: "165px",
       mr: "-140px",
       p: "15px"}}>
        <Box>
          <Box onClick={navigateToRecipe}>
      <CardMedia
  style={{ height: "300px" }}
  component="img"
  image={img}
/>
          </Box>
          <Box>
            <Typography sx={{ 
              fontWeight: "bold", 
              fontSize: "30px", 
              fontFamily: "Josefin Sans" }}>{title}</Typography>
            <Typography sx={{ 
              fontSize: "20px", 
              fontFamily: "Josefin Sans" }}>Šalis: {country}</Typography>
            <Typography sx={{ 
              fontSize: "20px", 
              fontFamily: "Josefin Sans", 
              pb: "10px"}}>Kategorija: {category}</Typography>
            <Typography
             sx={{ 
              fontSize: "17px", 
              fontFamily: "Josefin Sans", 
              textAlign: "left",
              pb:"10px" 
              }}>Ingredientai: {ingredients}
             </Typography>
            
            <Typography sx={{ 
              fontSize: "17px", 
              fontFamily: "Josefin Sans", 
              textAlign: "justify" }}>Paruošimas: {instructions}</Typography>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default RecipeGridPageCard;