import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"
import theme from "../../theme"


const NavBar = () =>{

    const StyledToobar = styled(Toolbar)(({}) =>({
        display:"flex",
        justifyContent: "space-evenly",
    }))

    const StyledMenu = styled(MenuItem)(({}) =>({
        cursor: "pointer",
        '&:hover':{
            color: theme.palette.primary.contrastText,
        }
    }))


    return (
      <>
        <AppBar position="relative">
            <StyledToobar>
                <StyledMenu><MenuItem>About</MenuItem></StyledMenu>
                <StyledMenu><MenuItem>Skills</MenuItem></StyledMenu>
                <StyledMenu><MenuItem>Projects</MenuItem></StyledMenu>
            </StyledToobar>
        </AppBar>
      </>
    )
  }

 
export default NavBar;
  