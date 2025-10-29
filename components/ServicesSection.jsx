'use client'

import React, { useState } from 'react'
import {
  Box,
  Chip,
  Container,
  Typography,
  useTheme,
  IconButton,
  Paper,
} from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import {
  WorkflowIcon,
  BrainCircuitIcon,
  DatabaseZap,
  ArrowUpRight,
  X,
} from 'lucide-react'

const ServicesSection = () => {
  const theme = useTheme()
  const [expandedId, setExpandedId] = useState(null)

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const servicesData = [
    {
      id: 1,
      icon: <WorkflowIcon className="h-6 w-6" />,
      title: 'Agile Transformation',
      description:
        'We guide organizations in adopting Agile as a mindset — driving speed, adaptability, and collaboration across teams.',
      details: `
In a world where speed, adaptability, and collaboration drive success, we help organizations embrace Agile as a mindset — not just a methodology. Whether you're taking your first steps toward agility or scaling across global teams, we guide you through every stage of your transformation journey.

1. Agile Transformation — We partner with you to design and deliver a tailored Agile transformation strategy that aligns with your business goals. 
2. Agile Adoption — We provide training and coaching to embed Agile principles and frameworks like Scrum, Kanban, and Lean.
3. Scaled Agile Adoption — We help scale Agile across enterprises using SAFe, LeSS, or the Spotify model.

Why Partner With Us: Certified Expertise | Practical Experience | Tailored Approach | Sustainable Change
      `,
      color: theme.palette.success.main,
    },
    {
      id: 2,
      icon: <DatabaseZap className="h-6 w-6" />,
      title: 'Data Engineering',
      description:
        'Empowering businesses with scalable data engineering — from architecture to real-time analytics and AI-ready platforms.',
      details: `
We design and implement modern data platforms that transform raw information into actionable insights.

1. Data Strategy & Architecture — Aligning data design with your business goals.
2. Data Platform Engineering — Building real-time data pipelines and analytics platforms.
3. Cloud & Hybrid Data Solutions — Creating flexible, cost-efficient cloud and hybrid data ecosystems.

Why Partner With Us: Certified Expertise | End-to-End Delivery | Future-Ready Platforms | Data with Purpose
      `,
      color: theme.palette.success.main,
    },
    {
      id: 3,
      icon: <BrainCircuitIcon className="h-6 w-6" />,
      title: 'AI & Intelligent Solutions',
      description:
        'We help businesses move from experimentation to real impact through innovative, scalable, secure, and ethical AI solutions.',
      details: `
We turn AI from isolated experiments into scalable, business-critical capabilities.

1. AI Strategy & Enablement — Building a responsible, value-driven AI roadmap.
2. Machine Learning & Analytics — Designing predictive models and insights.
3. Generative AI & Automation — Using LLMs to automate and enhance workflows.
4. MLOps & AI Infrastructure — Ensuring reliable deployment and governance.

Why Partner With Us: Certified AI Professionals | Cross-Domain Expertise | Ethical & Responsible AI
      `,
      color: theme.palette.primary.main,
    },
  ]

  return (
    <section id="services" className="py-24 bg-[#F5F5F580] relative overflow-hidden">
      <Container maxWidth="lg">
        {/* Header */}
        <Box className="mb-16 text-center">
          <Chip variant="outlined" label="Our Services" className="mb-3" />
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              mb: 3,
              color: theme.palette.primary.main,
              fontSize: { xs: '1.875rem', md: '2.25rem' },
              lineHeight: 1.2,
            }}
          >
            What we offer
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            We offer Agile Transformation, Data Engineering, and AI & Intelligent Solutions
            to help businesses innovate, grow, and stay ahead in the digital era.
          </Typography>
        </Box>

        {/* Service Cards */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            flexWrap: 'wrap',
            gap: 4,
          }}
        >
          {servicesData.map((service, index) => {
            const isExpanded = expandedId === service.id

            return (
              <motion.div
                key={service.id}
                layout
                transition={{ layout: { duration: 0.6, type: 'spring' } }}
                style={{
                  width: isExpanded ? '100%' : 320,
                  flexGrow: isExpanded ? 1 : 0,
                }}
              >
                <Paper
                  elevation={isExpanded ? 6 : 3}
                  className="p-6 rounded-2xl relative overflow-hidden"
                  sx={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(12px)',
                    border: isExpanded
                      ? `2px solid ${service.color}`
                      : '1px solid #E0FFE8',
                    borderRadius: '16px',
                    transition: 'all 0.3s ease',
                    boxShadow: isExpanded
                      ? '0 10px 30px rgba(0,0,0,0.1)'
                      : '0 6px 20px rgba(0,0,0,0.05)',
                  }}
                >
                  <Box
                    className="inline-flex p-3 rounded-lg mb-4"
                    sx={{
                      backgroundColor: '#DBFFE8',
                      color: service.color,
                      width: 48,
                      height: 48,
                      alignItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                    }}
                  >
                    {service.icon}
                  </Box>

                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#111827' }}>
                    {service.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.5,
                      mt: 1,
                      mb: isExpanded ? 3 : 6,
                    }}
                  >
                    {service.description}
                  </Typography>

                  <IconButton
                    onClick={() => toggleExpand(service.id)}
                    sx={{
                      position: 'absolute',
                      bottom: 16,
                      right: 16,
                      backgroundColor: '#DBFFE8',
                      color: service.color,
                      '&:hover': {
                        backgroundColor: service.color,
                        color: '#fff',
                      },
                      zIndex: 2,
                    }}
                  >
                    {isExpanded ? <X size={18} /> : <ArrowUpRight size={18} />}
                  </IconButton>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            whiteSpace: 'pre-line',
                            color: 'text.secondary',
                            mt: 2,
                            lineHeight: 1.6,
                          }}
                        >
                          {service.details.trim()}
                        </Typography>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Paper>
              </motion.div>
            )
          })}
        </Box>
      </Container>
    </section>
  )
}

export default ServicesSection