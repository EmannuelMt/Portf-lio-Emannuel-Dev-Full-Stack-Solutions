import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCode, 
  FaPalette, 
  FaMobile, 
  FaRocket, 
  FaShieldAlt, 
  FaCog,
  FaStar,
  FaClock,
  FaCheck,
  FaMagic,
  FaLayerGroup,
  FaFilter,
  FaTimes,
  FaWhatsapp,
  FaCalendarCheck
} from 'react-icons/fa';
import { 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiFigma
} from 'react-icons/si';
import { servicesData, serviceCategories, serviceTypes } from '../data/projectsData';
import './Services.css';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeType, setActiveType] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices = servicesData.filter(service => {
    const categoryMatch = activeCategory === 'all' || service.category === activeCategory;
    const typeMatch = activeType === 'all' || service.type === activeType;
    return categoryMatch && typeMatch;
  });

  const handleCategoryChange = useCallback((categoryId) => {
    setActiveCategory(categoryId);
  }, []);

  const handleTypeChange = useCallback((typeId) => {
    setActiveType(typeId);
  }, []);

  const handleServiceClick = useCallback((service) => {
    setSelectedService(service);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedService(null);
  }, []);

  const handleContactClick = useCallback((serviceTitle) => {
    const message = `Olá! Gostaria de solicitar um orçamento para o serviço: ${serviceTitle}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }, []);

  const getServiceIcon = (iconName) => {
    const icons = {
      'code': <FaCode />,
      'palette': <FaPalette />,
      'mobile': <FaMobile />,
      'rocket': <FaRocket />,
      'shield': <FaShieldAlt />,
      'cog': <FaCog />,
      'magic': <FaMagic />,
      'layers': <FaLayerGroup />
    };
    return icons[iconName] || <FaCode />;
  };

  const getTechIcon = (tech) => {
    const techIcons = {
      'React': <SiReact />,
      'Next.js': <SiNextdotjs />,
      'Node.js': <SiNodedotjs />,
      'TypeScript': <SiTypescript />,
      'MongoDB': <SiMongodb />,
      'PostgreSQL': <SiPostgresql />,
      'Docker': <SiDocker />,
      'Figma': <SiFigma />
    };
    return techIcons[tech] || <FaCode />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const floatingElements = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3
  }));

  return (
    <section id="services" className="services-section">
      {/* Background Elements - Igual ao Hero */}
      <div className="services-background">
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
              y: [0, -25, 0],
              opacity: [0.2, 0.8, 0.2],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        <div className="services-gradient"></div>
      </div>

      <div className="container">
        {/* Header Section */}
        <motion.div 
          className="services-header"
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
            Nossos Serviços
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Soluções digitais personalizadas para transformar suas ideias em realidade
          </motion.p>
        </motion.div>

        {/* Filtros */}
        <motion.div 
          className="services-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Filtro por Tipo */}
          <div className="filter-section">
            <div className="filter-header">
              <FaFilter className="filter-icon" />
              <span className="filter-label">Tipo de Serviço</span>
            </div>
            <div className="type-filters">
              <motion.button
                className={`type-filter ${activeType === 'all' ? 'active' : ''}`}
                onClick={() => handleTypeChange('all')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLayerGroup />
                Todos
              </motion.button>
              {serviceTypes.map(type => (
                <motion.button
                  key={type.id}
                  className={`type-filter ${activeType === type.id ? 'active' : ''}`}
                  onClick={() => handleTypeChange(type.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ 
                    '--type-color': type.color,
                    borderColor: activeType === type.id ? type.color : 'transparent'
                  }}
                >
                  {getServiceIcon(type.icon)}
                  {type.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Filtro por Categoria */}
          <div className="filter-section">
            <div className="filter-header">
              <FaCog className="filter-icon" />
              <span className="filter-label">Categoria</span>
            </div>
            <div className="category-filters">
              {serviceCategories.map(category => (
                <motion.button
                  key={category.id}
                  className={`category-filter ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                  {activeCategory === category.id && (
                    <motion.div 
                      className="filter-indicator"
                      layoutId="filterIndicator"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                className={`service-card service-type-${service.type}`}
                variants={cardVariants}
                custom={index}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover="hover"
                onClick={() => handleServiceClick(service)}
                layout
              >
                {/* Service Header */}
                <div className="service-header">
                  <div className="service-icon-wrapper" style={{ '--type-color': serviceTypes.find(t => t.id === service.type)?.color }}>
                    {getServiceIcon(service.icon)}
                  </div>
                  <div className="service-title-section">
                    <h3 className="service-title">{service.title}</h3>
                    <div className="service-price">{service.price}</div>
                  </div>
                  {service.featured && (
                    <motion.div 
                      className="featured-badge"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, type: "spring" }}
                    >
                      <FaStar />
                      <span>Destaque</span>
                    </motion.div>
                  )}
                </div>

                {/* Service Description */}
                <p className="service-description">{service.description}</p>

                {/* Service Features */}
                <div className="service-features">
                  <h4 className="features-title">
                    <FaCheck className="features-icon" />
                    Inclui:
                  </h4>
                  <ul className="features-list">
                    {service.features.map((feature, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <FaCheck className="feature-check" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="service-techs">
                  <h4 className="techs-title">Tecnologias:</h4>
                  <div className="tech-tags">
                    {service.technologies.map((tech, index) => (
                      <motion.span 
                        key={tech}
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <span className="tech-icon">{getTechIcon(tech)}</span>
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Service Meta */}
                <div className="service-meta">
                  <div className="delivery-time">
                    <FaClock className="meta-icon" />
                    <span>{service.deliveryTime}</span>
                  </div>
                  <div className="service-revisions">
                    <FaCalendarCheck className="meta-icon" />
                    <span>{service.revisions || 'Revisões ilimitadas'}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  className="service-cta"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleContactClick(service.title);
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp className="cta-icon" />
                  Solicitar Orçamento
                  <div className="cta-glow"></div>
                </motion.button>

                {/* Card Glow Effect */}
                <div className="card-glow" style={{ '--type-color': serviceTypes.find(t => t.id === service.type)?.color }}></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <motion.div 
            className="no-services"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaCode className="empty-icon" />
            <h3>Nenhum serviço encontrado</h3>
            <p>Tente ajustar os filtros para ver mais opções.</p>
            <motion.button 
              className="reset-filters"
              onClick={() => {
                setActiveCategory('all');
                setActiveType('all');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTimes className="reset-icon" />
              Limpar Filtros
            </motion.button>
          </motion.div>
        )}

        {/* Service Modal */}
        <AnimatePresence>
          {selectedService && (
            <ServiceModal 
              service={selectedService}
              onClose={handleCloseModal}
              getServiceIcon={getServiceIcon}
              getTechIcon={getTechIcon}
              serviceTypes={serviceTypes}
              onContactClick={handleContactClick}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// Componente Modal Separado
const ServiceModal = ({ service, onClose, getServiceIcon, getTechIcon, serviceTypes, onContactClick }) => {
  const serviceType = serviceTypes.find(t => t.id === service.type);

  return (
    <motion.div 
      className="service-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="modal-content"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="modal-header">
          <div className="modal-icon-wrapper" style={{ '--type-color': serviceType?.color }}>
            {getServiceIcon(service.icon)}
          </div>
          <div className="modal-title-section">
            <h2>{service.title}</h2>
            <div className="modal-price">{service.price}</div>
          </div>
          {service.featured && (
            <div className="modal-featured-badge">
              <FaStar />
              <span>Serviço em Destaque</span>
            </div>
          )}
        </div>

        <div className="modal-description">
          <p>{service.description}</p>
        </div>

        <div className="modal-features">
          <h3>
            <FaCheck />
            O que está incluído:
          </h3>
          <div className="modal-features-grid">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                className="modal-feature-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <FaCheck className="feature-check" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="modal-techs">
          <h3>Tecnologias utilizadas:</h3>
          <div className="modal-tech-grid">
            {service.technologies.map((tech, index) => (
              <motion.div
                key={tech}
                className="modal-tech-item"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="modal-tech-icon">
                  {getTechIcon(tech)}
                </div>
                <span>{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="modal-meta">
          <div className="modal-meta-item">
            <FaClock />
            <div>
              <strong>Prazo de Entrega</strong>
              <span>{service.deliveryTime}</span>
            </div>
          </div>
          <div className="modal-meta-item">
            <FaCalendarCheck />
            <div>
              <strong>Revisões</strong>
              <span>{service.revisions || 'Ilimitadas'}</span>
            </div>
          </div>
          <div className="modal-meta-item">
            <FaShieldAlt />
            <div>
              <strong>Garantia</strong>
              <span>{service.warranty || '30 dias'}</span>
            </div>
          </div>
        </div>

        <motion.button
          className="modal-cta"
          onClick={() => onContactClick(service.title)}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaWhatsapp />
          Solicitar Orçamento Personalizado
          <div className="modal-cta-glow"></div>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Services;