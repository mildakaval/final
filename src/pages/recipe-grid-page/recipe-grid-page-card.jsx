import React, { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RecipeGridPageCard = ({ id, category, title, country, ingredients, instructions }) => {
    const navigate = useNavigate();
  
    const navigateToRecipe = useCallback(() => {
      navigate(`/recipe/${id}`);
    }, [id]);
  
    return (
      <Box sx={{ border: "2px solid black" }}>
        <Box>
          <Box onClick={navigateToRecipe}>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
            <Typography>Šalis: {country}</Typography>
            <Typography>Kategorija: {category}</Typography>
            <Typography>Ingredientai: {ingredients}</Typography>
            <Typography>Paruošimas: {instructions}</Typography>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default RecipeGridPageCard;