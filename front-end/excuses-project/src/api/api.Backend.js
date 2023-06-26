import axios from "axios";

/**
 * Instance axios to the BACKEND :
 * - Récupération de l'URL de l'API
 */

const apiBackEnd = axios.create({
  baseURL: "http://localhost:8080",
});
export default apiBackEnd;
