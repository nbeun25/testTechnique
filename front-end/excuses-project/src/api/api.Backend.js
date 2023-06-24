import axios from "axios";

/**
 * Instance axios to the BACKEND
 */
const apiBackEnd = axios.create({
  baseURL: "http://localhost:3001",
});
export default apiBackEnd;
