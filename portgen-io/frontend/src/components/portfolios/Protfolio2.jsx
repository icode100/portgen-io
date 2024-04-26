import React, { useState,useEffect } from 'react';
import Logo from "../../assets/image 8extra2.png";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './style.css'
import Cookies from 'js-cookie'
function NavBar(props){
    function changeDis(event){
        const targetId = event.target.id
        var component = null
        if (targetId === 'Home') {
            component = <Home Name={props.name} desc={props.desc}/>;
        } else if (targetId === 'Education') {
            component = <Education Education={props.Education} Skills={props.Skills}/>;
        } else if (targetId === 'Projects') {
            component = <Projects Project={props.Project}/>;
        } else if (targetId === 'WorkExp') {
            component = <WorkExp Company={props.Company}/>;
        }
        props.setComponent(component)
    }
    
    return (
       <div className = 'navBar' > 
        <h4>Hi guys, This is {props.name}!!</h4>
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
        <div style={{width:"80vw"}} className='home'>
            <div className='home_out'> 
                <div className='leftHome'>
                    <img src={Logo} alt="" />
                </div>
                <div className='rightHome'>
                    <h1>{props.Name}</h1>
                    
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    )
}

function Footer(props){
    return(
        <div className="footer">
            <div className='footerComp'>
                <span className='footerCamp_head'>Email</span>
                <p>{props.email}</p>
            </div>
            <div className='footerComp'>
                <span className='footerCamp_head'>GitHub</span>
                <p>{props.github}</p>
            </div>
            <div className='footerComp'>
                <span className='footerCamp_head'>LinkedIn</span>
                <p>{props.LinkedIn}</p>
            </div>
            <div className='footerComp'>
                <span className='footerCamp_head'>Phone no</span>
                <p>{props.phoneno}</p>
            </div>
        </div>
    )
}

function EducationPart(props){
    return (
        <div className='eduPart'>
            <p>{props.class} &nbsp; {props.clg} </p>
            <p>{props.gpa} </p>
        </div>
    )
}

function Education(props){
    const EducationH = []
    const EducationData = props.Education
    console.log(EducationData)
    for(let i = 1; i <= 3; i++) {
        
           EducationH.push(<EducationPart class= {EducationData[`Dep${i}`]} clg={EducationData[`Uni${i}`]} gpa={EducationData[`Gpa${i}`]}/>);
        
    }

    const SkillH = []
    const SkillData = props.Skills
    for(let i = 1; i <= 3; i++) {
   
           SkillH.push(<Skills title = {SkillData[`Skill${i}`]} value ={SkillData[`SkillScore${i}`]}/>);
        
    }
    return (
        <div>
            <div className='edu'>
                <h1>My Education</h1>
                <div>
                    {EducationH}
                </div>
            </div>
            <div className='skill'>
                <h1>My skill set</h1>
                <div className='skill_inside'> 
                  {SkillH}
                </div>
            </div>
        </div>
    ) 
}

function Skills(props) {
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
                pathColor: 'rgba(62, 152, 199, 1)',
            }}/>
          </div>
      </div>
    )
}

function Project(props){
    return (
        <div className='project'>
          <div className="upper">
              <h2>{props.title}</h2>
              <p> &nbsp; &nbsp; {props.desc}</p>
          </div>
          <div className="lower">
              <a href={props.videoLink} className='lower_a'>Video-Link</a>
              <a href={props.github} className='lower_a'>GitHub-Link</a>
          </div>
      </div>
    )

}

function Projects(props){
    const ProjectH = []
    const ProjectData = props.Project
    
    for(let i = 1; i <= 3; i++) {

           ProjectH.push(<Project title={ProjectData[`ProName${i}`]} desc={ProjectData[`ProDesc${i}`]} videoLink={ProjectData[`ProVideo${i}`]} github={ProjectData[`ProGitLink${i}`]}/>);
        
    }
    return (
        <div className='projects'>
            <h1>My Projects</h1>
            <div className='projects_inside'>
             {ProjectH}
            </div>
        </div>
    )
}

function Exp(props){
    return (
        <div className='company'>
          <h3>{props.title} hi</h3>
          <p> &nbsp; &nbsp;{props.desc} hi</p>
        </div>
    )
}

function WorkExp(props){
    const Company = []
    const CompanyData = props.Company
    for(let i = 0; i < CompanyData.length; i++) {
        if(CompanyData[i][0] !== ""){
           Company.push(<Exp title = {CompanyData[i][0]} desc = {CompanyData[i][1]}/>);
        }
    }
    return(
        <div className='workExp'>
            <h1>My Work Experinces</h1>
            <div className='workExp_inside'>
                {Company}
            </div>
        </div>      
    )
}


export default function Webd2() {
    const [activeComponent, setActiveComponent] = useState(null);
    const [props,setprops] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
      useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
          
            try {
               token = Cookies.get('token');
            
              if (!token) {
                throw new Error('Invalid token');
              }
              const config = {
                method: 'GET',
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              
              };
              const response = await fetch('http://localhost:5000/portapi/v1/info/getinfo', config);
              if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
              }
              const data = await response.json();
              setprops(data.data);
            } catch (error) {
              setError(error);
            } finally {
              setLoading(false);
            }
          };
          
          
          fetchData();
      }, []);
      console.log(props)


  return (
    <div className='webd2'>
        <NavBar setComponent={setActiveComponent} Education={props.Education} Company={props.Company} Skills={props.Skills} Project={props.Projects} name={props.Name} desc={props.Intro}/>
        {activeComponent || <Home Name={props.Name} desc={props.Intro}/>}
        <Footer email={props.Email} github={props.GitHub}
        LinkedIn={props.LinkedIn} phoneno={props.PhoneNo}/>
    </div>
  )
}