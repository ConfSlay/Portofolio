import axios from "axios";
const http = axios.create({
  baseURL: "http://localhost:3006/api",
  headers: {"Content-type": "application/json"}
});

class ContactDataService {

  Contact(data) {
    return http.post("/Contact",data);
  }

}
export default new ContactDataService();