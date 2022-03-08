import React, { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RecipeGridPageCard = ({ id, category, title, country, ingredients, instructions }) => {
    const navigate = useNavigate();
  
    const navigateToRecipe = useCallback(() => {
      navigate(`/recipe/${id}`);
    }, [id]);
  
    return (
      <Box sx={{ 
       border: "2px solid black", 
       width: "750px",
       ml: "265px",
       mr: "100px",
       p: "15px"}}>
        <Box>
          <Box onClick={navigateToRecipe}>
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
            <Typography sx={{ 
              fontSize: "17px", 
              fontFamily: "Josefin Sans", 
              textAlign: "justify", 
              pb:"10px" }}>Ingredientai: {ingredients}</Typography>
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