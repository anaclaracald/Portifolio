
import styled from '@mui/material/styles/styled'

import { Container, Grid, Typography } from '@mui/material';
import { Card1, Card2, Card3, Card4 } from '../../../../components/Slider/Card';


const StyledProjectsSection = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.secondary.contrastText,
    height:"105vh",
    display: "flex",
    alignItems: "center",
 }));

 const Home = () => {
   return (
    <>
    <StyledProjectsSection>
        
        <Container>
            <Typography paddingBottom="100px" variant="h3" textAlign="center" color="primary">
                Projects
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                    <Card1 />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card2 />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card3 />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card4 />
                </Grid>
            </Grid>
        </Container>
    </StyledProjectsSection>
    </>
    
   );
 }
 export default Home;