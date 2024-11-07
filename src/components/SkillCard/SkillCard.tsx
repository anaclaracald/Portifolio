import React from "react";
import { Typography, Box } from "@mui/material";
import styled from "@mui/material/styles/styled";

interface SkillCardProps {
  name: string;
  Icon: React.ComponentType;
  delay?: number; 
}

const CardContainer = styled("div")<{ delay?: number }>(({ theme, delay }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  backgroundColor: theme.palette.background.paper,
  transform: "scale(1)",
  transition: "transform 0.7s ease",
  opacity: 0,
  animation: `fadeIn 1s ease forwards ${delay}s`,

  "&:hover": {
    transform: "scale(1.5)",
  },

  "@keyframes fadeIn": {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
}));

const SkillCard: React.FC<SkillCardProps> = ({ name, Icon, delay = 1 }) => {
  return (
    <CardContainer delay={delay}>
      <Box component={Icon} color="primary.main" fontSize="2.5rem" />
      <Typography variant="h6" textAlign="center">
        {name}
      </Typography>
    </CardContainer>
  );
};

export default SkillCard;
