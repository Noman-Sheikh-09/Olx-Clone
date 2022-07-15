import React from 'react'
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from 'react-router-dom';
import './SignupStyle.css'
export default function Signup() {
  return (
 
       <Grid Container align="center">
        <Paper className="signupCard">
          <Typography variant="h1" color="initial" className="olxLogin">
            olx
          </Typography>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <TextField placeholder="First Name" variant="standard" className="feild" />
          </Grid>
          <br />
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <TextField placeholder="Last Name" variant="standard" className="feild" />
          </Grid>
          <br />
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <TextField placeholder="Email" variant="standard" className="feild" />
          </Grid>
          <br />
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <TextField placeholder="Password" variant="standard" className="feild" />
          </Grid>
          <br />
          <Button variant="contained" color="secondary">
          Signup
          </Button>
          <br />
          <div>
           Already have account?
            <Link to="/login" style={{textDecoration:'none',color:'black'}}>
              <Button color="inherit" variant="text">
                SignIn
              </Button>
            </Link>
          </div>
        </Paper>
      </Grid>
  
  )
}
