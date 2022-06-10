import axios from "axios";
const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {"Content-type": "multipart/form-data"}
});

class ProjectDataService {

  get getUploadsFiles() {
    return "/uploads/";
  } 
  
  getAll() {
    return http.get("/api/Projects");
  }
  get(id) {
    return http.get(`/api/Projects/${id}`);
  }
  create(data) {
    return http.post("/api/Projects", data);
  }
  update(id, data) {
    return http.put(`/api/Projects/${id}`, data);
  }
  delete(id) {
    return http.delete(`/api/Projects/${id}`);
  }

}
export default new ProjectDataService();
