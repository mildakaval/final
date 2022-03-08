import axios from "axios";

const annonymousInstance = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  mode: "no-cors",
});

const fetchRecipies = async () => {
  const response = await annonymousInstance.get("/recipies");
  return response.data;
};

const fetchRecipe = async (id) => {
  const response = await annonymousInstance.get(`/recipies/${id}`);

  return response.data;

}

const fetchAllRecipies = async () => {
  const [recipies] = await Promise.all([
    fetchRecipies()
  ]);

  const formatedRecipies = recipies.map(
    ({ title, props, category, ...rest }) => {
      const recipe = {
        ...rest,
        title,
        category,
      };

      return recipe;
    }
  );

  return formatedRecipies;
};

const fetchFormatedRecipe = async (id) => {
  const [recipe] = await Promise.all([
    fetchRecipe(id)
  ]);

  const formattedRecipe = {
    ...recipe,
  }

  return formattedRecipe;
}

const APIService = {
  fetchRecipies,
  fetchAllRecipies,
  fetchRecipe,
  fetchFormatedRecipe
};

export default APIService;