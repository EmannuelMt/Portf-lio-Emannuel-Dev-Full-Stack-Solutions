import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="logo" style={{ color: 'white', fontSize: '1.8rem', marginBottom: '1rem' }}>
              Emannuel Dev
            </div>
            <p style={{ color: '#cbd5e1', marginBottom: '1rem' }}>
              Full Stack Solutions - Transformando ideias em realidade digital com excelência e inovação.
            </p>
            <div className="social-links">
              <a href="https://wa.me/5562984317595" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="mailto:emannueldevfullstacksolutions@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 style={{ color: 'white', marginBottom: '1rem' }}>Links Rápidos</h4>
            <ul style={{ listStyle: 'none', color: '#cbd5e1' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="#home" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Home</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="#about" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Sobre</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="#services" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Serviços</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="#plans" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Planos</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="#contact" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Contato</a></li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p style={{ color: '#cbd5e1', margin: 0 }}>
            © {currentYear} Emannuel Dev Full Stack Solutions. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;