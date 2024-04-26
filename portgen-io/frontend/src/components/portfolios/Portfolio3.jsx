import React,{useState, useEffect} from 'react'
import Logo from "../../assets/image 8extra2.png";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './style3.css'
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
            component = <Projects Projects={props.Projects}/>;
        } else if (targetId === 'WorkExp') {
            component = <WorkExp Company={props.Company}/>;
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
                <h6 id='WorkExp' onClick={changeDis} >Prev experiences</h6>
                <h6 id='Projects' onClick={changeDis}>Projects</h6>
            </div>
            <div className="web3__footer">
                <div className='web3__footerComp'>
                    <span className='web3__footerCamp_head'>Email</span>
                    <p>{props.email}</p>
                </div>
                <div className='web3__footerComp'>
                    <span className='web3__footerCamp_head'>GitHub</span>
                    <p>{props.github}</p>
                </div>
                <div className='web3__footerComp'>
                    <span className='web3__footerCamp_head'>LinkedIn</span>
                    <p>{props.LinkedIn}</p>
                </div>
                <div className='web3__footerComp'>
                    <span className='web3__footerCamp_head'>Phone no</span>
                    <p>{props.phoneno}</p>
                </div>
            </div>
        </div>
    )
}

function Home(props){
    return(
        <div style={{width:"30vw"}} className='port3__home'>
            <div className='port3__home_out'> 
                <div className='port3__rightHome'>
                    <h1>{props.Name}</h1>
                    <p>{props.desc}</p>
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
        <div style={{width:"50vw"}}className='port3__project'>
          <div className="port3_proj_upper">
              <h2>{props.title}</h2>
              <p> &nbsp; &nbsp; {props.desc}</p>
          </div>
          <div className="port3_proj_lower">
              <a href={props.videoLink} className='lower_a'>Video-Link</a>
              <a href={props.github} className='lower_a'>GitHub-Link</a>
          </div>
      </div>
    )
}

function Projects(props){
    const ProjectH = []
    const ProjectData = props.Projects
    for(let i = 1; i <= 3; i++) {
        ProjectH.push(<Project title={ProjectData[`ProName${i}`]} desc={ProjectData[`ProDesc${i}`]} videoLink={ProjectData[`ProVideo${i}`]} github={ProjectData[`ProGitLink${i}`]}/>);
    }

    return (
        <div className='port3__projects'>
            <h1>My Projects</h1>
            <div className='port3__projects_inside'>
                {ProjectH}
            </div>
        </div>
    )
}

function Exp(props){
    return (
        <div className='port3__company'>
          <h3>{props.title} </h3>
          <p> &nbsp; &nbsp;{props.desc} </p>
        </div>
    )
}

function WorkExp(props){
    const Company = []
    console.log(props)
    const CompanyData = props.Company
    for(let i = 0; i < CompanyData.length; i++) {
        if(CompanyData[i][0] !== ""){
           Company.push(<Exp title = {CompanyData[i][0]} desc = {CompanyData[i][1]}/>);
        }
    }
    return(
        <div className='port3__workExp'>
            <h1>My Work Experinces</h1>
            <div className='port3__workExp_inside'>
                {Company}
            </div>
        </div>      
    )
}

function EducationPart(props){
    return (
        <div className='port3__eduPart'>
            <p>{props.class} &nbsp; {props.clg}</p>
            <p>{props.gpa} </p>
        </div>
    )
}

function Education(props){
    const EducationH = []
    const EducationData = props.Education
   
    for(let i = 1;i<=3; i++){
        EducationH.push(<EducationPart class= {EducationData[`Dep${i}`]} clg={EducationData[`Uni${i}`]} gpa={EducationData[`Gpa${i}`]}/>);
    }
 
    

    const SkillH = []
    const SkillData = props.Skills
    console.log(SkillData)
    for(let i = 1;i<=3; i++){
        SkillH.push(<Skills title = {SkillData[`Skill${i}`]} value ={SkillData[`SkillScore${i}`]} />);
    }
    

    return (
        <div className='port3_edu_top'>
            <div className='port3__edu'>
                <h1>My Education</h1>
                <div>
                    {EducationH}
                </div>
            </div>
            <div className='port3__skill'>
                <h1>My Skills set</h1>
                <div className='port3__skill_inside'> 
                    {SkillH}
                </div>
            </div>
        </div>
    ) 
}

function Skills(props) {
    return (
      <div className='port3__skillClass'>
          <p>{props.title}</p>
          <div className='port3__skillClass_div'>
            <CircularProgressbar value = {props.value} styles={{
                trail : {
                    stroke : "white",
                },
                background : {
                    fill: 'black',
                },
                pathColor: 'rgba(255,255,255,0)',
            }}/>
          </div>
      </div>
    )
}

export default function Webd3() {
    const [activeComponent, setActiveComponent] = useState(null);
    const [props,setprops] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
      useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
          
            try {
              token = Cookies.get('token');
              console.log(token)
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
    //   console.log(props)
  return (
    <div className='web3'>
        <div className='web3_left'>
        <NavBar setComponent={setActiveComponent} Education={props.Education} Company={props.Company} Skills={props.Skills} Projects={props.Projects} name={props.Name} desc={props.Intro} email={props.Email} github={props.GitHub} phoneno={props.PhoneNo} Linkedin={props.LinkedIn}/>
        </div>
        <div className='web3_right'>
           {activeComponent || <Home Name={props.name} desc={props.desc}/>}
        </div>
    </div>
  )
}