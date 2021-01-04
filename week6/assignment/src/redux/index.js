import userReducer from "./user"

const redux = require("redux")
const {combineReducers, createStore} = redux



const rootReducer = combineReducers({
    users: userReducer
})

const store = createStore(rootReducer)
store.subscribe(() => {
    
    console.log(store.getState())
})
export default store