import React,{useState,useEffect} from 'react';
import Logo from "../../assets/image 8extra2.png";
import Back from '../../assets/Rectangle 5inside.svg';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Cookies from 'js-cookie'



// styles
//   console.log(props)
    // console.log(props);
    const webd1_navbar = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '15rem', 
        margin: '0px', 
        padding: '0px'
    }
    const webd1_navbar_div = {
        backgroundColor: "#2F0F62",
        opacity: '63%',
        height: '9rem',
        width:'100%'
    }
    const webd1_navbar_img = { 
        margin:"auto",
        marginTop: '3.5rem',
        position: 'absolute'
    }
    const desc = {
        textAlign: 'center'
    }
    const projectsDesc = {
        display:'flex',
        flexDirection: 'column',
        marginTop:'3rem'
    }
    const proDescHead_p = {
        textAlign: 'center',
        fontSize: 'xx-large',
        margin:'0px'
    }

    const proTot = {
        display:'flex',
        justifyContent: 'space-around',
        background: 'rgba(47, 15, 98, 0.63)',
        padding: '3rem'
    }

    const skillsTot = {
        display:'flex',
        justifyContent: 'space-around',
        backgroundColor: 'rgba(47, 15, 98, 0.63)' ,
        padding: '3rem'
    }
    
    const skillsSet = {
        marginTop:'4rem',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
    
    const skillsSet_h2 = {
        textAlign : 'center'
    }

    const companyTot = {
        display:'flex',
        justifyContent: 'space-around',
        background: 'rgba(47, 15, 98, 0.63)' ,
        padding: '3rem', 
    }
    
    const company_ = {
        marginTop: '4rem'
    }
    
    const companyHead_h2 = {
        textAlign: 'center'
    }

    const personal_div = {
        display: 'flex',
        justifyContent: 'space-between'
    }
    
    const info = {
        display:'flex',
        justifyContent: 'center'
    }
    
    const total_info = {
        width:'100%',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '3rem'
    }
    
    const total_info_img = {
        position: 'absolute',
        zIndex: '-1',
        height:'23rem',
        width:'30rem',
        left:'35%'
    }
    
    const in_info = {
        margin:'0rem 3rem'
    }
    
    const about = {
        textAlign: 'center',
        marginTop: '3rem'
    }

    const in_webd1 = {
        backgroundColor: '#AA94D7'
    }


function Company(props) {
    const company = {
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(245deg, rgba(166, 114, 251, 0.497) 0%, rgba(230, 215, 255, 0.475) 100%)',
        boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 1)',
        width: '20rem',
        height: '17rem',
        borderRadius: '25px',
        padding: '2rem',
      };
    
    return (
      <div className='company' style = {company} >
          <h3>{props.title}</h3>
          <p> &nbsp; &nbsp;{props.desc}</p>
      </div>
    )
}


function Education(props) {
    const educationStyle = {
        display: 'flex',
        justifyContent: 'space-between',
    };
    return (
      <div className='education-' style = {educationStyle}>
          <p>{props.class} &nbsp; {props.clg} </p>
          <p>{props.gpa}</p>
      </div>
    )
}

function Project(props) {
    const projectwed1 = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'linear-gradient(245deg, rgba(166, 114, 251, 0.497) 0%, rgba(230, 215, 255, 0.475) 100%)',
        width: '20rem',
        height: '17rem',
        borderRadius: '25px',
        padding: '1rem',
        boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 1)',
    }
    const projectwebd_div = {
        display: 'flex',
        flexDirection: 'column',
    }
    const lower_a = {
        color: 'black'
    }
    return (
      <div className='projectwebd1' style = {projectwed1}>
          <div className="upper" style = {projectwebd_div}>
              <h2>{props.title}</h2>
              <p> &nbsp; &nbsp; {props.desc}</p>
          </div>
          <div className="lower" style = {projectwebd_div}>
              <a href={props.videoLink} style = {lower_a}>Video-Link</a>
              <a href={props.gitHubLink} style = {lower_a}>GitHub-Link</a>
          </div>
      </div>
    )
}

function Skill(props) {
    const skillClass_div = {
        height:'5rem'
    }
    const skillClass = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '8rem',
        width: '4rem',
    };

    return (
      <div className='skillClass' style = {skillClass}>
          <p>{props.title}</p>
          <div style = {skillClass_div}>
          <CircularProgressbar value = {props.value} styles={{
              trail : {
                  stroke : "white",
              },
              background : {
                  fill: 'black',
              },
              pathColor: rgba(62, 152, 199, 1),
          }}/>
          </div>
      </div>
    )
  }

export default function Webd1() {
    const [props,setprops] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // console.log(Cookies.get('token'))
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
          
            try {
              const token = Cookies.get('token');
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

      console.log(props)

    const Education = []
    const EducationData = props.Education
    for(let i = 1; i <=3; i++) {
           Education.push(<Education class= {EducationData[`Dep${i}`]} clg={EducationData[`Uni${i}`]} gpa={EducationData[`Gpa${i}`]}/>);
    }
    
    
    const Project = []
    const ProjectData = props.Projects
    for(let i = 1; i <=3; i++) {
        
           Project.push(<Project title={ProjectData[`ProName${i}`]} desc={ProjectData[`ProDesc${i}`]} videoLink={ProjectData[`ProVideo${i}`]} github={ProjectData[`ProGitLink${i}`]}/>);
        
    }

    const Skill = []
    const SkillData = props.Skills
    for(let i = 1; i <=3; i++) {
        
           Skill.push(<Skill title = {SkillData[`Skill${i}`]} value ={SkillData[`SkillScore${i}`]}/>);
        
    }

    const Company = []
    const CompanyData = props.Company
    for(let i = 1; i <=3; i++) {
        
           Company.push(<Company title = {CompanyData[i][0]} desc = {CompanyData[i][1]}/>);
        
    }

    
    
  return (
    <div className='in_webd1' style = {in_webd1}> 
        <div className='webd1_navbar' style = {webd1_navbar}>
            <div style = {webd1_navbar_div}> hi this is nav bar</div>
            <img src={Logo} style = {webd1_navbar_img} alt="no image" />
        </div>
        <p className='desc' style={desc}>Hey, this is {props.Name} in my journey of crafting the unseen power behind every click!!</p>
       <div className='total-info' style = {total_info}>
            <img src={Back} alt="" style = {total_info_img}/>
            <p class="about" style = {about}>{desc}</p>
            <div className="info" style={info}>
                <div className="in-info" style = {in_info}>
                    <div className="eduction" >
                        {Education}
                    </div>
                </div>
                <div className='personal in-info'>
                    <div style = {personal_div}>
                        <p>Phone No:</p>
                        <p>{props.PhoneNo}</p>
                    </div>
                    <div style = {personal_div}>
                        <p>GitHub link</p>
                        <p>{props.GitHub}</p>
                    </div>
                    <div style = {personal_div}>
                        <p>Email</p>
                        <p>{props.Email}</p>
                    </div>
                    <div style = {personal_div}>
                        <p>Nationality</p>
                        <p>{props.Nationality}</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="projectsDesc" style = {projectsDesc}>
            <div className="proDescHead" >
                <p style = {proDescHead_p}>Projects</p>
            </div>
            <div className="proTot" style = {proTot}>
                {Project}
            </div>
        </div>

        <div className="skillsSet" style = {skillsSet}>
            <div className="skillsSetHead">
                <h2 style={skillsSet_h2}>Skills</h2>
            </div>
            <div className="skillsTot" style = {skillsTot}>
                {Skill}               
            </div>
        </div>

        <div className="company-" style = {company_}>
            <div className="companyHead">
                <h2 style = {companyHead_h2}>Previous Experiences</h2>
            </div>
            <div className="companyTot" style = {companyTot}>
                {Company}  
            </div>
        </div>
    </div>
  )
}