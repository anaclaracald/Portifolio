import { Container, Grid, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import ProjectCard from "../../../../components/Slider/Card";
import styled from "@mui/material/styles/styled";

const StyledProjectsSection = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.contrastText,
  minHeight: "105vh",
  display: "flex",
  alignItems: "center",
}));

const projects = [
  {
    title: "Sistema Mercado",
    description: "Este projeto implementa um Sistema de Mercado simples em linguagem C, onde os usuários podem cadastrar produtos, adicioná-los a um carrinho de compras, visualizar o carrinho, fechar o pedido, entre outras funcionalidades. ",
    link: "https://github.com/anaclaracald/linguagemC/blob/master/estruturaDados/Uni/SistemaMercado/SistemaMercado.c",
  },
  {
    title: "Sistema de gerenciamento de Pedidos",
    description: "Este projeto é um sistema de gerenciamento de pedidos para restaurantes. Ele permite que o restaurante controle os pedidos de clientes, a disponibilidade dos produtos, e o envio de notificações para clientes e para a cozinha.",
    link: "https://github.com/anaclaracald/gerenciamento-pedidos",
  },
  {
    title: "Sistema de recomendações de livros",
    description: "Este é um sistema de recomendação de livros que utiliza inteligência artificial para recomendar livros aos usuários com base em suas preferências e hábitos de leitura. ",
    link: "https://github.com/anaclaracald/sistema_recomendacao_livros",
  },
  {
    title: "Portfólio",
    description: "Este é o código-fonte do meu portfólio pessoal, desenvolvido com React e TypeScript, para apresentar meus projetos, habilidades e experiência profissional de forma interativa e visualmente atraente.",
    link: "https://github.com/anaclaracald/Portifolio",
  },
];

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });

  return (
    <StyledProjectsSection ref={ref} id="projects">
      <Container>
        <Typography paddingBottom="100px" variant="h3" textAlign="center" color="primary">
          Projects
        </Typography>
        <Grid container spacing={2}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={3} key={project.title}>
              {inView && (
                <ProjectCard
                  delay={index * 1} 
                  title={project.title}
                  description={project.description}
                  link={project.link}
                />
              )}
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledProjectsSection>
  );
};

export default Home;
