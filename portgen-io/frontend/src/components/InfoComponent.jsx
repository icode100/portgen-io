import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import Countries from "./CountrySelect";
import Slider from '@mui/material/Slider';
import axios from 'axios';
import Cookies from 'js-cookie'
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from "react-router-dom";
const countries = Countries()

const temp_data = {
    "Profile": {
        "Name": "Ipsit Das",
        "Profession": "ML engineer",
        "Age": "20",
        "Nationality": "India",
        "GitHub": "https://www.github.com/icode100",
        "LinkedIn": "this is linekdin profile",
        "PhoneNo": "9310686787"
    },
    "About": {
        "NoOfProjects": "3",
        "Awards": "0",
        "Intro": "I am an ML enthusiast"
    },
    "Education": {
        "edu1": {
            "Uni1": "ABC ",
            "Dep1": "XYZ",
            "Deg1": "NA",
            "Gpa1": "10"
        },
        "edu2": {
            "Uni2": "MNP",
            "Dep2": "QRS",
            "Deg2": "xyz",
            "Gpa2": "90"
        },
        "edu3": {
            "Uni3": "NIT",
            "Dep3": "BTEC",
            "Deg3": "CSE",
            "Gpa3": "8"
        }
    },
    "Projects": {
        "pro1": {
            "ProName1": "pos tagger",
            "ProDesc1": "this is a pos tagger",
            "ProGitLink1": "https://www.github.com/icode100/pos",
            "ProVideo1": "https://drive.google.com/pos"
        },
        "pro2": {
            "ProName2": "translator",
            "ProDesc2": "This is a translator",
            "ProGitLink2": "https://www.github.com/icode100/translator",
            "ProVideo2": "https://drive.google.com/translator"
        },
        "pro3": {
            "ProName3": "Captioner",
            "ProDesc3": "This is a captioner",
            "ProGitLink3": "https://www.github.com/icode100/captioner",
            "ProVideo3": "https://drive.google.com/captioner"
        }
    },
    "Skills": {
        "s1": {
            "sk1": "ML",
            "ss1": 50
        },
        "s2": {
            "sk2": "DL",
            "ss2": 50
        },
        "s3": {
            "sk3": "AI",
            "ss3": 50
        },
        "s4": {
            "sk4": "NLP",
            "ss4": 50
        },
        "s5": {
            "sk5": "CV",
            "ss5": 50
        }
    },
    "Experience": {
        "YearsExp": ""
    },
    "Company": {
        "c1": {
            "Comp1": "",
            "WorkDesk1": ""
        },
        "c2": {
            "Comp2": "",
            "WorkDesk2": ""
        },
        "c3": {
            "Comp3": "",
            "WorkDesk3": ""
        }
    }
}

export default function InfoComponent(){
    const [InfoState,setInfoState] = React.useState({
        Name:"",
        Intro:"",
        Age:0,
        Nationality:"hi",
        Email:"",
        Github:"",
        Phone:"",
        Profession:"",
        Awards:"",
        NumProjects:"",
        Uni1:"",
        Deg1:"",
        Dept1:"",
        GPA1:"",
        Uni2:"",
        Deg2:"",
        Dept2:"",
        GPA2:"",
        Uni3:"",
        Deg3:"",
        Dept3:"",
        GPA3:"",
        PrNm1:"",
        PrGit1:"",
        PrVid1:"",
        PrDesc1:"",
        PrNm2:"",
        PrGit2:"",
        PrVid2:"",
        PrDesc2:"",
        PrNm3:"",
        PrGit3:"",
        PrVid3:"",
        PrDesc3:"",
        Skill1:"",
        SkillScore1:"",
        Skill2:"",
        SkillScore2:"",
        Skill3:"",
        SkillScore3:"",
        Skill4:"",
        SkillScore4:"",
        Skill5:"",
        SkillScore5:"",
        YearsExp:"",
        Comp1:"",
        WorkDesc1:"",
        Comp2:"",
        WorkDesc2:"",
        Comp3:"",
        WorkDesc3:"",
    })

    function HandleChange(event){
        setInfoState(
            {
                ...InfoState,
                [event.target.name]: event.target.value
            }
        )
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("i am here")
        const Profile = {
                           "Name" : InfoState.Name,
                           "Profession" : InfoState.Profession,
                           "Age" : InfoState.Age,
                           "Nationality": InfoState.Nationality,
                           "GitHub" : InfoState.Github,
                           "LinkedIn" : "this is linekdin profile",
                           "PhoneNo" : InfoState.Phone,
                        };

        const About = { "NoOfProjects":InfoState.NumProjects, "Awards" : InfoState.Awards, "Intro" : InfoState.Intro}

        const Education = {
            edu1 : {
                "Uni1" : InfoState.Uni1,
                "Dep1" : InfoState.Deg1,
                "Deg1" : InfoState.Dept1,
                "Gpa1" : InfoState.GPA1
            },
            edu2 : {
                "Uni2" : InfoState.Uni2,
                "Dep2" : InfoState.Deg2,
                "Deg2" : InfoState.Dept2,
                "Gpa2" : InfoState.GPA2
            },
            edu3 : {
                "Uni3" : InfoState.Uni3,
                "Dep3" : InfoState.Deg3,
                "Deg3" : InfoState.Dept3,
                "Gpa3" : InfoState.GPA3

            }
        }

        const Projects = {
            pro1 : {
                "ProName1" : InfoState.PrNm1,
                "ProDesc1" : InfoState.PrDesc1,
                "ProGitLink1" : InfoState.PrGit1,
                "ProVideo1" : InfoState.PrVid1
            },
            pro2 : {
                "ProName2" : InfoState.PrNm2,
                "ProDesc2" : InfoState.PrDesc2,
                "ProGitLink2" : InfoState.PrGit2,
                "ProVideo2" : InfoState.PrVid2
            },
            pro3 : {
                "ProName3" : InfoState.PrNm3,
                "ProDesc3" : InfoState.PrDesc3,
                "ProGitLink3" : InfoState.PrGit3,
                "ProVideo3" : InfoState.PrVid3
            }
        }

        const Skills = {
            "s1" : {
                "sk1" : InfoState.Skill1,
                "ss1" : InfoState.SkillScore1
            },

            "s2" : {
                "sk2" : InfoState.Skill2,
                "ss2" : InfoState.SkillScore2
            },

            "s3" : {
                "sk3" : InfoState.Skill3,
                "ss3" : InfoState.SkillScore3,
            },

            "s4" : {
                "sk4" : InfoState.Skill4,
                "ss4" : InfoState.SkillScore4
            },

            "s5" : {
                "sk5" : InfoState.Skill5,
                "ss5" : InfoState.SkillScore5

            }
        }

        const Experience = {
            "YearsExp" : InfoState.YearsExp
        }

        const Company = {
            "c1" : {
                "Comp1" : InfoState.Comp1,
                "WorkDesk1" : InfoState.WorkDesc1
            },
            "c2" : {
                "Comp2" : InfoState.Comp2,
                "WorkDesk2" : InfoState.WorkDesc2
            },
            "c3" : {
                "Comp3" : InfoState.Comp3,
                "WorkDesk3" : InfoState.WorkDesc3
            }
        }
        
        const data = {
            "Profile" : Profile,
            "About" : About,
            "Education" : Education,
            "Projects" : Projects,
            "Skills" : Skills,
            "Experience" : Experience,
            "Company" : Company
        }
        
        try {
          console.log(InfoState)
          console.log(data)
          const retrievedToken = Cookies.get('token')
          let config = {}
          console.log("hari om tasmath");
          if(retrievedToken){
            console.log("yesh")
            config = {
                headers: {
                  'Authorization': `Bearer ${retrievedToken}`
                }
            }
          }
          const response = await axios.post("http://localhost:5000/portapi/v1/info/submitinfo", temp_data, config, {withCredentials: true});
          const navigate = useNavigate();

          console.log("data sent successful:", response.data);
          window.alert("success")
          setTimeout(() => navigate("/main"), 2000); // Redirect after 2 seconds
        } catch (error) {
          console.error("login failed:", error);
          window.alert("Error occurred")
        }
      };
   
    return (
        <div className="info-component">
            <form action="" className="info-post" onSubmit={handleSubmit}>
                {/* profile */}
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content"id="panel1-header">
                        <div className="accordion-summary">Profile</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="accordion-details">
                            <Stack spacing={1}>
                                <TextField label="Name" placeholder="Enter Your Name" multiline variant="filled" name="Name" onChange={HandleChange}/>
                                <TextField label="Profession" placeholder="Enter your profession" multiline variant="filled" name="Profession" onChange={HandleChange} />
                                <TextField label="Age" multilined="true" placeholder="Enter your age" type="number" variant="filled"name="Age" onChange={HandleChange}/>                                
                                <Autocomplete
                                    id="country-select-demo"
                                    sx={{ width: 300 }}
                                    options={countries}
                                    autoHighlight
                                    getOptionLabel={(option) => option.label}
                                    renderOption={(props, option) => (
                                      <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                        <img
                                          loading="lazy"
                                          width="20"
                                          srcSet={"https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x"}
                                          src={"https://flagcdn.com/w20/${option.code.toLowerCase()}.png"}
                                          alt=""
                                        />
                                        {option.label} ({option.code}) +{option.phone}
                                      </Box>
                                    )}
                                    renderInput={(params) => (
                                      <TextField
                                        {...params}
                                        label="State Your Nationality"
                                        inputProps={{
                                          ...params.inputProps,
                                          autoComplete: 'new-password', // disable autocomplete and autofill
                                        }}
                                        name='Nationality'
                                        variant="filled"
                                        placeholder="Choose a Country"
                                        onChange={HandleChange}
                                      />
                                    )}
                                />
                                <TextField type="email" label="Email" placeholder="Enter Your Email" multiline variant="filled" name="Email" onChange={HandleChange}/>
                                <TextField  label="GitHub" placeholder="Enter Your GitHub URL" multiline variant="filled" name="Github" onChange={HandleChange}/>
                                <TextField  label="LinkedIn" placeholder="Enter Your LinkedIn URL" multiline variant="filled" name="Linkedin" onChange={HandleChange}/>
                                <TextField  label="Phone" placeholder="Enter Your Phone Number" multiline variant="filled" name="Phone" onChange={HandleChange}/> 
                            </Stack>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <hr />
                {/* about */}
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content"id="panel1-header">
                        <div className="accordion-summary">
                            About
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="accordion-details">
                            <Stack>
                                <TextField label="Awards" multilined="true" placeholder="Enter the number of awards you have" type="number" variant="filled"name="Awards" onChange={HandleChange}/>                                
                                <TextField label="number of projects" multilined="true" placeholder="Enter your number of projects" type="number" variant="filled" name="NumProjects" onChange={HandleChange}/>
                                <TextField label="Introduction" placeholder="Write something About Yourself"  multiline variant="filled" name="Intro" maxRows={5} onChange={HandleChange}/>
                            </Stack>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <hr />
                {/* education */}
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content"id="panel1-header">
                        <div className="accordion-summary">
                            Education
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="accordion-details">
                            <Stack>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content"id="panel1-header">
                                        <div className="accordion-summary">
                                            Education 1
                                        </div> 
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div className="accordion-details">
                                            <Stack>
                                                <TextField multiline label="University" name="Uni1" placeholder="Enter your University name" onChange={HandleChange} variant="filled"/>
                                                <TextField multiline label="Degree" name="Deg1" placeholder="Enter your degree" onChange={HandleChange} variant="filled"/>
                                                <TextField multiline label="Dept" name="Dept1" placeholder="Enter your Department" onChange={HandleChange} variant="filled"/>
                                                <TextField multiline label="GPA" name="GPA1" placeholder="Enter your GPA" onChange={HandleChange} variant="filled"/>
                                            </Stack>
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content"id="panel1-header">
                                        <div className="accordion-summary">
                                            Education 2
                                        </div> 
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div className="accordion-details">
                                            <Stack>
                                                <TextField multiline label="University" name="Uni2" placeholder="Enter your University name" onChange={HandleChange} variant="filled"/>
                                                <TextField multiline label="Degree" name="Deg2" placeholder="Enter your degree" onChange={HandleChange} variant="filled"/>
                                                <TextField multiline label="Dept" name="Dept2" placeholder="Enter your Department" onChange={HandleChange} variant="filled"/>
                                                <TextField multiline label="GPA" name="GPA2" placeholder="Enter your GPA" onChange={HandleChange} variant="filled"/>
                                            </Stack>
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content"id="panel1-header">
                                        <div className="accordion-summary">
                                            Education 3
                                        </div> 
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div className="accordion-details">
                                            <Stack>
                                                <TextField multiline label="University" name="Uni3" placeholder="Enter your University name" onChange={HandleChange} variant="filled"/>
                                                <TextField multiline label="Degree" name="Deg3" placeholder="Enter your degree" onChange={HandleChange} variant="filled"/>
                                                <TextField multiline label="Dept" name="Dept3" placeholder="Enter your Department" onChange={HandleChange} variant="filled"/>
                                                <TextField multiline label="GPA" name="GPA3" placeholder="Enter your GPA" onChange={HandleChange} variant="filled"/>
                                            </Stack>
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                            </Stack>
                        </div>
                    </AccordionDetails>
                </Accordion>

                {/* projects */}
                <hr />
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content"id="panel1-header">
                        <div className="accordion-summary" >
                            Projects
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="accordion-details">
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content"id="panel1-header">
                                    <div className="accordion-summary">
                                        Project 1
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="accordion-details">
                                        <Stack>
                                            <TextField label = "name" multiline placeholder="Enter the name of your project" name="PrNm1" onChange={HandleChange}variant="filled"/>
                                            <TextField label = "GitHub" multiline placeholder="Enter the github url of the project" name="PrGit1" onChange={HandleChange}variant="filled"/>
                                            <TextField label = "Video Link" multiline placeholder="Give the embeddeble video url of the project" name="PrVid1" onChange={HandleChange}variant="filled"/>
                                            <TextField label = "Description" multiline placeholder="Give a short description of your project" name="PrDesc1" onChange={HandleChange}variant="filled"/>
                                        </Stack>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content"id="panel1-header">
                                    <div className="accordion-summary">
                                        Project 2
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="accordion-details">
                                        <Stack>
                                            <TextField label = "name" multiline placeholder="Enter the name of your project" name="PrNm2" onChange={HandleChange}variant="filled"/>
                                            <TextField label = "GitHub" multiline placeholder="Enter the github url of the project" name="PrGit2" onChange={HandleChange}variant="filled"/>
                                            <TextField label = "Video Link" multiline placeholder="Give the embeddeble video url of the project" name="PrVid2" onChange={HandleChange}variant="filled"/>
                                            <TextField label = "Description" multiline placeholder="Give a short description of your project" name="PrDesc2" onChange={HandleChange}variant="filled"/>
                                        </Stack>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content"id="panel1-header">
                                    <div className="accordion-summary">
                                        Project 3
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="accordion-details">
                                        <Stack>
                                            <TextField label = "name" multiline placeholder="Enter the name of your project" name="PrNm3" onChange={HandleChange}variant="filled"/>
                                            <TextField label = "GitHub" multiline placeholder="Enter the github url of the project" name="PrGit3" onChange={HandleChange}variant="filled"/>
                                            <TextField label = "Video Link" multiline placeholder="Give the embeddeble video url of the project" name="PrVid3" onChange={HandleChange}variant="filled"/>
                                            <TextField label = "Description" multiline placeholder="Give a short description of your project" name="PrDesc3" onChange={HandleChange}variant="filled"/>
                                        </Stack>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </AccordionDetails>
                </Accordion>
                {/* Skills */}
                <hr />
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content"id="panel1-header">
                        <div className="accordion-summary">
                            Add your top 5 skills
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="accordion-details">
                            <Stack>
                                <div className="stack-item">
                                    <TextField label = "Skill 1" multiline placeholder="Enter the name Skill" name="Skill1" onChange={HandleChange} variant="filled"/>
                                    <div className="slider-label">
                                        How much do you rate yourself in this skill
                                    </div>
                                    <Slider min={0} max={100} step={10} marks name="SkillScore1" onChange={HandleChange}/>
                                </div>
                                <hr />
                                <div className="stack-item">
                                    <TextField label = "Skill 2" multiline placeholder="Enter the name Skill" name="Skill2" onChange={HandleChange} variant="filled"/>
                                    <div className="slider-label">
                                        How much do you rate yourself in this skill
                                    </div>
                                    <Slider min={0} max={100} step={10} marks name="SkillScore2" onChange={HandleChange}/>
                                </div>
                                <hr />
                                <div className="stack-item">
                                    <TextField label = "Skill 3" multiline placeholder="Enter the name Skill" name="Skill3" onChange={HandleChange} variant="filled"/>
                                    <div className="slider-label">
                                        How much do you rate yourself in this skill
                                    </div>
                                    <Slider min={0} max={100} step={10} marks name="SkillScore3" onChange={HandleChange}/>
                                </div>
                                <hr />
                                <div className="stack-item">
                                    <TextField label = "Skill 4" multiline placeholder="Enter the name Skill" name="Skill4" onChange={HandleChange} variant="filled"/>
                                    <div className="slider-label">
                                        How much do you rate yourself in this skill
                                    </div>
                                    <Slider min={0} max={100} step={10} marks name="SkillScore4" onChange={HandleChange}/>
                                </div>
                                <hr />
                                <div className="stack-item">
                                    <TextField label = "Skill 5" multiline placeholder="Enter the name Skill" name="Skill5" onChange={HandleChange} variant="filled"/>
                                    <div className="slider-label">
                                        How much do you rate yourself in this skill
                                    </div>
                                    <Slider min={0} max={100} step={10} marks name="SkillScore5" onChange={HandleChange}/>
                                </div>
                            </Stack>
                        </div>
                    </AccordionDetails>
                </Accordion>
                {/* Experience */}
                <hr />
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content"id="panel1-header">
                        <div className="accordion-summary">
                            Experience
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="accordion-details">
                            <Stack>
                                <TextField variant="filled" multilined="true" label="Years of experience" type="number" placeholder="Enter the number of years you have worked" name="YearsExp"/>
                                <hr />
                                <TextField variant="filled" multiline label="Company 1" placeholder="Enter the name of Company" name="Comp1"/>
                                <TextField variant="filled" multiline label="Description" placeholder="Describe your Work" name="WorkDesc1" maxRows={5}/>
                                <hr />
                                <TextField variant="filled" multiline label="Company 2" placeholder="Enter the name of Company" name="Comp2"/>
                                <TextField variant="filled" multiline label="Description" placeholder="Describe your Work" name="WorkDesc2" maxRows={5}/>
                                <hr />
                                <TextField variant="filled" multiline label="Company 3" placeholder="Enter the name of Company" name="Comp3"/>
                                <TextField variant="filled" multiline label="Description" placeholder="Describe your Work" name="WorkDesc3" maxRows={5}/>
                            </Stack>
                        </div>
                    </AccordionDetails>
                </Accordion>
            <hr />
            <Button type='submit' variant="contained" color="secondary" endIcon={<SendIcon />} > Submit</Button>
                
            </form>
            
        </div>
    )
}