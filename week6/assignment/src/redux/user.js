export function addUser(user) {
    return {
        type: "ADD_USER",
        payload: user
    }
}

export function removeUser(user) {
    return {
        type: "REMOVE_USER",
        payload: user
    }
}

export function getUser(user){
    return{
        type: "GET_USER",
        payload: user
    }

}

const initialState = [{
fullName : "Tekelia Powe",
phone: "251-753-8478",
email: "me@you.com"

}]

export default function userReducer(users = initialState, action) {
    switch(action.type) {
        case "ADD_USER":
            
            return [...users,action.payload]
        case "REMOVE_USER":{
            const updatedArr = users.filter(user => user.fullName !== action.payload.fullName)
             return updatedArr
        }
        case "GET_USER":
            return users
        

        default:
            return users
            
    }}
    