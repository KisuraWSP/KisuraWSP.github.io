import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Projects from './views/Projects';


function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </>
  );
}

export default App;