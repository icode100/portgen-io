import React, { useState } from 'react';
import Logo from "../../assets/image 8extra2.png";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './style.css'

function NavBar(props){
    function changeDis(event){
        const targetId = event.target.id
        var component = null
        if (targetId === 'Home') {
            component = <Home />;
        } else if (targetId === 'Education') {
            component = <Education />;
        } else if (targetId === 'Projects') {
            component = <Projects />;
        } else if (targetId === 'WorkExp') {
            component = <WorkExp />;
        }
        props.setComponent(component)
    }
    
    return (
       <div className = 'navBar' > 
        <h4>Hi guys, This is Ipsit!!</h4>
        <div className = 'links' >
            <div className = 'link' id='Home' onClick={changeDis} >Home</div>
            <div className = 'link' id='Education' onClick={changeDis} >Edu & skills</div>
            <div className = 'link' id='Projects' onClick={changeDis} >Projects</div>
            <div className = 'link' id='WorkExp' onClick={changeDis} >Work Experince</div>
        </div>
       </div>
    )
}

function Home(props){
    return (
        <div className='home'>
            <div className='home_out'> 
                <div className='leftHome'>
                    <img src={Logo} alt="" />
                </div>
                <div className='rightHome'>
                    <h1>Ipsit Das</h1>
                    <p>A friendly "get to know me" blurb</p>
                    <p>u r bad.. the song is too bad.. koyi isko song bhi bolta hain hi hel dhlak hahdl akddlaa he is not good at all</p>
                </div>
            </div>
        </div>
    )
}

function Footer(props){
    return(
        <div className="footer">
            <div className='footerComp'>
                <span class='footerCamp_head'>Email</span>
                <p>{props.email}krishna@gmail.com</p>
            </div>
            <div className='footerComp'>
                <span class='footerCamp_head'>GitHub</span>
                <p>{props.github}https/radhakrishna/brindavan.com</p>
            </div>
            <div className='footerComp'>
                <span class='footerCamp_head'>LinkedIn</span>
                <p>{props.LinkedIn}https:/inlindekein/com</p>
            </div>
            <div className='footerComp'>
                <span class='footerCamp_head'>Phone no</span>
                <p>{props.phoneno}+91 9553777142</p>
            </div>
        </div>
    )
}

function EducationPart(props){
    return (
        <div className='eduPart'>
            <p>{props.class}Btech &nbsp; {props.clg}Nit AP </p>
            <p>{props.gpa} 10.0 CGPA</p>
        </div>
    )
}

function Education(props){
    return (
        <div>
            <div className='edu'>
                <h1>My Education</h1>
                <div>
                    <EducationPart/>
                    <EducationPart/>
                    <EducationPart/>
                </div>
            </div>
            <div className='skill'>
                <h1>My skill set</h1>
                <div className='skill_inside'> 
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </div>
        </div>
    ) 
}

function Skill(props) {
    return (
      <div className='skillClass'>
          <p>{props.title} Eating</p>
          <div className='skillClass_div'>
            <CircularProgressbar value = {props.value} styles={{
                trail : {
                    stroke : "white",
                },
                background : {
                    fill: 'black',
                },
                pathColor: `rgba(62, 152, 199, 1)`,
            }}/>
          </div>
      </div>
    )
}

function Project(props){
    return (
        <div className='project'>
          <div className="upper">
              <h2>{props.title}Chocolate detection</h2>
              <p> &nbsp; &nbsp; {props.desc} First impressions have been rescheduled: they’re made way before meeting in person, saving plenty of time and effort for all parties. And digital portfolios are part of this shift. More and more fields are beginning to embrace them as an accurate reflection of who you are as a professional. And so, they’re becoming the new standard: something that’s expected of those who take their career seriously.</p>
          </div>
          <div className="lower">
              <a href="www.google.com" className='lower_a'>Video-Link</a>
              <a href="www.google.com" className='lower_a'>GitHub-Link</a>
          </div>
      </div>
    )

}

function Projects(props){
    return (
        <div className='projects'>
            <h1>My Projects</h1>
            <div className='projects_inside'>
                <Project/>
                <Project/>
                <Project/>
            </div>
        </div>
    )
}

function Exp(props){
    return (
        <div className='company'>
          <h3>{props.title} Amul dark chocolate</h3>
          <p> &nbsp; &nbsp;{props.desc} First impressions have been rescheduled: they’re made way before meeting in person, saving plenty of time and effort for all parties. And digital portfolios are part of this shift. More and more fields are beginning to embrace them as an accurate reflection of who you are as a professional. And so, they’re becoming the new standard: something that’s expected of those who take their career seriously.</p>
        </div>
    )
}

function WorkExp(props){
    return(
        <div className='workExp'>
            <h1>My Work Experinces</h1>
            <div className='workExp_inside'>
                <Exp/>
                <Exp/>
                <Exp/>
            </div>
        </div>      
    )
}


export default function Protfolio2() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className='webd2'>
        <NavBar setComponent={setActiveComponent}/>
        {activeComponent || <Home/>}
        <Footer/>
    </div>
  )
}
