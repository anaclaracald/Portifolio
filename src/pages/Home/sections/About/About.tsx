import { Container, Grid, Typography } from '@mui/material';
import styled from '@mui/material/styles/styled';

const StyledAboutSection = styled('section')(({ theme }) => ({
  background: `linear-gradient(90deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.dark})`,
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(4),
}));

const FadeInContainer = styled(Container)(({}) => ({
  transition: "transform 0.7s ease",
  opacity: 0,
  transform: "scale(1)",
  animation: `fadeIn 1s ease forwards 2s`,

  '@keyframes fadeIn': {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
}));

const Home = () => {
  return (
    <StyledAboutSection id="about">
      <FadeInContainer maxWidth="md">
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h3" textAlign="center" color="primary.contrastText" gutterBottom>
              About Me
            </Typography>
            <Typography variant="h6" textAlign="center" color="textSecondary.dark" paragraph>
              Olá, sou estudante de Ciência da Computação pela Universidade Católica de Brasília. Minha jornada na programação começou em 2023, por pura curiosidade, ao me deparar com tutoriais de Python no YouTube. 
            </Typography>
            <Typography variant="h6" textAlign="center" color="textSecondary.dark" paragraph>
              Sempre fui apaixonada por idiomas e, por conta própria, alcancei o nível C1 em inglês. Na faculdade, descobri a Programação Orientada a Objetos e tenho me aprofundado nela.
            </Typography>
            <Typography variant="h6" textAlign="center" color="textSecondary.dark" paragraph>
              Estou muito entusiasmada com a área de TI e os eventos que participo me proporcionam uma troca de experiências e conhecimentos valiosa.
            </Typography>
            <Typography variant="h6" textAlign="center" color="textSecondary.dark" paragraph>
              Acredito que o aprendizado contínuo e a busca por novos desafios são fundamentais para o meu crescimento profissional.
            </Typography>
            <Typography variant="h5" textAlign="center" color="primary.contrastText" gutterBottom>
              - Curiosidades -
            </Typography>
            <Typography variant="h6" textAlign="center" color="textSecondary.dark">
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>Minha comida favorita é pizza</li>
                <li>Gosto de viajar, ler, cozinhar e estar com a família e os amigos</li>
                <li>Sou bailarina e sou super fã de fórmula 1 e futebol</li>
                <li>Já traduzi um livro infantil para o inglês e tenho poesias publicadas em coletâneas e antologias</li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </FadeInContainer>
    </StyledAboutSection>
  );
};

export default Home;
