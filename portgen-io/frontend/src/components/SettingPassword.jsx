import React, {useState} from "react";
import TextField  from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Alert, Snackbar } from "@mui/material";
import Cookies from 'js-cookie'
import axios from 'axios'


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

    
    const [openAlert, setOpenAlert] = useState(false); // State for managing Alert visibility
    const [alertSeverity, setAlertSeverity] = useState(""); // State for Alert severity
  
    const handleAlertClose = () => {
      setOpenAlert(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const token = Cookies.get('token')
          const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          };
          const response = await axios.post("http://localhost:5000/portapi/v1/settings/changePassword", settingPass, {withCredentials: true, headers: headers});

          console.log("userName update successful:", response.data);
          setOpenAlert(true);
          setAlertSeverity("success"); // Set success severity

        } catch (error) {
          console.error("login failed:", error);
          setOpenAlert(true);
          setAlertSeverity("error"); // Set error severity
        }
      };

    console.log(settingPass)
    return(
        <>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <TextField
                    label="Recovery Pin"
                    placeholder="Enter your email"
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
            <Snackbar
        open={openAlert}
        autoHideDuration={6000} // Automatically close after 6 seconds
        onClose={handleAlertClose}
      >
        <Alert severity={alertSeverity}>
          {alertSeverity === "success"
            ? "login successful!"
            : "login failed!"}
        </Alert>
      </Snackbar>
        
        </>
    )
}