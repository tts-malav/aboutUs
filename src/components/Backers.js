import { Box, Container, Grid} from "@mui/material"
import BackerCard from "./BackerCard"
import backerData from "../backerData.json"

function Backers(){
    return (
    <div className="container" >
      <div sx={{marginY:5}}>
        <Box sx={{ maxWidth:'1400px', paddingLeft:'90px'}}>
            <div className="mb-6 text-[4rem]">Our Backers</div>
            <Grid container spacing={4} >
                {backerData.map((data) => (
                    <BackerCard key={data.id} data={data} />
                ))}
            </Grid>
        </Box>
      </div>
    </div>
    )
}


export default Backers