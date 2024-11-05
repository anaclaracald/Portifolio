import styled from "@mui/material/styles/styled"
import imagem from "../../../../assets/images/foto_perfil.jpg"
import { Box, Container, Grid, Typography } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground1";
import cvfile from '../../../../assets/pdf/resumo-alyne.pdf';

const Home = () =>{
  
    const StyledHero = styled("div") (({ theme }) => ({
      backgroundColor: theme.palette.secondary.contrastText,
      height:"103vh",
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.up('xs')]: { 
        paddingTop: "100px",
      },
      [theme.breakpoints.up('md')]: { 
          paddingTop: "0"
      }
    }))

    const StyledImg = styled("img") (({theme}) => ({
      width: "100%",
      borderRadius: "50%",
      border: `1px solid ${theme.palette.secondary.dark}`
    }))

    const handleDownloadCV = () => {
      const link = document.createElement('a');
      link.href = cvfile;
      link.download = cvfile;
      link.click();
    };
    
    const handleContactMe = () => {
      const email = 'ana05clara24@gmail.com';
      const subject = 'Contato';
      const body = 'Olá Ana Clara, gostaria de entrar em contato.';
      const mailtoUrl = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
    };

    return (
      <>
        <StyledHero>
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Box position="relative">
                  <Box position="absolute" width={"150%"} top={100} right={0}>
                      <AnimatedBackground />
                  </Box>
                  <Box position="relative" textAlign="center">
                      <StyledImg src={imagem} />
                  </Box>
                </Box>            
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography color="secondary" variant="h1" textAlign="center" pb={2}>Ana Clara</Typography>
                <Typography color="secondary" variant="h2" textAlign="center">I'm a software engineer!</Typography>
                <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                  <Grid item xs={12} md={4} display="flex" justifyContent="center">
                    <StyledButton onClick={handleDownloadCV} startIcon={<DownloadIcon />}>
                      Download CV</StyledButton>
                  </Grid>
                  <Grid item xs={12} md={4} display="flex" justifyContent="center">
                    <StyledButton onClick={handleContactMe} startIcon={<MailOutlineIcon />}>
                      Contact me</StyledButton>
                  </Grid>
                </Grid>
                
                
              </Grid>
            </Grid>
          </Container>
        
        </StyledHero>
      </>
    )
  }
  
  export default Home

