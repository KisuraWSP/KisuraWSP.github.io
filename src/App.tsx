import { Route, Routes } from 'react-router-dom';
import Games from './views/Games';
import Home from './views/Home';

function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/games" element={<Games/>}/>
      </Routes>
    </>
  );
}

export default App;