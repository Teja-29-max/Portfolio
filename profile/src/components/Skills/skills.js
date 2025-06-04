import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'
const skills = () => {
  return (
      <section id='skills'>
      <span className='skillsTitle'>What I do</span>
      <span className='skillsDesc'>Creative Front-End Developer crafting responsive and user-friendly web interfaces with modern technologies like HTML, CSS, React and Focused on building visually engaging and interactive websites, with a growing interest in full-stack development</span>
    <div className='skillBars'>
        <div className='skillBar'>
        <img src={UIDesign} alt='' className='skillBarImg'></img>
        <div className='skillBarText'>
            <h2> UI design</h2>
            <p>Designing clean, user-friendly interfaces with a focus on layout, color, and usability.</p>
        </div>
    </div>
      <div className='skillBar'>
        <img src={WebDesign} alt='' className='skillBarImg'></img>
        <div className='skillBarText'>
            <h2> Front-End Development</h2>
            <p>Building responsive and dynamic websites using HTML, CSS, JavaScript, and React.

</p>
        </div>
    </div>
      <div className='skillBar'>
        <img src={AppDesign} alt='' className='skillBarImg'></img>
        <div className='skillBarText'>
            <h2>Website Optimization</h2>
            <p>Improving website performance through clean code, image optimization, and best front-end practices.</p>
        </div>
    </div>
    
</div>
    
      </section>
  );
}

export default skills;
