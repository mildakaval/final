import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import RecipeGridPageGrid from "./recipe-grid-page-grid";
import RecipeGridPageCard from "./recipe-grid-page-card";
import APIService from "../../services/api-service";

const RecipeGridPage = () => {
  const [recipies, setRecipies] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedRecipies = await APIService.fetchAllRecipies();
      setRecipies(fetchedRecipies);
    })();
  }, []);

  return (
    <Box>
      <RecipeGridPageGrid>
        {recipies.map((recipe) => (
          <RecipeGridPageCard
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            country={recipe.country}
            category={recipe.category}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
            img={recipe.img}
          ></RecipeGridPageCard>
        ))}
      </RecipeGridPageGrid>
    </Box>
  );
        };

export default RecipeGridPage;
