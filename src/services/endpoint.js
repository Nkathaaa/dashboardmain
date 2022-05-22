import axios from "axios";

const endpoint = axios.create({
  baseURL: "http://fundraiser.devops",
  withCredentials: true,
});

export default endpoint;
