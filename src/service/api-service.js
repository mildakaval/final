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

const addUser = async (userData) => {
  const response = await annonymousInstance.post(`/user`, userData);

  return response.data;
}

const APIService = {
  addUser
};

export default APIService;
