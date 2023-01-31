import axios from "axios";

const instaceAxios = axios.create({
  baseURL: "https://mks-challenge-api-frontend.herokuapp.com/api/v1/",
  timeout: 5000,
  params: {
    page: 1,
    rows: 8,
    sortBy: "id",
    orderBy: "ASC",
  },
  headers: { "Content-Type": "application/json; charset=utf-8" },
});

export { instaceAxios };
