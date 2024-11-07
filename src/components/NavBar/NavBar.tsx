import { AppBar, MenuItem, styled, Toolbar, Typography, Box } from "@mui/material";
import theme from "../../theme";
import logo from "../../../src/assets/png/logo.png";

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)(() => ({
    background: `linear-gradient(90deg, ${theme.palette.secondary.dark}, ${theme.palette.secondary.light})`,
    display: "flex",
    justifyContent: "space-between",
  }));

  const LogoContainer = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  }));

  const StyledMenu = styled(MenuItem)(() => ({
    cursor: "pointer",
    '&:hover': {
      color: theme.palette.primary.contrastText,
    },
  }));

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AppBar position="fixed"> 
        <StyledToolbar>
          <LogoContainer onClick={() => handleScroll("hero")}> 
            <img src={logo} alt="Logo Ana Clara" style={{ width: 60, height: 60 }} />
            <Typography variant="h6" color="primary.contrastText" ml={1}>
              Ana Clara
            </Typography>
          </LogoContainer>

          <Box display="flex" gap={2}>
            <StyledMenu onClick={() => handleScroll("about")}>About</StyledMenu>
            <StyledMenu onClick={() => handleScroll("skills")}>Skills</StyledMenu>
            <StyledMenu onClick={() => handleScroll("projects")}>Projects</StyledMenu>
          </Box>
        </StyledToolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
