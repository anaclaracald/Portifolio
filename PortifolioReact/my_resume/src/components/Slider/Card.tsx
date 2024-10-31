import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from '@mui/material';
import StyledButton from '../StyledButton/StyledButton';


function Card1() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Sistema Mercado"
        height="140"
        image="/images/montanha.jpg" 
      />
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

// Card 2
function Card2() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Montanha"
        height="140"
        image="/images/montanha.jpg" // Substitua por seu caminho de imagem
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Natureza
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Explore a beleza da natureza.
        </Typography>
      </CardContent>
      <CardActions>
        <StyledButton>
          <Link target="_blank" href="https://github.com/anaclaracald/linguagemC/blob/master/estruturaDados/Uni/SistemaMercado/SistemaMercado.c" underline="none" color="inherit">
            <GitHubIcon></GitHubIcon>github
          </Link>
        </StyledButton>
      </CardActions>
    </Card>
  );
}

// Card 3
function Card3() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Montanha"
        height="140"
        image="/images/montanha.jpg" // Substitua por seu caminho de imagem
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Natureza
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Explore a beleza da natureza.
        </Typography>
      </CardContent>
      <CardActions>
        <StyledButton>
          <Link target="_blank" href="https://github.com/anaclaracald/linguagemC/blob/master/estruturaDados/Uni/SistemaMercado/SistemaMercado.c" underline="none" color="inherit">
            <GitHubIcon></GitHubIcon>github
          </Link>
        </StyledButton>
      </CardActions>
    </Card>
  );
}

// Card 4
function Card4() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Montanha"
        height="140"
        image="/images/montanha.jpg" // Substitua por seu caminho de imagem
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Natureza
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Explore a beleza da natureza.
        </Typography>
      </CardContent>
      <CardActions>
        <StyledButton>
          <Link target="_blank" href="https://github.com/anaclaracald/linguagemC/blob/master/estruturaDados/Uni/SistemaMercado/SistemaMercado.c" underline="none" color="inherit">
            <GitHubIcon></GitHubIcon>github
          </Link>
        </StyledButton>
        
      </CardActions>
    </Card>
  );
}

export { Card1, Card2, Card3, Card4 };