const redux = require("redux")

function addPerson(info){
  return{
  type: "ADD_PERSON",
  payload: info.split(",")
}}

function deletePerson(info){
  return{
  type: "DELETE_PERSON",
  payload: info
}}
const initialState = {
  name: [],
        phone: [],
        birthdate:[]
}

function reducer(state = initialState, action){
  switch(action.type){

    case "ADD_PERSON":
      return{
        
        name: [...state.name, action.payload[0]],
        phone: [...state.phone, action.payload[1]],
        birthdate:[...state.birthdate, action.payload[2]],

      }

      case "DELETE_PERSON":
        const index = state.name.indexOf(action.payload)
        const per_name = state.name.splice(index,1)
        const per_phone = state.phone.splice(index,1)
        const per_birthdate = state.birthdate.splice(index,1)
      
      return{
        
        name: per_name,
        phone: per_phone,
        birthdate:per_birthdate

      }
      default: 
      return state
  }



}

const store = redux.createStore(reducer)
store.subscribe(()=>{
  console.log(store.getState())
})

store.dispatch(addPerson("Tekelia Powe Terry,(251) 753-8478,06/02/1976"))
store.dispatch(addPerson("Andre Terry,(404) 558-5164,09/23/1975"))
store.dispatch(addPerson("Andrea Terry,(251) 219-7599,07/29/2014"))
store.dispatch(addPerson("Aayden Terry,(251) 753-8478,04/12/2016"))
store.dispatch(deletePerson("Andrea Terry"))