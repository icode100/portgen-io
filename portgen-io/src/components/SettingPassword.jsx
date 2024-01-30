import React from "react";
import TextField  from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function SettingPass(){

    const [settingPass,setPass] = React.useState({
        recovery:"",
        pass:"",
        cnfpass:''
    })
    function handleChange(event){
        setPass({
            ...settingPass,
            [event.target.name]: event.target.value
        })
    }

    console.log(settingPass)
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
                    value={settingPass.recovery}
                    />
                    <TextField
                    label="New Password"
                    placeholder="Enter your new Password"
                    multiline
                    type='Password'
                    name='pass'
                    onChange={handleChange}
                    value={settingPass.pass}
                    />
                    <TextField
                    label="Confirm Password"
                    placeholder="Re-enter your password"
                    multiline
                    type='Password'
                    name='cnfpass'
                    onChange={handleChange}
                    value={settingPass.cnfpass}
                    />
                    <Button variant='contained' color="success" type="submit">Submit</Button>
                </Stack>
            </form>
        </>
    )
}