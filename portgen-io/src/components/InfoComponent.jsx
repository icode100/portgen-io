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
const countries = Countries()


export default function InfoComponent(){
    const [loginState,setInfoState] = React.useState({
        Name:"",
        Intro:"",
        Age:0,
        Nationality:"",
        Email:"",
        Github:"",
        Phone:""
    })

    function HandleChange(event){
        setInfoState(
            {
                ...loginState,
                [event.target.name]: event.target.value
            }
        )
    }

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
                                <TextField label="Intro" placeholder="Enter Something about You" multiline variant="filled" name="Intro" onChange={HandleChange} maxRows={5}/>
                                <TextField label="Age" placeholder="Enter Your Age" multiline variant="filled" type = "number" name="Age" onChange={HandleChange} />
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
                
                
            </form>
            
        </div>
    )
}