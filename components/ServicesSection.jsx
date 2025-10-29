'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Workflow, BrainCircuit, DatabaseZap, ArrowUpRight, X } from 'lucide-react'
import { Badge, Box, Chip, Container, Grid, Typography, useTheme } from '@mui/material'
import { color } from 'framer-motion'

const ServicesSection = () => {
  const [expandedId, setExpandedId] = useState(null)

  const handleCardClick = (id) => {
    // If card is expanded, close it when clicking anywhere inside
    if (expandedId === id) {
      setExpandedId(null)
    }
  }

  const handleExpandClick = (id, e) => {
    e.stopPropagation() // Prevent card click when clicking expand button
    setExpandedId(expandedId === id ? null : id)
  }

  const servicesData = [
    {
      id: 1,
      icon: Workflow,
      title: 'Agile Transformation',
      description:
        'We guide organizations in adopting Agile as a mindset: driving speed, adaptability, and collaboration across teams.',
      details: `In a world where speed, adaptability, and collaboration drive success, we help organizations embrace Agile as a mindset: not just a methodology. Whether you're taking your first steps toward agility or scaling across global teams, we guide you through every stage of your transformation journey.

1. Agile Transformation: We partner with you to design and deliver a tailored Agile transformation strategy that aligns with your business goals. 
2. Agile Adoption: We provide training and coaching to embed Agile principles and frameworks like Scrum, Kanban, and Lean.
3. Scaled Agile Adoption: We help scale Agile across enterprises using SAFe, LeSS, or the Spotify model.

Why Partner With Us: Certified Expertise | Practical Experience | Tailored Approach | Sustainable Change`,
      color: '#10B981',
    },
    {
      id: 2,
      icon: DatabaseZap,
      title: 'Data Engineering',
      description:
        'Empowering businesses with scalable data engineering from architecture to real-time analytics and AI-ready platforms.',
      details: `We design and implement modern data platforms that transform raw information into actionable insights.

1. Data Strategy & Architecture: Aligning data design with your business goals.
2. Data Platform Engineering: Building real-time data pipelines and analytics platforms.
3. Cloud & Hybrid Data Solutions: Creating flexible, cost-efficient cloud and hybrid data ecosystems.

Why Partner With Us: Certified Expertise | End-to-End Delivery | Future-Ready Platforms | Data with Purpose`,
      color: '#10B981',
    },
    {
      id: 3,
      icon: BrainCircuit,
      title: 'AI & Intelligent Solutions',
      description:
        'We help businesses move from experimentation to real impact through innovative, scalable, secure, and ethical AI solutions.',
      details: `We turn AI from isolated experiments into scalable, business-critical capabilities.

1. AI Strategy & Enablement: Building a responsible, value-driven AI roadmap.
2. Machine Learning & Analytics: Designing predictive models and insights.
3. Generative AI & Automation: Using LLMs to automate and enhance workflows.
4. MLOps & AI Infrastructure: Ensuring reliable deployment and governance.

Why Partner With Us: Certified AI Professionals | Cross-Domain Expertise | Ethical & Responsible AI`,
      color: '#10B981',
    },
  ]

  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">


      <Container maxWidth='lg'>
        {/* Header */}
        <Box className="mb-16 text-center">
          <Chip variant='outlined' label="Our Services" className="mb-3" />
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 'bold',
              mb: 3,
              color: useTheme().palette.primary.main,
              fontSize: { xs: '1.875rem', md: '2.25rem' },
              lineHeight: 1.2
            }}
          >
            What we Offer
          </Typography>
          <Typography variant='body1' component='p'
            sx={{
              textAlign: 'justify',
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto'
            }}
          >
            We offer Agile Transformation, Data Engineering, and AI & Intelligent Solutions
            to help businesses innovate, grow, and stay ahead in the digital era.
          </Typography>
        </Box>


        {/* Service Cards */}
        <div className="flex justify-center items-stretch flex-wrap gap-6">
          {servicesData.map((service) => {
            const isExpanded = expandedId === service.id
            const Icon = service.icon

            return (
              <div
                key={service.id}
                onClick={() => handleCardClick(service.id)}
                style={{
                  width: isExpanded ? '100%' : '320px',
                  flexGrow: isExpanded ? 1 : 0,
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: isExpanded ? 'pointer' : 'default',
                }}
              >
                <div
                  className="p-6 rounded-2xl relative overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(12px)',
                    border: isExpanded
                      ? `2px solid ${service.color}`
                      : '1px solid #E0FFE8',
                    transition: 'all 0.3s ease',
                    boxShadow: isExpanded
                      ? '0 10px 30px rgba(0,0,0,0.1)'
                      : '0 6px 20px rgba(0,0,0,0.05)',
                    height: '100%',
                  }}
                >
                  <div
                    className="inline-flex p-3 rounded-lg mb-4 items-center justify-center"
                    style={{
                      backgroundColor: '#DBFFE8',
                      color: service.color,
                      width: '48px',
                      height: '48px',
                    }}
                  >
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>

                  <p
                    className="text-gray-600 text-sm leading-relaxed"
                    style={{ marginBottom: isExpanded ? '1rem' : '3rem' }}
                  >
                    {service.description}
                  </p>

                  <button
                    onClick={(e) => handleExpandClick(service.id, e)}
                    className="absolute right-4 p-2 rounded-full transition-all duration-300"
                    style={{
                      top: isExpanded ? '16px' : 'auto',
                      bottom: isExpanded ? 'auto' : '16px',
                      backgroundColor: '#DBFFE8',
                      color: service.color,
                      cursor: 'pointer', 
                      hover: {
                        backgroundColor: service.color,
                        color: '#FFFFFF',
                      }
                    }}
                    
                  >
                    {isExpanded ? <X size={18} /> : <ArrowUpRight size={18} />}
                  </button>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div
                      style={{
                        animation: 'fadeIn 0.6s ease-in-out',
                      }}
                    >
                      <p className="text-gray-700 mt-4 leading-relaxed whitespace-pre-line">
                        {service.details}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </Container>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

export default ServicesSection