import {
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./AddPageStyle.css";
import UseAddPage from "./UseAddPage";
export default function AddPage() {
  const [
    {
      title,
      setTitle,
      description,
      setDescription,
      price,
      setPrice,
      location,
      setLocation,
      category,
      setCategory,
      categoryHandle,
      locationHandler,
    },
  ] = UseAddPage();
console.log(title,description,location,category,price);
  return (
    <div>
      <div>
        <h1 className="sellHeading">Sale Online</h1>
        <p className="sellSubHeading">Grow Your Business</p>
      </div>
      <Grid container spacing={2} align="center">
        <Grid item xs={12} sm={12} md={6} sx={{ marginTop: "15px" }}>
          <TextField
            placeholder="Title"
            variant="standard"
            style={{ width: "500px" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120, width: 500 }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Categroy
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={category}
              onChange={categoryHandle}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem>Vehicles</MenuItem>
              <MenuItem>Animals</MenuItem>
              <MenuItem>Lcd</MenuItem>
              <MenuItem>Property</MenuItem>
              <MenuItem>House</MenuItem>
              <MenuItem>Animals</MenuItem>
              <MenuItem>Laptop</MenuItem>
              <MenuItem>Mobile Phone </MenuItem>
              <MenuItem>Watch </MenuItem>

            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <TextField
            placeholder="Description"
            variant="standard"
            style={{ width: "1150px", padding: "5px" }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{ marginTop: "15px" }}>
          <TextField
            placeholder="Price"
            variant="standard"
            style={{ width: "500px" }}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
         
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120, width: 500 }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Location
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={Location}
              onChange={locationHandler}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem>Faisalabad</MenuItem>
              <MenuItem>Lahore</MenuItem>
              <MenuItem>Karachi</MenuItem>
            
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={12} align="left" sx={{ marginLeft: "80px" }}>
          <p>Choose Picture</p>
          <input type="file" />
          <br />
          <br />
          <br />

          <Button variant="contained" color="inherit" className="postBtn">
            Post
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
