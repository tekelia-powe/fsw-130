import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import store from "./redux"

import App from "./App"

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);

// store.dispatch(setUserDetails({name: "Tekelia", phone: "251-753-8478", email:"tp@me.com"}))
// store.dispatch(setUserDetails({name: "Andrea", phone: "251-753-8478", email:"tp@me.com"}))
// store.dispatch(setUserDetails({name: "Aayden", phone: "251-753-8478", email:"tp@me.com"}))
// store.dispatch(removeUserDetails("Tekelia"))




