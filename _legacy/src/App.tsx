import { Route, Routes } from 'react-router-dom';
import Explore from './views/ExplorePage.tsx';
import Home from './views/HomePage.tsx';
import Experience from './views/ExperiencePage.tsx';

function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path='/experience' element={<Experience/>}/>
      </Routes>
    </>
  );
}

export default App;