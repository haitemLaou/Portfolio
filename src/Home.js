import profile1 from './Photos/profile1.jpg'
import { useTranslation } from './i18nContext';

export default function Home() {
  const { t } = useTranslation();
  return (
    <section id="home" className="hero">
        <div className='InfoText'>
            <p style={{fontSize:"20px"}}>{t('hero.greeting')}</p>
            <h1>{t('hero.role')}</h1>
            <p>{t('hero.description')}</p>
            <div className='Resume-button'>
              <div className='Resume-box'><a href="#about">{t('hero.resume')}</a></div>
              <div className='Resume'></div>
            </div>
        </div>
        <div className='img-box'>
          <img src={profile1} alt="profile" className="profile-img" />
        </div>
        

    </section>
  )
}
