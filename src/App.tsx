import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Experiences from './pages/experiences/Experiences';
import Education from './pages/education/Education';

function App() {

  return (
    <>
      <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/projects' Component={Projects}/>
          <Route path='/experiences' Component={Experiences}/>
          <Route path='/education' Component={Education}/>

      </Routes>
    </>
  )
}

export default App
