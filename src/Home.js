import profile1 from './Photos/profile1.jpg'

export default function Home() {
  return (
    <section id="home" className="hero">
        <div className='InfoText'>
            <p>Hello, I'am <strong>Haitem</strong></p>
            <h1>Product Designer</h1>
            <p>I design user-friendly digital experiences that blend creativity and technology.</p>
            <div className='Resume-button'>
              <div className='Resume-box'>Resume</div>
              <div className='Resume'><a href="#about"></a></div>
            </div>
        </div>
        <div className='img-box'>
          <img src={profile1} alt="profile" className="profile-img" />
        </div>
        

    </section>
  )
}
