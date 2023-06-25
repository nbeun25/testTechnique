import axios from "axios";

/**
 * Instance axios to the BACKEND :
 * - Récupération de l'URL de l'API
 */
const apiBackEnd = axios.create({
  baseURL: "http://localhost:3001",
});
export default apiBackEnd;
