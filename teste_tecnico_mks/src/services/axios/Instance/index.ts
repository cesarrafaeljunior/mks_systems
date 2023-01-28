import axios from "axios";

const instaceAxios = axios.create({
  baseURL: "https://mks-challenge-api-frontend.herokuapp.com/api/v1/",
  timeout: 5000,
  headers: { "Content-Type": "application/json; charset=utf-8" },
});

export { instaceAxios };
