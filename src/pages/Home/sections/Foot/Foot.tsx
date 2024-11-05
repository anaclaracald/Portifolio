import styled from "@mui/material/styles/styled"
import {  Container, Typography} from "@mui/material"

const Home = () =>{
  
    const StyledFootSection = styled("div") (({ theme }) => ({
      backgroundColor: theme.palette.secondary.contrastText,
      height:"20vh",
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.up('xs')]: { 
        paddingTop: "100px",
      },
      [theme.breakpoints.up('md')]: { 
          paddingTop: "0"
      }
    }))

    return (
      <>
        <StyledFootSection>
          <Container maxWidth="lg">
            <Typography variant="h3" textAlign="center" color="primary">
                Foot
            </Typography>
            
          </Container>
        
        </StyledFootSection>
      </>
    )
  }
  
  export default Home

