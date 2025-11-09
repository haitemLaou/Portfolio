import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import PHOTO from './Photos/Mawaquit.png'
import PHOTO1 from './Photos/To_Do_List.png'
import PHOTO3 from './Photos/Portfolio.png'
import PHOTO4 from './Photos/Weather_Project.jpeg'
export default function Work() {
  let Projects=[
    {
      title:"To Do List",
      details:`A simple and elegant productivity website that helps users manage their daily tasks.
      Built with HTML, CSS, JavaScript, and React.js, it allows users to add, edit, and remove tasks while keeping them saved using localStorage.
      I focused on creating a clean interface and smooth user experience that makes staying organized effortless.`,
      src:PHOTO1,
      date:"August 20, 2025"
    },
    {
      title:"Mawaquit",
      details:`A modern website that displays daily prayer times for cities across Algeria.
      Developed with React.js, it features a minimal layout, responsive design, and accurate data from a public API.
      This project helped me understand API fetching and taught me the importance of designing clear, accessible user interfaces.`,
      src:PHOTO,
      date:"August 10, 2025"
    },
    {
    title: "Weather WebSite",
    details: `A simple yet functional weather website that shows live temperature, humidity, and forecast data for any city.
Built with HTML, CSS, JavaScript, and the OpenWeatherMap API, it updates weather details instantly as users search for a location.
I built this to strengthen my understanding of APIs, real-time data handling, and user-friendly design principles.`,
    src: PHOTO4,
    date:"September 14, 2025"
    },
    {
    title: "Portfolio Website",
    details: `My personal portfolio website designed and developed with React.js.
    It showcases my work, skills, and contact details in a structured and visually balanced way.
    This project helped me master component-based design and responsive layouts while expressing my identity as a developer.`,
    src:PHOTO3,
    date:"November 9, 2025"
    }

  ]

  let ListProjects = Projects.map((p)=>{
    return(
      <div key={uuidv4()} className="project">
      <h2>{p.title}</h2>
      <img src={p.src} alt="profile" className="profile-img" />
      <h5>{p.date}</h5>
      <p style={{fontSize:"20px"}}>{p.details}</p>
    </div>
    )})
  return (
    <section id='work' className='work'>
        <h1 className='title'>Work.</h1>
        <p style={{fontSize:"20px"}}>
          Here are some of the projects I’ve worked on, reflecting my growth as a developer and my passion for creating clean, user-focused web applications. 
          Each project helped me strengthen my technical skills and explore new tools and design approaches.
        </p>
        <div  className="projects">
          {ListProjects}
        </div>
    </section>
  )
}
