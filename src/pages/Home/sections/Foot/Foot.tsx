import styled from "@mui/material/styles/styled";
import { Container, Typography, IconButton } from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home = () => {

    const StyledFootSection = styled("div")(({ theme }) => ({
      backgroundColor: theme.palette.secondary.contrastText,
      height: "30vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: theme.breakpoints.up('md') ? "0" : "100px",
    }));

    const IconWrapper = styled("div")({
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      justifyContent: "center",
      marginBottom: "1rem",
    });

    return (
        <>
            <StyledFootSection>
                <Container maxWidth="lg">
                    <IconWrapper>
                        <IconButton component="a" href="https://github.com/anaclaracald" target="_self" aria-label="GitHub">
                            <GitHubIcon fontSize="large" color="primary" />
                        </IconButton>
                        <IconButton component="a" href="https://www.linkedin.com/in/ana-clara-c-862114249/" target="_self" aria-label="LinkedIn">
                            <LinkedInIcon fontSize="large" color="primary" />
                        </IconButton>
                    </IconWrapper>
                    <Typography textAlign="center" color="primary">
                        ana05clara24@gmail.com
                    </Typography>
                    <Typography textAlign="center" fontSize={10} color="primary">
                        <br /><br /><CopyrightIcon fontSize="inherit" /> Copyright Ana Clara Caldeira
                    </Typography>
                </Container>
            </StyledFootSection>
        </>
    );
};

export default Home;
