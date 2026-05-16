import './App.css';
import { useState , useEffect} from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import { ShowContext,SetShowContext  } from './ShowContext';
import { I18nProvider } from './i18nContext';
 
import { useTranslation } from './i18nContext';

function AppContent({ small, show, setShow }) {
  const { lang } = useTranslation();
  return (
    <div className="App" dir={lang === 'ar' ? 'rtl' : 'ltr'} onClick={() => { if(show){setShow(false)} }}>
      <Header small={small} />
      <Home/>
      <About/>
      <Work/>
      <Contact/>
    </div>
  );
}

function App() {
  const [small, setSmall] = useState(false);
  const [show,setShow]=useState(false);
  useEffect(() => {
    const media = window.matchMedia("(max-width: 1024px)");
    const update = () => setSmall(media.matches);
    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return (
    <I18nProvider>
      <ShowContext value={show}>
        <SetShowContext value={setShow}>
          <AppContent small={small} show={show} setShow={setShow} />
        </SetShowContext>
      </ShowContext>
    </I18nProvider>
  );
}

export default App;
