import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaSun, 
  FaMoon, 
  FaBars, 
  FaTimes,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaCode,
  FaEnvelope,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaRocket,
  FaStar,
  FaMagic
} from 'react-icons/fa';
import { 
  SiNextdotjs,
  SiTypescript 
} from 'react-icons/si';
import './Header.css';

// Importando a logo (ajuste o caminho conforme sua estrutura)
import logoImage from '../assets/images/logo.png';

const Header = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Atualizar seção ativa com threshold melhorado
      const sections = ['home', 'about', 'projects', 'services', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  useEffect(() => {
    // Simular loading da logo
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { 
      name: 'Início', 
      href: '#home', 
      icon: <FaHome className="nav-icon" />,
      delay: 0.1
    },
    { 
      name: 'Sobre', 
      href: '#about', 
      icon: <FaUser className="nav-icon" />,
      delay: 0.2
    },
    { 
      name: 'Projetos', 
      href: '#projects', 
      icon: <FaProjectDiagram className="nav-icon" />,
      delay: 0.3
    },
    { 
      name: 'Serviços', 
      href: '#services', 
      icon: <FaCode className="nav-icon" />,
      delay: 0.4
    },
    { 
      name: 'Contato', 
      href: '#contact', 
      icon: <FaEnvelope className="nav-icon" />,
      delay: 0.5
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/EmannuelMt',
      icon: <FaGithub className="social-icon" />,
      color: 'var(--social-github)'
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/5562984317595',
      icon: <FaWhatsapp className="social-icon" />,
      color: 'var(--social-whatsapp)'
    }
  ];

  const handleNavClick = useCallback((href, name) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  const handleDownloadCV = useCallback(() => {
    window.open('/cv-emannuel-matos.pdf', '_blank');
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const handleLogoClick = useCallback((e) => {
    e.preventDefault();
    handleNavClick('#home', 'Home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [handleNavClick]);

  // Variantes de animação
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -180 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.9 }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: i * 0.1 + 0.3,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -2,
      transition: { duration: 0.2 }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.4,
        ease: [0.32, 0.72, 0, 1]
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.32, 0.72, 0, 1]
      }
    }
  };

  const themeToggleVariants = {
    light: { 
      rotate: 0, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    dark: { 
      rotate: 180, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    hover: { 
      scale: 1.1,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.9,
      transition: { duration: 0.1 }
    }
  };

  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2
  }));

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''} ${theme}`}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Elements - Igual ao Hero */}
      <div className="header-background">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="floating-element"
            style={{
              width: element.size,
              height: element.size,
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        <div className="header-gradient"></div>
      </div>

      <div className="container">
        <div className="nav-content">
          {/* Logo Profissional - Igual ao Hero */}
          <motion.div 
            className="logo-container"
            variants={logoVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <a 
              href="#home"
              className="logo"
              onClick={handleLogoClick}
            >
              <div className="logo-image-container">
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div
                      key="loading"
                      className="logo-skeleton"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  ) : (
                    <motion.img
                      key="logo"
                      src={logoImage}
                      alt="Emannuel Dev - Fullstack Developer"
                      className="logo-image"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  )}
                </AnimatePresence>
                <div className="logo-fallback">
                  <FaRocket className="fallback-icon" />
                </div>
                
                {/* Badge de Tech Stack na Logo */}
                <motion.div 
                  className="logo-badge"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                >
                  <SiNextdotjs className="badge-icon" />
                </motion.div>
              </div>
              
              <div className="logo-text">
                <span className="logo-name">Emannuel</span>
                <span className="logo-title">Fullstack</span>
              </div>

              {/* Efeito de brilho na logo */}
              <div className="logo-glow"></div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <ul className="nav-links">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.name}
                  custom={index}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <a 
                    href={item.href}
                    className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, item.name);
                    }}
                  >
                    <span className="nav-icon-wrapper">
                      {item.icon}
                    </span>
                    <span className="nav-text">{item.name}</span>
                    <motion.div 
                      className="nav-indicator"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: activeSection === item.href.substring(1) ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="nav-hover-effect"></div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="nav-actions">
            {/* Social Links com Tooltip */}
            <motion.div 
              className="social-links"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.8 + index * 0.1,
                    type: "spring" 
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    y: -2,
                    color: social.color
                  }}
                  whileTap={{ scale: 0.9 }}
                  title={social.name}
                >
                  {social.icon}
                  <span className="social-tooltip">{social.name}</span>
                </motion.a>
              ))}
            </motion.div>
            {/* Mobile Menu Button */}
            <motion.button
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 1.1,
                type: "spring" 
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Menu mobile"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaTimes />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaBars />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="mobile-menu-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleMobileMenu}
              >
                <motion.div
                  className="mobile-menu-content"
                  variants={mobileMenuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Mobile Menu Header */}
                  <div className="mobile-menu-header">
                    <div className="mobile-logo">
                      <img 
                        src={logoImage} 
                        alt="Emannuel Dev"
                        className="mobile-logo-image"
                      />
                      <div className="mobile-logo-text">
                        <span>Emannuel</span>
                        <span>Fullstack</span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="mobile-nav">
                    <ul className="mobile-nav-links">
                      {navItems.map((item, index) => (
                        <motion.li
                          key={item.name}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          <a
                            href={item.href}
                            className={`mobile-nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavClick(item.href, item.name);
                            }}
                          >
                            <span className="mobile-nav-icon">
                              {item.icon}
                            </span>
                            <span className="mobile-nav-text">
                              {item.name}
                            </span>
                            <motion.div 
                              className="mobile-nav-indicator"
                              initial={{ scale: 0 }}
                              animate={{ scale: activeSection === item.href.substring(1) ? 1 : 0 }}
                            />
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </nav>

                  {/* Mobile Social Links */}
                  <div className="mobile-socials">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.7 }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        title={social.name}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div 
        className="scroll-progress"
        initial={{ scaleX: 0 }}
        animate={{ 
          scaleX: (window.scrollY / (document.body.scrollHeight - window.innerHeight)) || 0 
        }}
        transition={{ duration: 0.1 }}
      />
    </motion.header>
  );
};

export default Header;