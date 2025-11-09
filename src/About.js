import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function About() {
  let paragraph1=`<p>
  At <strong>ESI</strong>, I’ve built a solid foundation in computer science, from algorithms to software design. 
  My true passion lies in <strong>front-end development</strong> crafting interactive and elegant web experiences. 
  I create clean, functional websites using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>React.js</strong>, 
  turning ideas into intuitive and enjoyable interfaces.
</p>`;
  let paragraph2=`<p>
  I’ve developed several projects that showcase my technical growth and design sense, including a 
  <strong>To-Do List app</strong> for organization and a 
  <strong>Mawaqit website</strong> displaying prayer times with a smooth, minimal interface. 
  These projects strengthened my skills in modern web practices, dynamic data handling, and user experience design. 
  Beyond coding, I value teamwork believing that great products come from empathy, communication, and shared vision.
</p>`;
  let paragraph3=`<p>
  My goal is to become a <strong>full-stack developer</strong> able to manage every layer of a web application, 
  from database logic to user interface. I’m enhancing my <strong>React</strong> expertise, exploring 
  <strong>Node.js</strong> and backend development, and deepening my understanding of 
  <strong>UI/UX design</strong> to build seamless digital experiences. 
  For me, web development is more than coding it’s about blending creativity, logic, and purpose 
  to make life simpler and more connected.
</p>`;
  let About=[paragraph1,paragraph2,paragraph3];
  let AboutList = About.map((p)=>{
    return(
      <li key={uuidv4()} dangerouslySetInnerHTML={{ __html: p }} style={{fontSize:"20px"}}/>
    )
  })
  return (
    <section id='about' className='about'>
        <h1 className='title'>About.</h1>
        <p className="about-text" style={{fontSize:"20px"}}>
          Hi, I’m <strong>Haitem Laouaoudja</strong>, a <strong>2CP student</strong> at ESI Algiers and a <strong>dedicated web developer</strong> from <strong>Taher, Jijel, Algeria</strong>. I’m deeply passionate about creating digital experiences that merge creativity with logic, transforming ideas into impactful and purposeful web solutions.
        </p>
        <ul className='list-about'>
            {AboutList}

        </ul>
    
       

       

         
    </section>
  )
}
