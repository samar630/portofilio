
import './App.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Home from './pages/main/home';
import Projects from './pages/projects/projects';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
                <Routes>
                        <Route path='/' element={<Home/> }/>
                        <Route path='projects' element={<Projects/> }/>
                </Routes>
            </BrowserRouter>
     
    </div>
  );
}

export default App;
