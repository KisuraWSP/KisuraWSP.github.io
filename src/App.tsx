import { Route, Routes } from 'react-router-dom';
import Learn from './views/Learn';
import Home from './views/Home';

function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/learn" element={<Learn/>}/>
      </Routes>
    </>
  );
}

export default App;