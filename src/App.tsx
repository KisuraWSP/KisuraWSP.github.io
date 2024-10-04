import { Route, Routes } from 'react-router-dom';
import Explore from './views/ExplorePage.tsx';
import Home from './views/HomePage.tsx';

function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
      </Routes>
    </>
  );
}

export default App;