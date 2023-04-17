import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route exact path='/register' element={ <Register /> } />
    </Routes>
  );
}

export default App;
