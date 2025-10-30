// src/components/Contact.jsx
import { useState, useRef, useEffect, useMemo } from 'react';
import { 
  FaWhatsapp, FaEnvelope, FaPaperPlane, FaUser, FaPhone, 
  FaSpinner, FaCheck, FaCode, FaPalette, FaShoppingCart, 
  FaRobot, FaStar, FaAward, FaRocket, FaHeadset, FaArrowLeft,
  FaCalendar, FaDollarSign, FaLightbulb, FaHandshake, FaClock,
  FaMapMarkerAlt, FaShieldAlt, FaMedal, FaGem, FaCrown
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Contact.css'
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const formRef = useRef(null);

  // Dados otimizados com useMemo
  const projectTypes = useMemo(() => [
    {
      id: 'landing-page',
      name: 'Landing Page',
      icon: <FaRocket />,
      description: 'Página de alta conversão para lançamentos',
      price: 'R$ 400 - R$ 800',
      timeline: '5-10 dias',
      features: ['Design Responsivo', 'SEO Básico', 'Formulário de Contato'],
      color: 'var(--primary-purple)'
    },
    {
      id: 'site-institucional',
      name: 'Site Institucional',
      icon: <FaCode />,
      description: 'Presença digital profissional',
      price: 'R$ 900 - R$ 1.500',
      timeline: '10-15 dias',
      features: ['Até 5 páginas', 'Blog Integrado', 'Painel Admin'],
      color: 'var(--blue)'
    },
    {
      id: 'ecommerce',
      name: 'Loja Virtual',
      icon: <FaShoppingCart />,
      description: 'Plataforma completa de vendas',
      price: 'R$ 1.500 - R$ 3.000',
      timeline: '20-30 dias',
      features: ['Carrinho de Compras', 'Pagamentos Online', 'Gestão de Estoque'],
      color: 'var(--green)'
    },
    {
      id: 'cardapio-online',
      name: 'Cardápio Online',
      icon: <FaPalette />,
      description: 'Sistema para restaurantes',
      price: 'R$ 850 - R$ 1.800',
      timeline: '7-15 dias',
      features: ['Pedidos Online', 'Integração WhatsApp', 'Painel Gestão'],
      color: 'var(--yellow)'
    },
    {
      id: 'bot-whatsapp',
      name: 'Chatbot WhatsApp',
      icon: <FaRobot />,
      description: 'Automação de atendimento',
      price: 'R$ 700 - R$ 1.200',
      timeline: '5-7 dias',
      features: ['Respostas Automáticas', 'Menu Interativo', 'Relatórios'],
      color: 'var(--accent-pink)'
    },
    {
      id: 'outro',
      name: 'Projeto Personalizado',
      icon: <FaGem />,
      description: 'Solução sob medida',
      price: 'Sob consulta',
      timeline: 'A definir',
      features: ['Desenvolvimento Customizado', 'Consultoria Técnica'],
      color: 'var(--primary-purple)'
    }
  ], []);

  const budgets = useMemo(() => [
    { value: 'ate-1000', label: 'Até R$ 1.000', icon: <FaDollarSign />, color: 'var(--green)' },
    { value: '1000-2500', label: 'R$ 1.000 - R$ 2.500', icon: <FaDollarSign />, color: 'var(--blue)' },
    { value: '2500-5000', label: 'R$ 2.500 - R$ 5.000', icon: <FaDollarSign />, color: 'var(--yellow)' },
    { value: 'acima-5000', label: 'Acima de R$ 5.000', icon: <FaDollarSign />, color: 'var(--primary-purple)' },
    { value: 'nao-sei', label: 'Ainda não sei', icon: <FaLightbulb />, color: 'var(--gray)' }
  ], []);

  const timelines = useMemo(() => [
    { value: 'urgente', label: 'Urgente (1-2 semanas)', icon: <FaRocket />, color: 'var(--red)' },
    { value: 'padrao', label: 'Padrão (3-4 semanas)', icon: <FaCalendar />, color: 'var(--blue)' },
    { value: 'flexivel', label: 'Flexível (1-2 meses)', icon: <FaClock />, color: 'var(--green)' },
    { value: 'nao-sei', label: 'Ainda não sei', icon: <FaLightbulb />, color: 'var(--gray)' }
  ], []);

  // Efeito para reset após sucesso
  useEffect(() => {
    if (submitSuccess) {
      const timer = setTimeout(() => {
        setSubmitSuccess(false);
        setCurrentStep(1);
        setSelectedService(null);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [submitSuccess]);

  // Handlers otimizados
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setFormData(prev => ({
      ...prev,
      projectType: service.name
    }));
    setCurrentStep(2);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    else if (formData.name.trim().length < 2) newErrors.name = 'Nome muito curto';
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }
    
    if (!formData.projectType) newErrors.projectType = 'Selecione um tipo de projeto';
    if (!formData.budget) newErrors.budget = 'Informe seu orçamento';
    if (!formData.timeline) newErrors.timeline = 'Informe o prazo desejado';
    
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    } else if (formData.message.trim().length < 30) {
      newErrors.message = 'Descreva melhor seu projeto (mín. 30 caracteres)';
    } else if (formData.message.trim().length > 500) {
      newErrors.message = 'Mensagem muito longa (máx. 500 caracteres)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      const firstError = Object.keys(errors)[0];
      const element = document.querySelector(`[name="${firstError}"]`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const emailResponse = await fetch('https://formsubmit.co/ajax/emannueldevfullstacksolutions@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.projectType,
          budget: budgets.find(b => b.value === formData.budget)?.label || formData.budget,
          timeline: timelines.find(t => t.value === formData.timeline)?.label || formData.timeline,
          message: formData.message,
          _subject: `🎯 Novo Projeto: ${formData.projectType} - ${formData.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const result = await emailResponse.json();
      
      if (result.success) {
        const whatsappMessage = `🚀 *NOVO PROJETO SOLICITADO* 🚀%0A%0A` +
          `👤 *Cliente:* ${formData.name}%0A` +
          `📧 *E-mail:* ${formData.email}%0A` +
          `📞 *Telefone:* ${formData.phone || 'Não informado'}%0A` +
          `💼 *Projeto:* ${formData.projectType}%0A` +
          `💰 *Orçamento:* ${budgets.find(b => b.value === formData.budget)?.label || formData.budget}%0A` +
          `⏰ *Prazo:* ${timelines.find(t => t.value === formData.timeline)?.label || formData.timeline}%0A%0A` +
          `📝 *Descrição:*%0A${formData.message}`;

        window.open(`https://wa.me/5562984317595?text=${whatsappMessage}`, '_blank');

        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          budget: '',
          timeline: '',
          message: ''
        });
        setSelectedService(null);

      } else {
        throw new Error('Falha no envio do formulário');
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
      const fallbackMessage = `Olá! Tentei enviar pelo formulário mas houve um erro.%0A%0A` +
        `*Nome:* ${formData.name}%0A` +
        `*E-mail:* ${formData.email}%0A` +
        `*Projeto:* ${formData.projectType}%0A` +
        `*Mensagem:* ${formData.message}`;
      
      window.open(`https://wa.me/5562984317595?text=${fallbackMessage}`, '_blank');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Componente de Progresso
  const ProgressSteps = () => (
    <div className="progress-steps">
      {[1, 2, 3].map(step => (
        <div key={step} className={`step ${currentStep >= step ? 'active' : ''} ${currentStep > step ? 'completed' : ''}`}>
          <div className="step-number">
            {currentStep > step ? <FaCheck size={12} /> : step}
          </div>
          <span className="step-label">
            {step === 1 ? 'Serviço' : step === 2 ? 'Detalhes' : 'Revisão'}
          </span>
        </div>
      ))}
      <div className="progress-bar">
        <motion.div 
          className="progress-fill"
          initial={{ width: '0%' }}
          animate={{ width: `${((currentStep - 1) / 2) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );

  return (
    <section id="contact" className="executive-contact-section">
      <div className="container">
        {/* Hero Section Executiva */}
        <div className="executive-contact-hero">
          <div className="hero-background">
            <div className="hero-particles">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="particle"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: Math.random() * 100 - 50,
                    y: Math.random() * 100 - 50
                  }}
                  transition={{ 
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              ))}
            </div>
          </div>
          
          <motion.div
            className="executive-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="executive-badges">
              <motion.div
                className="executive-badge primary"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <FaCrown /> DESENVOLVIMENTO PREMIUM
              </motion.div>
              <motion.div
                className="executive-badge secondary"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <FaShieldAlt /> GARANTIA DE 30 DIAS
              </motion.div>
            </div>

            <h1 className="executive-title">
              Vamos Criar Algo
              <span className="gradient-text"> Extraordinário</span>
              <motion.span 
                className="typing-cursor"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >|</motion.span>
            </h1>
            
            <p className="executive-subtitle">
              Transforme suas ideias em realidade digital com soluções personalizadas 
              e tecnologia de ponta. Cada projeto é uma oportunidade de inovar e criar 
              experiências memoráveis.
            </p>

            <motion.div 
              className="executive-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="metric-item metric-purple">
                <div className="metric-icon-wrapper">
                  <FaMedal className="metric-icon" />
                </div>
                <div className="metric-content">
                  <span className="metric-value">50+</span>
                  <span className="metric-label">Projetos Entregues</span>
                </div>
              </div>
              <div className="metric-item metric-green">
                <div className="metric-icon-wrapper">
                  <FaStar className="metric-icon" />
                </div>
                <div className="metric-content">
                  <span className="metric-value">100%</span>
                  <span className="metric-label">Clientes Satisfeitos</span>
                </div>
              </div>
              <div className="metric-item metric-blue">
                <div className="metric-icon-wrapper">
                  <FaHeadset className="metric-icon" />
                </div>
                <div className="metric-content">
                  <span className="metric-value">24h</span>
                  <span className="metric-label">Suporte Premium</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Contact Section Executiva */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ProgressSteps />

          <div className="executive-contact-grid">
            {/* Form Section */}
            <motion.div 
              className="executive-form-container"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="form-card executive-card">
                <div className="form-header">
                  <div className="section-header">
                    <FaPaperPlane className="section-icon" /> 
                    <h2>Solicite Seu Orçamento Premium</h2>
                  </div>
                  <p>Preencha os detalhes do seu projeto em 3 passos simples</p>
                </div>

                <AnimatePresence mode="wait">
                  {submitSuccess ? (
                    <motion.div
                      key="success"
                      className="success-state executive-success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <div className="success-icon">
                        <FaCheck size={32} />
                      </div>
                      <h3>Proposta Enviada com Sucesso! 🎉</h3>
                      <p>
                        Recebemos seus dados e em breve entraremos em contato 
                        para discutir os próximos passos do seu projeto.
                      </p>
                      <div className="success-actions">
                        <motion.a
                          href="https://wa.me/5562984317595"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-button primary"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaWhatsapp /> Falar no WhatsApp
                        </motion.a>
                      </div>
                      <motion.div
                        className="success-timer"
                        initial={{ width: '100%' }}
                        animate={{ width: '0%' }}
                        transition={{ duration: 8 }}
                      />
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      ref={formRef}
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="multi-step-form executive-form"
                    >
                      {/* Step 1: Service Selection */}
                      {currentStep === 1 && (
                        <motion.div
                          className="form-step"
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 50, opacity: 0 }}
                        >
                          <div className="step-intro">
                            <h3>Qual serviço você precisa?</h3>
                            <p>Selecione o tipo de projeto que melhor se encaixa na sua necessidade</p>
                          </div>
                          
                          <div className="service-grid executive-grid">
                            {projectTypes.map(service => (
                              <motion.div
                                key={service.id}
                                className={`service-card executive-service-card ${selectedService?.id === service.id ? 'selected' : ''}`}
                                onClick={() => handleServiceSelect(service)}
                                whileHover={{ y: -5, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                style={{ '--service-color': service.color }}
                              >
                                <div className="service-icon executive-icon">
                                  {service.icon}
                                </div>
                                <h4>{service.name}</h4>
                                <p>{service.description}</p>
                                <div className="service-features">
                                  {service.features.map((feature, index) => (
                                    <span key={index} className="feature-tag">✓ {feature}</span>
                                  ))}
                                </div>
                                <div className="service-meta">
                                  <span className="price">{service.price}</span>
                                  <span className="timeline">{service.timeline}</span>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {/* Step 2: Project Details */}
                      {currentStep === 2 && (
                        <motion.div
                          className="form-step"
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 50, opacity: 0 }}
                        >
                          <div className="step-header executive-step-header">
                            <motion.button 
                              type="button" 
                              className="back-button executive-back"
                              onClick={() => setCurrentStep(1)}
                              whileHover={{ x: -3 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FaArrowLeft /> Voltar
                            </motion.button>
                            <div className="step-info">
                              <h3>Detalhes do Projeto</h3>
                              <div className="selected-service-badge executive-badge">
                                {selectedService?.icon}
                                {selectedService?.name}
                              </div>
                            </div>
                          </div>

                          <div className="form-grid executive-form-grid">
                            <div className="form-group executive-form-group">
                              <label htmlFor="name">
                                <FaUser className="input-icon" /> 
                                Nome Completo *
                              </label>
                              <input
                                id="name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Seu nome completo"
                                className={errors.name ? 'error' : ''}
                              />
                              {errors.name && <span className="error-message">{errors.name}</span>}
                            </div>

                            <div className="form-group executive-form-group">
                              <label htmlFor="email">
                                <FaEnvelope className="input-icon" /> 
                                E-mail Profissional *
                              </label>
                              <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="seu@email.com"
                                className={errors.email ? 'error' : ''}
                              />
                              {errors.email && <span className="error-message">{errors.email}</span>}
                            </div>

                            <div className="form-group executive-form-group">
                              <label htmlFor="phone">
                                <FaPhone className="input-icon" /> 
                                WhatsApp (Opcional)
                              </label>
                              <input
                                id="phone"
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="(62) 99999-9999"
                              />
                              <div className="input-note">Para contato mais rápido</div>
                            </div>

                            <div className="form-group full-width">
                              <label htmlFor="budget">
                                <FaDollarSign className="input-icon" />
                                Orçamento Previsto *
                              </label>
                              <div className="option-grid executive-options">
                                {budgets.map(budget => (
                                  <label key={budget.value} className="option-card executive-option">
                                    <input
                                      type="radio"
                                      name="budget"
                                      value={budget.value}
                                      checked={formData.budget === budget.value}
                                      onChange={handleChange}
                                    />
                                    <div className="option-content">
                                      <div className="option-icon" style={{ color: budget.color }}>
                                        {budget.icon}
                                      </div>
                                      <span>{budget.label}</span>
                                    </div>
                                  </label>
                                ))}
                              </div>
                              {errors.budget && <span className="error-message">{errors.budget}</span>}
                            </div>

                            <div className="form-group full-width">
                              <label htmlFor="timeline">
                                <FaCalendar className="input-icon" />
                                Prazo Desejado *
                              </label>
                              <div className="option-grid executive-options">
                                {timelines.map(timeline => (
                                  <label key={timeline.value} className="option-card executive-option">
                                    <input
                                      type="radio"
                                      name="timeline"
                                      value={timeline.value}
                                      checked={formData.timeline === timeline.value}
                                      onChange={handleChange}
                                    />
                                    <div className="option-content">
                                      <div className="option-icon" style={{ color: timeline.color }}>
                                        {timeline.icon}
                                      </div>
                                      <span>{timeline.label}</span>
                                    </div>
                                  </label>
                                ))}
                              </div>
                              {errors.timeline && <span className="error-message">{errors.timeline}</span>}
                            </div>

                            <div className="form-group full-width">
                              <label htmlFor="message">
                                <FaLightbulb className="input-icon" />
                                Conte-nos sobre seu projeto *
                              </label>
                              <textarea
                                id="message"
                                name="message"
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder={`Descreva detalhadamente:\n• Objetivos do projeto\n• Funcionalidades desejadas\n• Público-alvo\n• Referências e inspirações\n• Qualquer informação relevante...`}
                                className={errors.message ? 'error' : ''}
                              ></textarea>
                              <div className="textarea-footer">
                                <div className="character-count">
                                  {formData.message.length}/500 caracteres
                                </div>
                                {errors.message && <span className="error-message">{errors.message}</span>}
                              </div>
                            </div>
                          </div>

                          <motion.button
                            type="submit"
                            className="submit-button executive-cta primary"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <FaSpinner className="spinner" />
                                Enviando Proposta...
                              </>
                            ) : (
                              <>
                                <FaRocket />
                                Solicitar Proposta Personalizada
                              </>
                            )}
                          </motion.button>
                        </motion.div>
                      )}
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Info Section Executiva */}
            <motion.div 
              className="executive-info-sidebar"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="info-card executive-card">
                <div className="info-header executive-header">
                  <div className="section-header">
                    <FaHeadset className="section-icon" /> 
                    <h2>Suporte Premium</h2>
                  </div>
                  <div className="status-badge online executive-status">
                    <div className="status-dot"></div>
                    Online Agora
                  </div>
                </div>

                <div className="contact-methods executive-methods">
                  <motion.div 
                    className="contact-method executive-method featured"
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="contact-icon-container whatsapp executive-icon-container">
                      <FaWhatsapp className="contact-icon" />
                    </div>
                    <div className="method-content">
                      <h3>WhatsApp Business</h3>
                      <a href="https://wa.me/5562984317595?text=Olá%20Emannuel%20Dev!%20Gostaria%20de%20um%20orçamento%20personalizado." target="_blank" rel="noopener noreferrer">
                        (62) 98431-7595
                      </a>
                      <p>Resposta imediata em horário comercial</p>
                      <div className="feature-tag executive-tag">🚀 Recomendado</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="contact-method executive-method"
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="contact-icon-container email executive-icon-container">
                      <FaEnvelope className="contact-icon" />
                    </div>
                    <div className="method-content">
                      <h3>E-mail Corporativo</h3>
                      <a href="mailto:emannueldevfullstacksolutions@gmail.com">
                       emannueldevfullstacksolutions@gmail.com
                      </a>
                      <p>Resposta em até 4 horas úteis</p>
                    </div>
                  </motion.div>

                  <div className="benefits-section executive-benefits">
                    <div className="section-header">
                      <FaAward className="section-icon" />
                      <h4>Por que escolher nossos serviços?</h4>
                    </div>
                    <div className="benefits-list executive-list">
                      <div className="benefit executive-benefit">
                        <FaHandshake className="benefit-icon" />
                        <span>Garantia de 30 dias</span>
                      </div>
                      <div className="benefit executive-benefit">
                        <FaClock className="benefit-icon" />
                        <span>Entrega no prazo combinado</span>
                      </div>
                      <div className="benefit executive-benefit">
                        <FaStar className="benefit-icon" />
                        <span>Design exclusivo e moderno</span>
                      </div>
                      <div className="benefit executive-benefit">
                        <FaHeadset className="benefit-icon" />
                        <span>Suporte técnico especializado</span>
                      </div>
                      <div className="benefit executive-benefit">
                        <FaShieldAlt className="benefit-icon" />
                        <span>Segurança e confiabilidade</span>
                      </div>
                      <div className="benefit executive-benefit">
                        <FaGem className="benefit-icon" />
                        <span>Soluções personalizadas</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}