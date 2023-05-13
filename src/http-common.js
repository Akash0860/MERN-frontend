import axios from "axios"

export default axios.create({
    baseURL:"https://restuarantreview(mern)/api/v1/restaurants.onrender.com",
    headers:{
        "Content-Type":"application/json"
    }
});