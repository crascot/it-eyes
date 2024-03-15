import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './providers/Themeprovider';
import ComponentWithMenu from './components/ComponentWithMenu/ComponentWithMenu'
import About from './pages/About/About';
import Settings from './pages/Settings/Settings';
import Lessons from './pages/Lessons/Lessons';
import LessonPage from './pages/LessonPage/LessonPage';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename='/it-eyes'>
        <Routes>
          <Route path='/' element={<ComponentWithMenu child={<About />} />} />
          <Route path='/settings' element={<ComponentWithMenu child={<Settings />} />} />
          <Route path='/lessons' element={<ComponentWithMenu child={<Lessons />} />} />
          <Route path='/lessons/page/:id' element={<LessonPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;