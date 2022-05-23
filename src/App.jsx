import Home from './pages/Home/Home';
import Header from './components/Header/Header'
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Skills/>
      <Projects/>
      
    </div>
  );
}

export default App;
