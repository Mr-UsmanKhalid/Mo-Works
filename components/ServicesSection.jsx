'use client'

import { Box, Chip, Container, Grid, Paper, Typography, useTheme } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'
import { WorkflowIcon, BrainCircuitIcon, DatabaseZap } from 'lucide-react'

const ServicesSection = () => {
  const theme = useTheme()

  const servicesData = [
    {
      icon: <WorkflowIcon className="h-6 w-6" />,
      title: "Agile Transformation",
      description:
        "We guide organizations in adopting Agile as a mindset — driving speed, adaptability, and collaboration across teams.",
      color: "bg-green-500/10 text-green-500",
    },
    {
      icon: <DatabaseZap className="h-6 w-6" />,
      title: "Data Engineering",
      description:
        "Empowering businesses with scalable data engineering — from architecture to real-time analytics and AI-ready platforms.",
      color: "bg-cyan-500/10 text-cyan-500",
    },
    {
      icon: <BrainCircuitIcon className="h-6 w-6" />,
      title: "AI & Intelligent Solutions",
      description:
        "We help businesses move from experimentation to real impact through scalable, secure, and ethical AI solutions.",
      color: "bg-indigo-500/10 text-indigo-500",
    },
  ]

  return (
    <section id="services" className="py-24 bg-[#F5F5F580]">
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
              color: theme.palette.primary.main,
              fontSize: { xs: '1.875rem', md: '2.25rem' },
              lineHeight: 1.2
            }}
          >
            What we offer
          </Typography>

          <Typography
            variant='body1'
            component='p'
            sx={{
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto'
            }}
          >
            We offer Agile transformation, Project Management, Data & Business Intelligence solutions, and professional training to help businesses innovate, grow, and stay ahead in the digital era.
          </Typography>
        </Box>

        {/* Centered Row */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 4, // equal gap between cards
          }}
        >
          {servicesData.map((service, index) => (
            <Paper
              key={index}
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-2xl transition-all duration-300"
              sx={{
                width: 320, // fixed width for equal-sized cards
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(12px)',
                border: '1px solid #E0FFE8',
                borderRadius: '8px',
                boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
                height: 250,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 10px 25px rgba(219, 255, 232, 0.3)',
                  borderColor: theme.palette.primary.main,
                },
              }}
            >
              <Box
                className="inline-flex p-3 rounded-lg mb-4"
                sx={{
                  backgroundColor: '#DBFFE8',
                  color: theme.palette.primary.main,
                  width: 48,
                  height: 48,
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex'
                }}
              >
                {service.icon}
              </Box>
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  color: '#111827'
                }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.5
                }}
              >
                {service.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </section>
  )
}

export default ServicesSection
