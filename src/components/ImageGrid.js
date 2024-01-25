import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';

function ImageGrid() {
  return (
    <>
    <Grid container className='mt-48'>
        <Grid item xs={12} md={6}> 
            <Box>
                <div id="l1">
                    
                </div>
            </Box>
        </Grid>
        <Grid item xs={12} md={6}>
                <Box style={{padding: '20px', marginLeft: '50px'}}>
                    <h1 id="r1">Why we're here</h1>
                    <p id="p1">
                        Finding the right contractor in the construction industry is painful. Buyer databases are often stale, contractors have either changed their line of business or have stopped supporting services that they previously offered.<br/>
                        <br/>
                        Contractors on the other hand want to match with qualified leads that equal their minimum requirements and not get spammed.<br/>
                        <br/>
                        By eliminating such inefficiencies we are building a platform that's both remarkable and accessible. Because every business deserves to grow while minimizing time to match with the right partner
                    </p>
                </Box>
        </Grid>
        <Grid item xs={12} md={6}>
                <Box style={{ marginLeft: '60px', marginTop:'80px' }}>
                    <h1 id="r1">How we got started</h1>
                    <p id="p1">
                        Neevay was born during an MBA program conducted jointly by IIT Bombay and University of Washington in Mumbai. Our MD Hanish Raheja met Siddarth Moorty and Kaizad Engineer who ran multi-crore construction businesses themselves and faced vendor sourcing problems in their own businesses.<br/>
                        <br/>
                        The trio determined to solve this problem not only for their own businesses but for the whole industry itself. So, in addition to their classes, they spent time doing market research and experimenting with various models. The vendor matching solution they came up with was an instant hit with major developers in Mumbai and Pune areas. Couple of years into the grind they solidified the foundation that would become Neevay today
                    </p>
                </Box>
        </Grid>
        <Grid item xs={12} md={6}>
            <Box style={{ marginTop:'80px', marginRight:'60px'}}>
                <div className="container" id="l2">
                    
                </div>
            </Box>
        </Grid>
    </Grid>
    </>
  )
}

export default ImageGrid
