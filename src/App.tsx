import { Route, Routes } from 'react-router-dom';
import _Projects from './views/_Projects';
import _Skills from './views/_Skills';
import _Games from './views/_Games';
import _Home from './views/_Home';


function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<_Home/>}/>
        <Route path="/skills" element={<_Skills/>}/>
        <Route path="/projects" element={<_Projects/>}/>
        <Route path="/games" element={<_Games/>}/>
      </Routes>
    </>
  );
}

export default App;