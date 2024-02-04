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
const countries = Countries()


export default function InfoComponent(){
    const [InfoState,setInfoState] = React.useState({
        Name:"",
        Intro:"",
        Age:0,
        Nationality:"",
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
    console.log(InfoState)
    return (
        <div className="info-component">
            <form action="" className="info-post">
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
                                          srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                          src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
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
                
            </form>
            
        </div>
    )
}