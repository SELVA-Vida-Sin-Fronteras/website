import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './Routes/SharedLayout';
import Home from './Routes/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout/>} >
          <Route index element={<Home/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;