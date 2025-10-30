import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCode, 
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaPalette,
  FaFilter,
  FaTimes,
  FaLaptopCode,
  FaStar,
  FaCalendar,
  FaClock,
  FaRocket,
  FaLayerGroup,
  FaEye,
  FaRegHeart,
  FaHeart,
  FaShare,
  FaBookmark,
  FaRegBookmark
} from 'react-icons/fa';
import { 
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiDocker,
  SiPython,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiVite,
  SiGit,
  SiFigma
} from 'react-icons/si';
import { projectsData } from '../data/projectsData';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('date'); // 'date', 'name', 'complexity'
  const [favorites, setFavorites] = useState(new Set());
  const [bookmarks, setBookmarks] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');

  // Tecnologias com ícones específicos
  const techIcons = {
    'React': <SiReact />,
    'Node.js': <SiNodedotjs />,
    'JavaScript': <SiJavascript />,
    'TypeScript': <SiTypescript />,
    'HTML5': <SiHtml5 />,
    'CSS3': <SiCss3 />,
    'MongoDB': <SiMongodb />,
    'PostgreSQL': <SiPostgresql />,
    'Express': <SiExpress />,
    'Docker': <SiDocker />,
    'Python': <SiPython />,
    'Next.js': <SiNextdotjs />,
    'Tailwind': <SiTailwindcss />,
    'Firebase': <SiFirebase />,
    'Vite': <SiVite />,
    'Git': <SiGit />,
    'Figma': <SiFigma />
  };

  // Extrair todas as tecnologias únicas para os filtros
  const allTechnologies = useMemo(() => 
    ['all', ...new Set(projectsData.flatMap(project => project.technologies))], 
    []
  );

  // Filtrar e ordenar projetos
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projectsData.filter(project => {
      const matchesFilter = activeFilter === 'all' || project.technologies.includes(activeFilter);
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });

    // Ordenação
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.title.localeCompare(b.title);
        case 'complexity':
          return (b.complexity || 0) - (a.complexity || 0);
        case 'date':
        default:
          return new Date(b.date || b.createdAt) - new Date(a.date || a.createdAt);
      }
    });

    return filtered;
  }, [activeFilter, searchTerm, sortBy]);

  const handleFilterClick = useCallback((tech) => {
    setActiveFilter(tech);
  }, []);

  const handleProjectClick = useCallback((project) => {
    setSelectedProject(project);
    // Track project view
    console.log(`Project viewed: ${project.title}`);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const toggleFavorite = useCallback((projectId, e) => {
    e.stopPropagation();
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(projectId)) {
        newFavorites.delete(projectId);
      } else {
        newFavorites.add(projectId);
      }
      return newFavorites;
    });
  }, []);

  const toggleBookmark = useCallback((projectId, e) => {
    e.stopPropagation();
    setBookmarks(prev => {
      const newBookmarks = new Set(prev);
      if (newBookmarks.has(projectId)) {
        newBookmarks.delete(projectId);
      } else {
        newBookmarks.add(projectId);
      }
      return newBookmarks;
    });
  }, []);

  const handleShare = useCallback((project, e) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: project.description,
        url: project.liveUrl,
      });
    } else {
      navigator.clipboard.writeText(project.liveUrl);
      // Mostrar toast de copiado
      console.log('URL copiada para a área de transferência');
    }
  }, []);

  const getTechIcon = (tech) => {
    return techIcons[tech] || <FaLaptopCode />;
  };

  const getComplexityStars = (complexity) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar key={i} className={i < complexity ? 'star filled' : 'star'} />
    ));
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
    hover: { scale: 1.02, y: -5 },
    tap: { scale: 0.98 }
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

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Header Section */}
        <motion.div 
          className="projects-header"
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
            Portfólio de Projetos
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore minha jornada através de projetos desafiadores e inovadores
          </motion.p>
        </motion.div>

        {/* Controls Bar */}
        <motion.div 
          className="projects-controls"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="controls-left">
            {/* Search */}
            <div className="search-box">
              <input
                type="text"
                placeholder="Buscar projetos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            {/* View Toggle */}
            <div className="view-toggle">
              <button
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <FaLayerGroup />
              </button>
              <button
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <FaList />
              </button>
            </div>
          </div>

          <div className="controls-right">
            {/* Sort */}
            <div className="sort-select">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-dropdown"
              >
                <option value="date">Mais Recente</option>
                <option value="name">Ordem Alfabética</option>
                <option value="complexity">Complexidade</option>
              </select>
            </div>

            {/* Filter Count */}
            <div className="filter-count">
              <span>{filteredAndSortedProjects.length} projetos</span>
            </div>
          </div>
        </motion.div>

        {/* Filter Chips */}
        <motion.div 
          className="projects-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="filters-scroll">
            {allTechnologies.map((tech) => (
              <motion.button
                key={tech}
                className={`filter-chip ${activeFilter === tech ? 'active' : ''}`}
                onClick={() => handleFilterClick(tech)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech === 'all' ? (
                  <>
                    <FaFilter />
                    Todos
                  </>
                ) : (
                  <>
                    {getTechIcon(tech)}
                    {tech}
                  </>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid/List */}
        <motion.div 
          className={`projects-container ${viewMode}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={viewMode + activeFilter + sortBy}
        >
          <AnimatePresence mode="popLayout">
            {filteredAndSortedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${viewMode}`}
                variants={projectVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover="hover"
                whileTap="tap"
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                onClick={() => handleProjectClick(project)}
              >
                {/* Project Image */}
                <div className="project-image">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Overlay with Actions */}
                  <div className="project-overlay">
                    <div className="project-actions">
                      <motion.button 
                        className={`action-btn favorite ${favorites.has(project.id) ? 'active' : ''}`}
                        onClick={(e) => toggleFavorite(project.id, e)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        {favorites.has(project.id) ? <FaHeart /> : <FaRegHeart />}
                      </motion.button>
                      
                      <motion.button 
                        className={`action-btn bookmark ${bookmarks.has(project.id) ? 'active' : ''}`}
                        onClick={(e) => toggleBookmark(project.id, e)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        {bookmarks.has(project.id) ? <FaBookmark /> : <FaRegBookmark />}
                      </motion.button>
                      
                      <motion.button 
                        className="action-btn share"
                        onClick={(e) => handleShare(project, e)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <FaShare />
                      </motion.button>
                    </div>

                    <div className="project-links">
                      <motion.a 
                        href={project.githubUrl}
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                        <span>Código</span>
                      </motion.a>
                      <motion.a 
                        href={project.liveUrl}
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt />
                        <span>Demo</span>
                      </motion.a>
                    </div>
                  </div>
                  
                  {/* Project Badges */}
                  <div className="project-badges">
                    <div className="project-badge type">
                      {project.type === 'web' ? <FaCode /> : <FaMobileAlt />}
                      <span>{project.type === 'web' ? 'Web' : 'Mobile'}</span>
                    </div>
                    {project.complexity && (
                      <div className="project-badge complexity">
                        {getComplexityStars(project.complexity)}
                      </div>
                    )}
                    {project.featured && (
                      <div className="project-badge featured">
                        <FaStar />
                        <span>Destaque</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="project-info">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-meta">
                      {project.date && (
                        <div className="meta-item">
                          <FaCalendar />
                          <span>{new Date(project.date).toLocaleDateString('pt-BR')}</span>
                        </div>
                      )}
                      {project.duration && (
                        <div className="meta-item">
                          <FaClock />
                          <span>{project.duration}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-techs">
                    {project.technologies.map((tech) => (
                      <motion.span 
                        key={tech}
                        className="tech-tag"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="tech-icon">{getTechIcon(tech)}</span>
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Project Stats */}
                  <div className="project-stats">
                    {project.stats && (
                      <>
                        {project.stats.linesOfCode && (
                          <div className="stat">
                            <FaCode />
                            <span>{project.stats.linesOfCode}+ linhas</span>
                          </div>
                        )}
                        {project.stats.commits && (
                          <div className="stat">
                            <FaGit />
                            <span>{project.stats.commits} commits</span>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredAndSortedProjects.length === 0 && (
          <motion.div 
            className="empty-state"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaCode className="empty-icon" />
            <h3>Nenhum projeto encontrado</h3>
            <p>
              {searchTerm 
                ? `Não encontramos projetos para "${searchTerm}". Tente outros termos.`
                : 'Tente selecionar outro filtro para ver mais projetos.'
              }
            </p>
            {(searchTerm || activeFilter !== 'all') && (
              <motion.button
                className="clear-filters-btn"
                onClick={() => {
                  setSearchTerm('');
                  setActiveFilter('all');
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Limpar Filtros
              </motion.button>
            )}
          </motion.div>
        )}

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal 
              project={selectedProject} 
              onClose={handleCloseModal}
              techIcons={techIcons}
              getTechIcon={getTechIcon}
              getComplexityStars={getComplexityStars}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// Componente Modal Separado
const ProjectModal = ({ project, onClose, techIcons, getTechIcon, getComplexityStars }) => {
  return (
    <motion.div 
      className="project-modal"
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

        <div className="modal-image">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="modal-info">
          <div className="modal-header">
            <h2>{project.title}</h2>
            <div className="modal-badges">
              {project.featured && (
                <span className="badge featured">
                  <FaStar />
                  Projeto em Destaque
                </span>
              )}
              {project.complexity && (
                <span className="badge complexity">
                  {getComplexityStars(project.complexity)}
                </span>
              )}
            </div>
          </div>

          <p className="modal-description">{project.description}</p>

          {project.detailedDescription && (
            <div className="modal-section">
              <h4>
                <FaRocket />
                Sobre o Projeto
              </h4>
              <p>{project.detailedDescription}</p>
            </div>
          )}

          {project.features && (
            <div className="modal-section">
              <h4>
                <FaCode />
                Funcionalidades
              </h4>
              <div className="features-grid">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <FaCheckCircle />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="modal-section">
            <h4>
              <FaLaptopCode />
              Tecnologias Utilizadas
            </h4>
            <div className="tech-stack">
              {project.technologies.map((tech) => (
                <div key={tech} className="tech-item">
                  <div className="tech-icon">
                    {getTechIcon(tech)}
                  </div>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {project.challenges && (
            <div className="modal-section">
              <h4>
                <FaEye />
                Desafios e Aprendizados
              </h4>
              <ul className="challenges-list">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal-links">
            <motion.a 
              href={project.githubUrl}
              className="modal-link primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              Ver Código no GitHub
            </motion.a>
            <motion.a 
              href={project.liveUrl}
              className="modal-link secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
              Ver Demonstração Ao Vivo
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Componente FaList para substituir o ícone não importado
const FaList = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
  </svg>
);

// Componente FaCheckCircle para substituir o ícone não importado
const FaCheckCircle = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5 7 10l4.5-4.5L10.5 5 7 8.5 5.5 7l-1 1z"/>
  </svg>
);

export default Projects;