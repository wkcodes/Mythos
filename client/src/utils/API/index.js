import axios from "axios";


const API = {
 
  login: function(email, characterName) {
    return axios({
      method: 'post',
      url: '/api/login',
      data: {
        email,
        characterName
      }
    })
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
  updateUser: function(id, img1, img2){
    return axios({
      method: 'put',
      url: `/api/users${id}`,
      data: {
        img1,
        img2
      }
    })
    
    .put("/api/users/" + id)
  },
  createUser: function(email, characterName){
    return axios({
      method: 'post',
      url: 'api/users',
      data: {
      email,
      characterName
      }
    });
  },


};

export default API