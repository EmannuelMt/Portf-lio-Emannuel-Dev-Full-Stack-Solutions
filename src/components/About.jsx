import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaAws,
  FaCode,
  FaRocket,
  FaLightbulb,
  FaComments,
  FaSearch,
  FaSync,
  FaCalendar,
  FaPalette,
  FaGraduationCap,
  FaProjectDiagram,
  FaUserCheck,
  FaChartLine,
  FaTools
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiExpress, 
  SiMongodb,
  SiPostman
} from 'react-icons/si';
import './About.css';

// Importando assets
import profilePhoto from '../assets/images/IMG-20250323-WA0010-DWVwJOn1.jpg';
import fallbackPhoto from '../assets/images/AIDrawing_250911_d80e2d99-024a-4ae2-bd8e-9c4422800165_0_MiriCanvas-CbKexC7c.png';

const About = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const techStack = {
    frontend: [
      { 
        name: 'HTML5', 
        description: 'Domínio completo de semântica HTML5, acessibilidade e estruturação moderna para aplicações web responsivas.', 
        level: 95, 
        category: 'Avançado',
        icon: <FaHtml5 className="tech-icon" />,
        color: '#E34F26'
      },
      { 
        name: 'CSS3', 
        description: 'Especialista em CSS moderno incluindo Grid, Flexbox, animações e design systems responsivos.', 
        level: 92, 
        category: 'Avançado',
        icon: <FaCss3Alt className="tech-icon" />,
        color: '#1572B6'
      },
      { 
        name: 'JavaScript', 
        description: 'Domínio de ES6+, manipulação de DOM, APIs assíncronas e desenvolvimento de aplicações interativas.', 
        level: 88, 
        category: 'Avançado',
        icon: <FaJs className="tech-icon" />,
        color: '#F7DF1E'
      },
      { 
        name: 'React', 
        description: 'Experiência em React Hooks, Context API, componentes funcionais e desenvolvimento de interfaces modernas.', 
        level: 85, 
        category: 'Avançado',
        icon: <FaReact className="tech-icon" />,
        color: '#61DAFB'
      }
    ],
    backend: [
      { 
        name: 'Node.js', 
        description: 'Desenvolvimento de APIs RESTful com foco em performance, segurança e boas práticas de código.', 
        level: 38, 
        category: 'Intermediário',
        icon: <FaNodeJs className="tech-icon" />,
        color: '#339933'
      },
      { 
        name: 'MongoDB', 
        description: 'Modelagem de dados, consultas eficientes e integração com aplicações Node.js e Express.', 
        level: 32, 
        category: 'Avançado',
        icon: <SiMongodb className="tech-icon" />,
        color: '#47A248'
      },
      { 
        name: 'Express', 
        description: 'Criação de servidores robustos com middlewares, rotas organizadas e tratamento de erros.', 
        level: 35, 
        category: 'Intermediário',
        icon: <SiExpress className="tech-icon" />,
        color: '#000000'
      },
      { 
        name: 'APIs REST', 
        description: 'Design e implementação de APIs RESTful seguindo padrões REST e documentação clara.', 
        level: 20, 
        category: 'Avançado',
        icon: <SiPostman className="tech-icon" />,
        color: '#FF6C37'
      }
    ],
    tools: [
      { 
        name: 'Git & GitHub', 
        description: 'Controle de versão avançado, trabalho em equipe e deploy contínuo com boas práticas.', 
        level: 25, 
        category: 'Avançado',
        icon: <FaGitAlt className="tech-icon" />,
        color: '#F05032'
      },
      { 
        name: 'Docker', 
        description: 'Containerização de aplicações e configuração de ambientes de desenvolvimento consistentes.', 
        level: 25, 
        category: 'Intermediário',
        icon: <FaDocker className="tech-icon" />,
        color: '#2496ED'
      },
      { 
        name: 'TypeScript', 
        description: 'Desenvolvimento type-safe com TypeScript para maior confiabilidade e manutenibilidade.', 
        level: 15, 
        category: 'Intermediário',
        icon: <SiTypescript className="tech-icon" />,
        color: '#3178C6'
      },
      { 
        name: 'Figma', 
        description: 'Prototipagem e colaboração em design para desenvolvimento front-end preciso.', 
        level: 20, 
        category: 'Intermediário',
        icon: <FaFigma className="tech-icon" />,
        color: '#F24E1E'
      }
    ]
  };

  const softSkills = [
    { 
      skill: 'Comunicação Clara', 
      description: 'Diálogo direto e transparente em todas as etapas do projeto', 
      icon: <FaComments className="skill-icon" />,
      color: '#3B82F6'
    },
    { 
      skill: 'Resolução de Problemas', 
      description: 'Abordagem prática para desafios técnicos e criativos', 
      icon: <FaSearch className="skill-icon" />,
      color: '#10B981'
    },
    { 
      skill: 'Adaptabilidade', 
      description: 'Flexibilidade para diferentes projetos e necessidades', 
      icon: <FaSync className="skill-icon" />,
      color: '#8B5CF6'
    },
    { 
      skill: 'Organização', 
      description: 'Metodologia ágil e entregas dentro do prazo', 
      icon: <FaCalendar className="skill-icon" />,
      color: '#F59E0B'
    },
    { 
      skill: 'Criatividade', 
      description: 'Soluções inovadoras e atenção aos detalhes visuais', 
      icon: <FaPalette className="skill-icon" />,
      color: '#EC4899'
    },
    { 
      skill: 'Aprendizado Contínuo', 
      description: 'Busca constante por novas tecnologias e melhores práticas', 
      icon: <FaGraduationCap className="skill-icon" />,
      color: '#7C3AED'
    }
  ];

  const stats = [
    { 
      number: '15+', 
      label: 'Projetos Concluídos', 
      icon: <FaProjectDiagram className="stat-icon" />,
      color: 'var(--accent-purple)'
    },
    { 
      number: '100%', 
      label: 'Clientes Satisfeitos', 
      icon: <FaUserCheck className="stat-icon" />,
      color: 'var(--accent-green)'
    },
    { 
      number: '2', 
      label: 'Anos de Experiência', 
      icon: <FaChartLine className="stat-icon" />,
      color: 'var(--accent-blue)'
    },
    { 
      number: '10+', 
      label: 'Tecnologias Dominadas', 
      icon: <FaTools className="stat-icon" />,
      color: 'var(--accent-orange)'
    }
  ];

  const tabConfig = {
    frontend: { icon: <FaCode className="tab-icon" />, label: 'Front-end' },
    backend: { icon: <FaDatabase className="tab-icon" />, label: 'Back-end' },
    tools: { icon: <FaTools className="tab-icon" />, label: 'Ferramentas' }
  };

  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  const getLevelColor = (level) => {
    if (level >= 85) return 'var(--accent-green)';
    if (level >= 75) return 'var(--accent-blue)';
    return 'var(--accent-orange)';
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Header Section */}
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Sobre Mim
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Conheça minha jornada, habilidades e paixão pelo desenvolvimento
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="about-grid">
          {/* Photo Column */}
          <motion.div 
            className="about-photo-column"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="photo-container"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="photo-frame">
                <img 
                  src={profilePhoto} 
                  alt="Emannuel Matos - Desenvolvedor Fullstack" 
                  className="profile-photo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="photo-fallback">
                  <img src={fallbackPhoto} alt="Emannuel Matos" />
                </div>
                
                {/* Experience Badge */}
                <motion.div 
                  className="experience-badge"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, type: "spring", delay: 0.4 }}
                >
                  <FaRocket className="badge-icon" />
                  <span className="exp-number">2+</span>
                  <span className="exp-text">Anos</span>
                </motion.div>

                {/* Floating Tech Icons */}
                <div className="floating-tech">
                  {techStack.frontend.slice(0, 4).map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="floating-icon"
                      style={{ '--index': index }}
                      animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        delay: index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {tech.icon}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div 
              className="stats-container"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="stat-card"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="stat-icon-wrapper" style={{ color: stat.color }}>
                      {stat.icon}
                    </div>
                    <div className="stat-content">
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            className="about-content-column"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Profile Section */}
            <motion.div 
              className="profile-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="profile-header">
                <FaLightbulb className="profile-title-icon" />
                <h3 className="profile-title">Minha Jornada</h3>
              </div>
              <div className="profile-content">
                <p>
                  Sou <strong>Emannuel Matos</strong>, tenho 20 anos e sou um desenvolvedor web apaixonado por transformar ideias em experiências digitais únicas, rápidas e acessíveis. 
                </p>
                <p>
                  Minha missão é criar <strong>sites modernos, bots automatizados e landing pages estratégicas</strong> para pequenos negócios, criadores de conteúdo e empreendedores que querem se destacar online — sem complicação, enrolação ou promessas vazias.
                </p>
                <p>
                  Trabalho com foco em <strong>agilidade, personalização e eficiência</strong>, aliando técnica, criatividade e suporte real. Cada projeto é construído como uma missão: com planejamento, dedicação e entrega pontual.
                </p>
                <p>
                  Além do desenvolvimento, sou uma pessoa que <strong>gosta de aprender sempre</strong>, buscando novas tecnologias e tendências para entregar o melhor aos meus clientes. Valorizo a comunicação transparente e o relacionamento direto, porque acredito que isso faz toda a diferença no resultado final.
                </p>
              </div>
            </motion.div>

            {/* Tech Stack Section */}
            <motion.div 
              className="tech-stack-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="section-header">
                <FaCode className="section-icon" />
                <h3 className="section-subtitle">Stack Tecnológico</h3>
              </div>
              
              {/* Tabs */}
              <div className="tech-tabs">
                {Object.keys(techStack).map((tab) => (
                  <motion.button
                    key={tab}
                    className={`tech-tab ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => handleTabChange(tab)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tabConfig[tab].icon}
                    {tabConfig[tab].label}
                  </motion.button>
                ))}
              </div>

              {/* Tech Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  className="tech-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {techStack[activeTab].map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="tech-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="tech-header">
                        <div className="tech-icon-wrapper" style={{ color: tech.color }}>
                          {tech.icon}
                        </div>
                        <div className="tech-info">
                          <h4>{tech.name}</h4>
                          <span className="tech-category">{tech.category}</span>
                        </div>
                        <div className="tech-percentage">{tech.level}%</div>
                      </div>
                      <p className="tech-description">{tech.description}</p>
                      <div className="progress-container">
                        <div className="progress-bar">
                          <motion.div 
                            className="progress-fill"
                            initial={{ width: 0 }}
                            animate={{ width: `${tech.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                            style={{ backgroundColor: getLevelColor(tech.level) }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>

        {/* Soft Skills Section */}
        <motion.div 
          className="soft-skills-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="section-header">
            <FaUserCheck className="section-icon" />
            <motion.h3 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Habilidades que Fazem a Diferença
            </motion.h3>
          </div>
          <div className="soft-skills-grid">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.skill}
                className="soft-skill-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="skill-icon-wrapper" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <div className="skill-content">
                  <h4>{skill.skill}</h4>
                  <p>{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;