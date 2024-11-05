import styled from "@mui/material/styles/styled"
import { Container, Typography} from "@mui/material"

const Home = () =>{
  
    const StyledSkillsSection = styled("div") (({ theme }) => ({
      backgroundColor: theme.palette.secondary.light,
      height:"103vh",
      [theme.breakpoints.up('xs')]: { 
        paddingTop: "100px",
      },
      [theme.breakpoints.up('md')]: { 
          paddingTop: "0"
      }
    }))

    return (
      <>
        <StyledSkillsSection>
          <Container maxWidth="lg">
            <Typography variant="h3" textAlign="center" color="primary">
              Skills
            </Typography>
          </Container>
        
        </StyledSkillsSection>
      </>
    )
  }
  
  export default Home

