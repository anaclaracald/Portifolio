import styled from "@mui/material/styles/styled";
import { Container, Typography, Grid } from "@mui/material";
import skills from "../../../../components/SkillCard/Skills";
import SkillCard from "../../../../components/SkillCard/SkillCard";

const Home = () => {
  const StyledSkillsSection = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    background: `linear-gradient(90deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.dark})`,
    minHeight: "103vh",
    paddingTop: theme.breakpoints.up("md") ? "0" : "100px",
  
  }));

  return (
    <StyledSkillsSection id="skills">
      <Container maxWidth="lg">
        <Typography variant="h3" textAlign="center" color="primary.contrastText" gutterBottom>
          Skills
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid item xs={6} sm={4} md={3} key={skill.name}>
              <SkillCard 
                name={skill.name} 
                Icon={skill.icon} 
                delay={index * 0.5} 
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledSkillsSection>
  );
};

export default Home;
