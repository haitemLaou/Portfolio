import './App.css';
import { useState , useEffect} from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import { ShowContext,SetShowContext  } from './ShowContext';

 
function App() {
  const [small, setSmall] = useState(false);
  const [show,setShow]=useState(false);
  useEffect(() => {
    const media = window.matchMedia("(max-width: 865px)");
    const update = () => setSmall(media.matches);
    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return (
    <ShowContext value={show}>
      <SetShowContext value={setShow}>
        <div className="App" onClick={()=>{if(show){setShow(false)} }}>
          <Header small={small} />
          <Home/>
          <About/>
          <Work/>
          <Contact/>
        </div>
      </SetShowContext>
      
    </ShowContext>
    
  );
}

export default App;
