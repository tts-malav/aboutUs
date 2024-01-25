import React from 'react';
import { Grid, Paper, Box, Link } from '@mui/material';

const BackerCard = ({ data }) => {

  const { imageSrc, title, text } = data;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0}>
        <h6 id="backers">{title}</h6>
        <div className='flex'><img src='https://neevay.com/assets/home/LinkdenIcon.svg' alt='' height="15px"></img>
            <Link id="backer" to="/" marginLeft="20px">{title}</Link>
        </div>
        <img
          src={imageSrc}
          alt=""
          className="backer"
          height="160px"
        />
        <Box paddingY={1}>
          <p id="backer">{text}</p>
        </Box>
      </Paper>
    </Grid>
  );
};

export default BackerCard;
