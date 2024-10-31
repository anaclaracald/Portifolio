import { Container, Typography } from '@mui/material';
import styled from '@mui/material/styles/styled';


const StyledAboutSection = styled('section')(({ theme }) => ({
    backgroundColor: theme.palette.secondary.light,
    height: "105vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up('xs')]: { 
    paddingTop: "100px",
    },
    [theme.breakpoints.up('md')]: { 
        paddingTop: "0"
    }
  // ... other styles as needed
}));

const Home = () => {
  return (
    <StyledAboutSection>
      <Container maxWidth="lg">
        <Typography variant="h3" textAlign="center" color="primary">
        About Me
        </Typography>
        
        <Typography variant="body1" textAlign="center" color="textSecondary">
            <br></br>Olá, sou estudante de Ciência da Computação pela Universidade Católica de Brasília. Minha jornada na programação começou em 2023, por pura curiosidade, ao me deparar com tutoriais de Python no YouTube. 
        </Typography>
        <Typography variant="body1" textAlign="center" color="textSecondary">
            <br></br>Sempre fui apaixonada por idiomas e, por conta própria, alcancei o nível C1 em inglês. Na faculdade, descobri a Programação Orientada a Objetos e tenho me aprofundado nela.
        </Typography>
        <Typography variant="body1" textAlign="center" color="textSecondary">
            <br></br>Estou muito entusiasmada com a área de TI e os eventos que participo me proporcionam uma troca de experiências e conhecimentos valiosa.
        </Typography>
        <Typography variant="body1" textAlign="center" color="textSecondary" >
            <br></br>Acredito que o aprendizado contínuo e a busca por novos desafios são fundamentais para o meu crescimento profissional.
        </Typography>
        <Typography variant="h6" textAlign="left" color="primary">
        <br />Curiosidades:
        </Typography>
        <Typography variant="body1" textAlign="justify" color="textSecondary">
        <ul>
            <li>Minha comida favorita é pizza</li>
            <li>Meu hobby preferido é viajar, ler e estar com as pessoas que amo</li>
            <li>Sou super fã de fórmula 1, futebol e vôlei</li>
            <li>Também gosto de cozinhar, cantar e tocar alguns instrumentos</li>
        </ul>
        </Typography>
      </Container>
    </StyledAboutSection>
  );
};

export default Home;