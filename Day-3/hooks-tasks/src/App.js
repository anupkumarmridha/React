import React from 'react';
import './App.css';
import { ItemProvider } from './providers/ItemProvider'; 
import ItemManager from './components/ItemManager';

function App() {
  return (
    <div className="App">
      <ItemProvider>
        <ItemManager />
      </ItemProvider>
    </div>
  );
}

export default App;