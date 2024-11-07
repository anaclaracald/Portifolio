import GitHubIcon from '@mui/icons-material/GitHub';
import { FaJava, FaReact, FaPython,FaHtml5, FaCss3  } from "react-icons/fa";
import { SiSpring, SiMysql, SiSpringboot, SiTypescript, SiN8N, SiJavascript  } from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ComponentType;
}

const skills: Skill[] = [
  {name: 'HTML',icon: FaHtml5 ,},
  {name: 'CSS', icon: FaCss3 ,},
  {name: 'React.js', icon: FaReact,},
  {name: 'TypeScript ', icon: SiTypescript ,},
  {name: 'Java', icon: FaJava,},
  {name: 'Python ', icon: FaPython ,},
  {name: 'JavaScript', icon: SiJavascript,},
  {name: 'Spring', icon: SiSpring,},
  {name: 'Spring-boot ', icon: SiSpringboot ,},
  {name: 'MySQL', icon: SiMysql,},
  {name: 'Git e GitHub', icon: GitHubIcon,},
  {name: 'n8n', icon: SiN8N,},
];

export default skills;
