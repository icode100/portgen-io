import React from "react";
import TextField  from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function SettingUser(){

    const [settingUser,setUser] = React.useState({
        recovery:"",
        user:""
    })
    function handleChange(event){
        setUser({
            ...settingUser,
            [event.target.name]: event.target.value
        })
    }

    console.log(settingUser)
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
                    value={settingUser.recovery}
                    />
                    <TextField
                    label="new username"
                    placeholder="Enter your new User"
                    multiline
                    type='text'
                    name='user'
                    onChange={handleChange}
                    value={settingUser.user}
                    />
                    <Button variant='contained' color="success" type="submit">Submit</Button>
                </Stack>
            </form>
        </>
    )
}