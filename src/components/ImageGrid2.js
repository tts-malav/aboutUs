import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';


function ImageGrid2() {
  return (
    <>
    <Grid container style={{marginTop:"90px"}}>
        <Grid item xs={12} md={6}>
            <Box>
                <div id="l3">
                    
                </div>
            </Box>
        </Grid>
        <Grid item xs={12} md={6}>
            <Box style={{ padding: '20px' }}>
                <h1 id="r1">Neevay today</h1>
                <p id="p1">
                    Neevay has an office in Viman Nagar, Pune and it also calls Mumbai as second home. We're a very locally driven organization, with teams on the ground meeting contractors, project engineers, onboarding them and listening to their requirements.<br/>
                     <br/>
                    <ul>
                        <li>15000+ contractors and suppliers onboarded</li>
                        <li>500 Construction buyers including Vascon Engineers, Nyati, Reliance Retail</li>
                        <li>1500+ Matches/month</li>
                    </ul> 
                </p>
            </Box>
        </Grid>
        <Grid item xs={12} md={6}>
            <Box style={{marginTop: '150px', paddingLeft: '50px' }}>
                <h1 id="r1">Where we're going</h1>
                <p id="p1">
                    What began as a journey to provide better matchmaking between contractors and buyers has grown into a product which integrates seamlessly into the workflows of purchase managers. We are working with very large teams of purchase managers and enabling them to use Neevay as a platform to search, select and onboard contractors efficiently.
                </p>
            </Box>
        </Grid>
        <Grid item xs={12} md={6}>
            <Box style={{marginTop: '150px', marginRight:'60px'}}>
                <div className="container" id="l4">
                    
                </div>
            </Box>
        </Grid>
    </Grid>
    </>
  )
}

export default ImageGrid2
