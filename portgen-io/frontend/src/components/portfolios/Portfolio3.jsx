import React,{useState} from 'react'
import Logo from "../../assets/image 8extra2.png";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './style3.css'

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
        <div className='port3__navbar'>
            <div className='port3__upper'>
                <h1>Hi guys</h1>
                <h3>Welcome to my portfolio</h3>
            </div>
            <div className='port3__lower'>
                <h6 id='Home' onClick={changeDis} >Home</h6>
                <h6 id='Education' onClick={changeDis} > Edu & skills</h6>
                <h6 id='Projects' onClick={changeDis} >Prev experiences</h6>
                <h6 id='WorkExp' onClick={changeDis}>Projects</h6>
            </div>
            <div className="web3__footer">
                <div className='web3__footerComp'>
                    <span className='web3__footerCamp_head'>Email</span>
                    <p>{props.email}krishna@gmail.com</p>
                </div>
                <div className='web3__footerComp'>
                    <span className='web3__footerCamp_head'>GitHub</span>
                    <p>{props.github}https/radhakrishna/brindavan.com</p>
                </div>
                <div className='web3__footerComp'>
                    <span className='web3__footerCamp_head'>LinkedIn</span>
                    <p>{props.LinkedIn}https:/inlindekein/com</p>
                </div>
                <div className='web3__footerComp'>
                    <span className='web3__footerCamp_head'>Phone no</span>
                    <p>{props.phoneno}+91 9553777142</p>
                </div>
            </div>
        </div>
    )
}

function Home(){
    return(
        <div className='port3__home'>
            <div className='port3__home_out'> 
                <div className='port3__rightHome'>
                    <h1>Ipsit Das</h1>
                    <p>A friendly "get to know me" blurb</p>
                    <p>u r bad.. the song is too bad.. koyi isko song bhi bolta hain hi hel dhlak hahdl akddlaa he is not good at all</p>
                </div>
                <div className='port3__leftHome'>
                    <img src={Logo} alt="" />
                </div>
            </div>
        </div>
    )
}

function Project(props){
    return (
        <div className='port3__project'>
          <div className="port3__proj__upper">
              <h2>{props.title}Chocolate detection</h2>
              <p> &nbsp; &nbsp; {props.desc} First impressions have been rescheduled: they’re made way before meeting in person, saving plenty of time and effort for all parties. And digital portfolios are part of this shift. More and more fields are beginning to embrace them as an accurate reflection of who you are as a professional. And so, they’re becoming the new standard: something that’s expected of those who take their career seriously.</p>
          </div>
          <div className="port3__proj__lower">
              <a href="www.google.com" className='lower_a'>Video-Link</a>
              <a href="www.google.com" className='lower_a'>GitHub-Link</a>
          </div>
      </div>
    )
}

function Projects(props){
    return (
        <div className='port3__projects'>
            <h1>My Projects</h1>
            <div className='port3__projects_inside'>
                <Project/>
                <Project/>
                <Project/>
            </div>
        </div>
    )
}

function Exp(props){
    return (
        <div className='port3__company'>
          <h3>{props.title} Amul dark chocolate</h3>
          <p> &nbsp; &nbsp;{props.desc} First impressions have been rescheduled: they’re made way before meeting in person, saving plenty of time and effort for all parties. And digital portfolios are part of this shift. More and more fields are beginning to embrace them as an accurate reflection of who you are as a professional. And so, they’re becoming the new standard: something that’s expected of those who take their career seriously.</p>
        </div>
    )
}

function WorkExp(props){
    return(
        <div className='port3__workExp'>
            <h1>My Work Experinces</h1>
            <div className='port3__workExp_inside'>
                <Exp/>
                <Exp/>
                <Exp/>
            </div>
        </div>      
    )
}

function EducationPart(props){
    return (
        <div className='port3__eduPart'>
            <p>{props.class}Btech &nbsp; {props.clg}Nit AP </p>
            <p>{props.gpa} 10.0 CGPA</p>
        </div>
    )
}

function Education(props){
    return (
        <div className='port3__edu__top'>
            <div className='port3__edu'>
                <h1>My Education</h1>
                <div>
                    <EducationPart/>
                    <EducationPart/>
                    <EducationPart/>
                </div>
            </div>
            <div className='port3__skill'>
                <h1>My skill set</h1>
                <div className='port3__skill_inside'> 
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
      <div className='port3__skillClass'>
          <p>{props.title} Eating</p>
          <div className='port3__skillClass_div'>
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

export default function Webd3() {
    const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className='web3'>
        <div className='web3_left'>
            <NavBar setComponent={setActiveComponent}/>
        </div>
        <div className='web3_right'>
           {activeComponent || <Home/>}
        </div>
    </div>
  )
}
