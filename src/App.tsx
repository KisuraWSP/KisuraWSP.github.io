import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Projects from './views/Projects';
import Skills from './views/Skills';


function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </>
  );
}

export default App;