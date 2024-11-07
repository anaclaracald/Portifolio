import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from '@mui/material';
import StyledButton from '../StyledButton/StyledButton';


function Card1() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sistema Mercado
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Este projeto implementa um Sistema de Mercado simples em linguagem C, onde os usuários podem cadastrar produtos, 
          adicioná-los a um carrinho de compras, visualizar o carrinho, fechar o pedido, entre outras funcionalidades. 
          O sistema simula operações essenciais de um mercado, como listagem de produtos e cálculo de subtotais no carrinho.
        </Typography>
      </CardContent>
      <CardActions >
        <StyledButton>
          <Link target="_self" href="https://github.com/anaclaracald/linguagemC/blob/master/estruturaDados/Uni/SistemaMercado/SistemaMercado.c" underline="none" color="inherit">
            <GitHubIcon></GitHubIcon>github
          </Link>
        </StyledButton>
      </CardActions>
    </Card>
  );
}

function Card2() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sistema de gerenciamento de Pedidos
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Aplicação para gerenciar pedidos em um restaurante. Permitindo o cadastro e gerenciamento de produtos do cardápio, clientes, pedidos e notificações para a cozinha e clientes.
        </Typography>
      </CardContent>
      <CardActions>
        <StyledButton>
          <Link target="_self" href="https://github.com/anaclaracald/gerenciamento-pedidos" underline="none" color="inherit">
            <GitHubIcon></GitHubIcon>github
          </Link>
        </StyledButton>
      </CardActions>
    </Card>
  );
}

function Card3() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sistema de recomendações de livros
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Este é um sistema de recomendação de livros que utiliza inteligência artificial para recomendar livros aos usuários com base em suas preferências e hábitos de leitura.
        </Typography>
      </CardContent>
      <CardActions>
        <StyledButton>
          <Link target="_self" href="https://github.com/anaclaracald/sistema_recomendacao_livros" underline="none" color="inherit">
            <GitHubIcon></GitHubIcon>github
          </Link>
        </StyledButton>
      </CardActions>
    </Card>
  );
}

function Card4() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Portifólio
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Este é o código-fonte do meu portfólio pessoal, desenvolvido com React e TypeScript, para apresentar meus projetos, 
          habilidades e experiência profissional de forma interativa e visualmente atraente.
        </Typography>
      </CardContent>
      <CardActions>
        <StyledButton>
          <Link target="_self" href="https://github.com/anaclaracald/Portifolio" underline="none" color="inherit">
            <GitHubIcon></GitHubIcon>github
          </Link>
        </StyledButton>
        
      </CardActions>
    </Card>
  );
}

export { Card1, Card2, Card3, Card4 };