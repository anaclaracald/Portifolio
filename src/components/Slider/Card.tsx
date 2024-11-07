import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link, Box } from "@mui/material";
import StyledButton from "../StyledButton/StyledButton";
import styled from "@mui/material/styles/styled";

interface CardProps {
  delay: number;
  title: string;
  description: string;
  link: string;
}

const AnimatedCard = styled(Card)<{ delay: number }>(({ delay }) => ({
  opacity: 0,
  transform: "translateY(20px)",
  animation: `fadeIn 0.5s ease forwards`,
  animationDelay: `${delay}s`,

  "@keyframes fadeIn": {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
}));

const ProjectCard: React.FC<CardProps> = ({ delay, title, description, link }) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <AnimatedCard sx={{ maxWidth: 345 }} delay={delay}>
      <CardContent>
        <Typography textAlign={"center"} gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography textAlign={"center"} variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Link target="_self" href={link} underline="none" color="inherit">
          <StyledButton>
            <GitHubIcon /> github
          </StyledButton>
        </Link>
      </CardActions>
    </AnimatedCard>
  </Box>
);

export default ProjectCard;
