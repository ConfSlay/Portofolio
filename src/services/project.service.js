import axios from "axios";
const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {"Content-type": "multipart/form-data"}
});

class ProjectDataService {

  get getUploadsFiles() {
    return "http://localhost:3006/uploads/";
  } 
  
  getAll() {
    return http.get("/Projects");
  }
  get(id) {
    return http.get(`/Projects/${id}`);
  }
  create(data) {
    return http.post("/Projects", data);
  }
  update(id, data) {
    return http.put(`/Projects/${id}`, data);
  }
  delete(id) {
    return http.delete(`/Projects/${id}`);
  }

}
export default new ProjectDataService();
