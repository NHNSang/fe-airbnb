import { https } from "../utils/axios"

export let userMangerService = {
    getListUser: ()=>{
        return https.get(`/api/users`)
    },
    getDeleteUser: (id = '')=>{
        return https.delete(`/api/users?id=${id}`)
    },
}


export let userAuth = {
    createNewUser: (valueForm) =>{
        return https.post('/api/auth/signup',valueForm)
    }
}