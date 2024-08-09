import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Projects from './views/Projects';
import Skills from './views/Skills';
import Games from './views/Games';


function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/games" element={<Games/>}/>
      </Routes>
    </>
  );
}

export default App;