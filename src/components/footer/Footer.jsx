import { Grid, Container } from "@mui/material";
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
    <>
      <div className="footerContainer">
        <Container>
          <div style={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              {footerData.map((footerItem) => {
                return (
                  <div>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <ul className="footerList">
                    

                          <h4>
                            <li>{footerItem.heading}</li>
                          </h4>
                          <div className="footerText">
                            <li>{footerItem.list1}</li>
                            <li>{footerItem.list2}</li>
                            <li>{footerItem.list3}</li>
                            <li>{footerItem.list4}</li>
                            
                          </div>
                         
                        </ul>
                      </Grid>
                    </Grid>
                  </div>
                );
              })}
            </Grid>
          </div>
        </Container>
      </div>
      {/* copyight section  */}

      <div className="copyrightSection">
        <h6 style={{ color: "white" }}>Free Classifieds in Pakistan</h6>{" "}
        <small style={{ color: "white" }}>
          {" "}
          . © 2006-2022 OLX &nbsp; &nbsp;
        </small>
      </div>
    </>
  );
}
