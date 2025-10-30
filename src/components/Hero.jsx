import { useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaDatabase, 
  FaPalette, 
  FaServer, 
  FaDocker, 
  FaGitAlt,
  FaAws,
  FaReact,
  FaNodeJs,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaGraduationCap,
  FaRocket,
  FaMapMarkerAlt,
  FaEnvelope,
  FaDownload,
  FaGithub,
  FaCheckCircle,
  FaTools,
  FaUserTie,
  FaCertificate,
  FaStar
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiPostgresql, 
  SiMongodb,
  SiExpress,
  SiPostman
} from 'react-icons/si';
import './Hero.css';

// Importando assets profissionais
import profileImage from '../assets/images/logo.png';
import signatureImage from '../assets/images/logo.png';
import verifiedBadge from '../assets/images/logo.png';

// Dados executivos atualizados e realistas
const EXECUTIVE_DATA = {
  profile: {
    name: "Emannuel Matos",
    title: "Desenvolvedor Fullstack Júnior",
    experience: "2 anos",
    specialization: "Desenvolvimento de Aplicações Web Modernas",
    status: "Disponível para oportunidades",
    location: "Brasil",
    email: "emannueldevfullstacksolutions@gmail.com"
  },
  metrics: [
    { 
      value: "15+", 
      label: "Projetos Concluídos", 
      suffix: "", 
      color: "purple",
      icon: <FaCode className="metric-icon" />
    },
    { 
      value: "95", 
      label: "Taxa de Entrega", 
      suffix: "%", 
      color: "green",
      icon: <FaCheckCircle className="metric-icon" />
    },
    { 
      value: "10K+", 
      label: "Linhas de Código", 
      suffix: "", 
      color: "blue",
      icon: <FaStar className="metric-icon" />
    },
  ],
  techStack: [
    { 
      name: "React", 
      category: "Frontend",
      level: "intermediário",
      years: "6 meses",
      icon: <FaReact className="tech-stack-icon" />,
      proficiency: 70,
      color: "#61DAFB"
    },
    { 
      name: "Node.js", 
      category: "Backend",
      level: "intermediário", 
      years: "3 meses",
      icon: <FaNodeJs className="tech-stack-icon" />,
      proficiency: 60,
      color: "#339933"
    },
    { 
      name: "JavaScript", 
      category: "Linguagem",
      level: "avançado",
      years: "1 ano",
      icon: <FaJs className="tech-stack-icon" />,
      proficiency: 85,
      color: "#F7DF1E"
    },
    { 
      name: "CSS3", 
      category: "Estilização",
      level: "avançado",
      years: "1 ano",
      icon: <FaCss3Alt className="tech-stack-icon" />,
      proficiency: 80,
      color: "#1572B6"
    },
    { 
      name: "PostgreSQL", 
      category: "Banco de Dados",
      level: "básico",
      years: "4 meses",
      icon: <SiPostgresql className="tech-stack-icon" />,
      proficiency: 50,
      color: "#336791"
    },
    { 
      name: "Docker", 
      category: "DevOps",
      level: "básico",
      years: "3 meses",
      icon: <FaDocker className="tech-stack-icon" />,
      proficiency: 40,
      color: "#2496ED"
    }
  ],
  certifications: [
    { name: "HTML5 e CSS3 - Curso Completo", icon: <FaHtml5 /> },
    { name: "JavaScript Moderno ES6+", icon: <FaJs /> },
    { name: "Python para Data Science", icon: <FaCode /> },
    { name: "React & Redux - Frontend Development", icon: <FaReact /> },
    { name: "Docker & Containers", icon: <FaDocker /> },
    { name: "MySQL & Database Design", icon: <FaDatabase /> },
    { name: "Git e GitHub - Controle de Versão", icon: <FaGitAlt /> }
  ],
  skills: {
    technical: [
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "Python", icon: <FaCode /> }
    ],
    soft: [
      { name: "Comunicação", icon: <FaUserTie /> },
      { name: "Trabalho em Equipe", icon: <FaUserTie /> },
      { name: "Resolução de Problemas", icon: <FaTools /> },
      { name: "Aprendizado Rápido", icon: <FaGraduationCap /> }
    ]
  }
};

const ExecutiveProfile = () => {
  const handleContact = useCallback(() => {
    window.open('mailto:emannueldevfullstacksolutions@gmail.com?subject=Proposta de Projeto', '_blank');
  }, []);

  const handleDownloadCV = useCallback(() => {
    window.open('/cv-emannuel-matos.pdf', '_blank');
  }, []);

  const handleGitHub = useCallback(() => {
    window.open('https://github.com/emannuelmatos', '_blank');
  }, []);

  const getProficiencyColor = (proficiency) => {
    if (proficiency >= 80) return '#10B981';
    if (proficiency >= 60) return '#F59E0B';
    return '#EF4444';
  };

  const getProficiencyLabel = (proficiency) => {
    if (proficiency >= 80) return 'Avançado';
    if (proficiency >= 60) return 'Intermediário';
    return 'Básico';
  };

  return (
    <section id="executive-profile" className="executive-profile-section">
      <div className="container">
        {/* Header Executivo */}
        <motion.div 
          className="executive-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="executive-badges">
            <motion.div 
              className="executive-badge primary"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <FaCertificate className="badge-icon" />
              <span>Desenvolvedor Fullstack</span>
            </motion.div>
            <motion.div 
              className="executive-badge secondary"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <FaRocket className="badge-icon" />
              <span>Em Crescimento</span>
            </motion.div>
          </div>
          <motion.h2 
            className="executive-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Perfil Profissional
          </motion.h2>
        </motion.div>

        <motion.div 
          className="executive-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {/* Coluna da Imagem */}
          <motion.div 
            className="executive-image-column"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="profile-image-container"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="image-frame executive-frame">
                <img 
                  src={profileImage} 
                  alt="Emannuel Matos - Desenvolvedor Fullstack" 
                  loading="lazy"
                  className="executive-photo"
                />
                
                {/* Overlay de Tech Stack */}
                <motion.div 
                  className="tech-stack-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="tech-stack-content">
                    <div className="tech-stack-header">
                      <FaTools className="section-icon" />
                      <h4>Stack Tecnológico</h4>
                    </div>
                    <div className="tech-stack-grid">
                      {EXECUTIVE_DATA.techStack.map((tech, index) => (
                        <motion.div 
                          key={tech.name}
                          className="tech-item executive-tech"
                          whileHover={{ scale: 1.05, y: -2 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <div className="tech-icon-wrapper" style={{ color: tech.color }}>
                            {tech.icon}
                          </div>
                          <div className="tech-info">
                            <span className="tech-name">{tech.name}</span>
                            <span className="tech-category">{tech.category}</span>
                            <div className="proficiency-bar">
                              <div 
                                className="proficiency-fill"
                                style={{ 
                                  width: `${tech.proficiency}%`,
                                  backgroundColor: getProficiencyColor(tech.proficiency)
                                }}
                              />
                            </div>
                            <span className="tech-level">
                              {getProficiencyLabel(tech.proficiency)} • {tech.years}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Badge de Experiência */}
                <motion.div 
                  className="experience-badge"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, type: "spring" }}
                >
                  <FaGraduationCap className="badge-icon" />
                  <span className="exp-years">{EXECUTIVE_DATA.profile.experience}</span>
                  <span className="exp-label">Experiência</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Métricas Rápidas */}
            <motion.div 
              className="executive-metrics"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {EXECUTIVE_DATA.metrics.map((metric, index) => (
                <motion.div 
                  key={metric.label}
                  className={`metric-item metric-${metric.color}`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="metric-icon-wrapper">
                    {metric.icon}
                  </div>
                  <div className="metric-content">
                    <span className="metric-value">
                      {metric.value}<span className="metric-suffix">{metric.suffix}</span>
                    </span>
                    <span className="metric-label">{metric.label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills Rápidas */}
            <motion.div 
              className="skills-preview"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="skills-section">
                <div className="skills-header">
                  <FaCode className="skills-icon" />
                  <h4>Habilidades Técnicas</h4>
                </div>
                <div className="skills-tags">
                  {EXECUTIVE_DATA.skills.technical.map((skill, index) => (
                    <motion.span 
                      key={skill.name}
                      className="skill-tag"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="skill-icon">{skill.icon}</span>
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div className="skills-section">
                <div className="skills-header">
                  <FaUserTie className="skills-icon" />
                  <h4>Habilidades Interpessoais</h4>
                </div>
                <div className="skills-tags">
                  {EXECUTIVE_DATA.skills.soft.map((skill, index) => (
                    <motion.span 
                      key={skill.name}
                      className="skill-tag soft"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="skill-icon">{skill.icon}</span>
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Coluna de Informações */}
          <motion.div 
            className="executive-info-column"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Header de Informações */}
            <div className="executive-info-header">
              <motion.h1 
                className="executive-name"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {EXECUTIVE_DATA.profile.name}
                <motion.span 
                  className="location-tag"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <FaMapMarkerAlt className="location-icon" />
                  {EXECUTIVE_DATA.profile.location}
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="executive-role"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {EXECUTIVE_DATA.profile.title}
              </motion.p>

              <motion.div 
                className="contact-info"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <FaEnvelope className="contact-icon" />
                <span className="contact-email">{EXECUTIVE_DATA.profile.email}</span>
              </motion.div>

              <motion.div 
                className="availability-status"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="status-indicator"></div>
                <span>{EXECUTIVE_DATA.profile.status}</span>
              </motion.div>
            </div>

            {/* Especialização */}
            <motion.div 
              className="specialization-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="section-header">
                <FaPalette className="section-icon" />
                <h3 className="section-title">Área de Especialização</h3>
              </div>
              <p className="specialization-text">
                {EXECUTIVE_DATA.profile.specialization}
              </p>
              <div className="expertise-tags">
                {[
                  { name: "Desenvolvimento Frontend", icon: <FaCode /> },
                  { name: "APIs REST", icon: <FaServer /> },
                  { name: "Responsive Design", icon: <FaPalette /> },
                  { name: "Clean Code", icon: <FaCode /> },
                  { name: "Versionamento", icon: <FaGitAlt /> },
                  { name: "UI/UX", icon: <FaPalette /> }
                ].map((skill) => (
                  <motion.span 
                    key={skill.name}
                    className="expertise-tag"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="expertise-icon">{skill.icon}</span>
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Certificações */}
            <motion.div 
              className="certifications-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="section-header">
                <FaGraduationCap className="section-icon" />
                <h3 className="section-title">Certificações & Cursos</h3>
              </div>
              <div className="certifications-grid">
                {EXECUTIVE_DATA.certifications.map((cert, index) => (
                  <motion.div 
                    key={cert.name}
                    className="certification-item"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="cert-icon-wrapper">
                      {cert.icon}
                    </div>
                    <span>{cert.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div 
              className="executive-cta"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="cta-buttons">
                <motion.button 
                  className="cta-button primary"
                  onClick={handleContact}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope className="button-icon" />
                  <span>Contato Direto</span>
                </motion.button>
                
                <motion.button 
                  className="cta-button secondary"
                  onClick={handleDownloadCV}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload className="button-icon" />
                  <span>Baixar CV</span>
                </motion.button>

                <motion.button 
                  className="cta-button github"
                  onClick={handleGitHub}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="button-icon" />
                  <span>Ver GitHub</span>
                </motion.button>
              </div>

              {/* Assinatura */}
              <motion.div 
                className="signature-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <img 
                  src={signatureImage} 
                  alt="Assinatura Emannuel Matos" 
                  className="signature"
                />
                <div className="signature-info">
                  <span className="signature-label">Emannuel Matos</span>
                  <span className="signature-role">Desenvolvedor Fullstack</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExecutiveProfile;