import axios from "axios"

export default axios.create({
    baseURL:"https://restaurantreviews-api.onrender.com/api/v1/restaurants",
    headers:{
        "Content-Type":"application/json"
    }
});