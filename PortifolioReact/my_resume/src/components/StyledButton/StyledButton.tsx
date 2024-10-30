import { styled } from "@mui/material"
import theme from "../../theme"
import { ReactNode } from "react"

interface StyledButtonProps{
    children: ReactNode
}

const StyledButton: React.FC<StyledButtonProps> = ({children}) => {

    const StyledButton = styled("button")(()=> ({
        backgroundColor:"transparent",
        border: `1px solid ${theme.palette.secondary.dark}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.secondary.dark,
        '&:hover':{
            color: theme.palette.secondary.contrastText,
            backgroundColor: theme.palette.secondary.light
        }
    }))

    return(
        <>
        <StyledButton >
            {children}
        </StyledButton>
        </>
    )
}

export default StyledButton