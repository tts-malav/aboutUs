import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function FixedContainer() {
  return (
    <>
      <CssBaseline />
      <div className="container">
        <Box sx={{ paddingLeft:'100px' }} >   
            <h1 id="team">Our Team</h1>
            <h6 className= 'pl-4 font-bold text-lg mt-6'>Hanish Raheja</h6>
            <h6 className='pl-4' id="nametag">FOUNDER AND MANAGING DIRECTOR</h6>
            <Grid className='pl-4' container style={{marginTop:'10px'}}>
                <Grid item xs={12} md={4.5}>
                    <Box >
                      <div id="l5">

                      </div>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7.5}>
                  <Box >
                    <p id="p1team">
                      After 15-years working with Fortune 200 Technology Companies in various leadership roles, Hanish Raheja's Entrepreneurial spirit led him to establish Neevay with the vision of transforming the construction industry in India for the better. Upskilled his Business Acumen at prestigious Executive MBA of IIT Bombay and Washington University in St. Louis, and proud member of Beta Gamma Sigma, an International Business Honor Society of Top 5% of Business Schools across the world. Hanish is a problem solver, and believes in solving the complex problems in the most simplest way possible.Along with two like-minded friends and veterans of Construction Industry, Siddharth Moorthy and Kaizad Engineer, Hanish Raheja formed the nucleus of Neevay in 2022 bringing 100+ years of Construction Experience in the Company Board, that sought to consolidate and organise the fragmented construction industry.
                    </p>
                  </Box>
                </Grid>
            </Grid>
            <h6 className='pl-4 font-bold text-lg mt-6'>Rohit Shelke</h6>
            <h6 className='pl-4' id="nametag">VICE PRESIDENT OF SALES AND MARKETING</h6>
            <Grid className='pl-4' container style={{marginTop:'10px'}}>
                <Grid item xs={12} md={4.5}>
                    <Box >
                        
                        <div id="l6">
                          
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7.5}>
                        <Box>
                            <p id="p1team">
                            With over six years of experience as a seasoned entrepreneur, I have demonstrated my passion for innovation and leadership by playing a pivotal role in the development of Neevay, a groundbreaking construction platform that simplifies vendor discovery. By leveraging my expertise in agile methodologies, teamwork, and leadership, I have been instrumental in driving Neevay's growth and success, making it an indispensable tool for construction professionals seeking seamless vendor partnerships..
                            </p>
                        </Box>
                </Grid>
            </Grid>
        </Box>
        <Box sx={{ paddingLeft:'90px', marginTop:'80px'}} >
          <div >
          <img src="https://neevay.com/assets/business/web-aboutus-desktop-team.webp"
                alt = ""
                id="teampic"
              />
          
              <h6 className='font-bold' style={{marginTop:'20px',marginBottom:'100px'}}>Neevay Team on - 1/12/2023 in Pune</h6>
          </div>
        </Box>
        </div>
    </>
  );
}