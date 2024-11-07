import { styled } from "@mui/material"
import theme from "../../theme"
import { ReactElement, ReactNode } from "react"

interface StyledButtonProps{
    children: ReactNode;
    onClick?: () => void; 
    startIcon?: ReactElement;
}

const StyledButton: React.FC<StyledButtonProps> = ({children, onClick, startIcon}) => {

    const StyledButton = styled("button")(()=> ({
        backgroundColor:"transparent",
        border: `1px solid ${theme.palette.secondary.dark}`,
        borderRadius: "10px",
        padding: "5px 15px",
        width: "100%",
        display: "flex",
        textAlign:"center",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.secondary.dark,
        cursor: "pointer",
        '&:hover':{
            color: theme.palette.secondary.contrastText,
            backgroundColor: theme.palette.secondary.light
        }
    }))

    return(
        <>
        <StyledButton onClick={onClick}>
            {startIcon && <span style={{ marginRight: "8px" }}>{startIcon}</span>} 
            {children}
        </StyledButton>
        </>
    )
}

export default StyledButton