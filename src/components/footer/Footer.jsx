import { Grid } from "@mui/material";
import React from "react";
import "./FooterStyle.css";
import { Link } from "react-router-dom";
export default function Footer() {
  const footerData = [
    {
      heading: "Popular Categories",
      list1: "Cars",
      link1: "/cars",
      list2: "Flats for rent",
      link2: "/land-plots",
      list3: "Bikes",
      link3: "/motorcycles",
      list4: "Mobile Phones",
      link4: "/mobile-phones",
    },
    {
      heading: "Trending Searches",
      list1: "Bikes",
      link1: "/motorcycles",
      list2: "Home Appliances",
      link2: "/home-appliances",
      list3: "Cars",
      link3: "/cars",
      list4: "Animals",
      link4: "/animals",
    },
    {
      heading: "About Us",
      list1: "About EMPS",
      list2: "OLX Blog",
      list3: "Contact Us",
      list4: "OLX for Businessess",
    },
    {
      heading: "OLX",
      list1: "Help",
      list2: "Sitemap",
      list3: "Legal and Privacy information",
    },
  ];
  return (
    <div>
      <Grid container spacing={2} className="footerContainer">
        {footerData.map((footerItem) => {
          return (
            <div>
              <Grid item xs={6} sm={6} md={2.4} lg={3}>
                <div>

                <ul style={{ listStyle: "none" }}>
                  <li>{footerItem.heading}</li>
                  <li>{footerItem.list1}</li>
                  <li>{footerItem.list2}</li>
                  <li>{footerItem.list3}</li>
                </ul>
                </div>

              </Grid>
            </div>
          );
        })}
      </Grid>
    </div>
  );
}
