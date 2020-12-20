import store from './redux'
import {addMovie, removeMovie} from './redux/movies'
import {addTvShow, removeTvShow} from './redux/tvShows'

console.log(store)

store.dispatch(addMovie("Test Movie"))
store.dispatch(addMovie("Test Movie2"))
store.dispatch(addMovie("Test Movie3"))
store.dispatch(addMovie("Test Movie4"))
store.dispatch(removeMovie("Test Movie2"))
store.dispatch(addTvShow("Test Show"))
store.dispatch(addTvShow("Test Show2"))
store.dispatch(addTvShow("Test Show3"))
store.dispatch(addTvShow("Test Show4"))
store.dispatch(removeTvShow("Test Show2"))