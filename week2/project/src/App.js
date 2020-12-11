import React from 'react'
import ItemList from './ItemList'
import {AppProvider} from './AppContext'
import AddItem from './AddItem'
import './App.css'

function App() {
  
  return (
    <AppProvider>
    <div>
      <div className="header"><h1>Ugly Things</h1></div>
      <AddItem />
      <ItemList />
    </div>
    </AppProvider>
  );
}

export default App