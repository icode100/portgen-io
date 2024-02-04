import React from "react";
import TextField  from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function SettingEmail(){

    const [settingEmail,setEmail] = React.useState({
        recovery:"",
        email:""
    })
    function handleChange(event){
        setEmail({
            ...settingEmail,
            [event.target.name]: event.target.value
        })
    }

    console.log(settingEmail)
    return(
        <>
            <form action="">
                <Stack spacing={2}>
                    <TextField
                    label="Recovery Pin"
                    placeholder="Enter your recovery pin"
                    multiline
                    name='recovery'
                    type='password'
                    minlength='4'
                    maxlength="4"
                    onChange={handleChange}
                    value={settingEmail.recovery}
                    />
                    <TextField
                    label="Email"
                    placeholder="Enter your new Email"
                    multiline
                    type='email'
                    name='email'
                    onChange={handleChange}
                    value={settingEmail.email}
                    />
                    <Button variant='contained' color="success" type="submit">Submit</Button>
                </Stack>
            </form>
        </>
    )
}