import axios from "axios";
const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {"Content-type": "application/json"}
});

class ContactDataService {

  Contact(data) {
    return http.post("/api/Contact",data);
  }

}
export default new ContactDataService();