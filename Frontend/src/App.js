import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Routing from './components/Routing';


function App() {
   return (
<>
<div className="content">
  
<BrowserRouter>
<Routing/>
</BrowserRouter>
</div>
</>
 
  );
}

export default App;
