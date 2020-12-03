import axios from "axios";


const API = {
 
  login: function() {
    return axios.post("/api/login");
  },
  getProfile: function(userId) {
    return axios({
      method: 'post',
      url: '/api/profile',
      data: {
        userId
      }
    });
  },
  saveProfile: function() {
    return axios.post("/api/profile");
  },
  updateProfile: function() {
    return axios.put("/api/profile");
  },
  getUsers: function(){
    return axios.get("/api/users")
  },
  getUser: function(id){
    return axios.get("/api/users/" + id)
  },
  updateUser: function(id){
    return axios.put("/api/users/" + id)
  },
  createUser: function(){
    return axios.post("/api/users/")
  },


};

export default API