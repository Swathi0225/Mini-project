import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { Header } from './Components/Header';
import { Lesson } from './Components/Lesson';
import { Quiz } from './Components/Quiz';
import { Voicescreen } from './Components/Voicescreen';
import { Mooddetection } from './Components/Mooddetection';



function App() {
  return (
    <div >
      <Header/>
      <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/lesson' element={<Lesson/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/voicescreen' element={<Voicescreen/>}/>
        <Route path='/mooddetection' element={<Mooddetection/>}/>


      </Routes>

      </div>
   
    </div>
  );
}

export default App;
