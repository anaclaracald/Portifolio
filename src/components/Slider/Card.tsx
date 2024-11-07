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
          Diversas funcionalidades. Linguagens e tecnologias: C.
        </Typography>
      </CardContent>
      <CardActions >
        <StyledButton>
          <Link target="_blank" href="https://github.com/anaclaracald/linguagemC/blob/master/estruturaDados/Uni/SistemaMercado/SistemaMercado.c" underline="none" color="inherit">
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
          <Link target="_blank" href="https://github.com/anaclaracald/gerenciamento-pedidos" underline="none" color="inherit">
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
          <Link target="_blank" href="https://github.com/anaclaracald/sistema_recomendacao_livros" underline="none" color="inherit">
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
          Esse portifólio foi feito com React e TypeScript. Me permitiu aprender um pouco mais sobre essas tecnologias no Front-end.
        </Typography>
      </CardContent>
      <CardActions>
        <StyledButton>
          <Link target="_blank" href="https://github.com/anaclaracald/Portifolio" underline="none" color="inherit">
            <GitHubIcon></GitHubIcon>github
          </Link>
        </StyledButton>
        
      </CardActions>
    </Card>
  );
}

export { Card1, Card2, Card3, Card4 };