import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Experiences from './pages/experiences/Experiences';

function App() {

  return (
    <>
      <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/projects' Component={Projects}/>
          <Route path='/experiences' Component={Experiences}/>
      </Routes>
    </>
  )
}

export default App
