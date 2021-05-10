import axios from "axios"

export default {
    getAllUsers(){
        return axios.get("/api/allUsers")
    },
    getUser(){
        return axios.get("api/user")
    },
    getAllEvents(){
        return axios.get("/api/allEvents")
    },
    signIn(userData){
        return axios.post("/api/login", userData)
    },
    signUp(userData){
        return axios.post("api/register", userData)
    },
    signOut(){
        return axios.get("api/logout")
    },
    eventCreate(eventData){
        return axios.post("api/newEvent", eventData)
    }
}