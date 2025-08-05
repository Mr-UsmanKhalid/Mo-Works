'use client'

import { Box, Chip, Container, Grid, Paper, Typography, Button, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import { AutoFixHigh, DocumentScanner, Engineering, School } from '@mui/icons-material'

const products = [
  {
    title: 'OptimAIze Buddy',
    tagline: 'Your Digital Services Assistant',
    description: 'A multilingual, AI-powered assistant for navigating complex services using verified data sources.',
    features: [
      'Answers queries across multiple domains',
      '24/7 multilingual access',
      'Form filling & booking inside chat',
      'Reduces support burden'
    ],
    icon: <AutoFixHigh sx={{ fontSize: 40, color: 'primary.main' }} />
  },
  {
    title: 'OptimAIze Automation',
    tagline: 'Intelligent Document Verifier',
    description: 'AI-based document screening solution for automating application and compliance workflows.',
    features: [
      'Validates file types & completeness',
      'Content quality analysis',
      'Flags errors in real-time'
    ],
    icon: <DocumentScanner sx={{ fontSize: 40, color: 'primary.main' }} />
  },
  {
    title: 'OptimAIze Assist',
    tagline: 'Technician + Operator AI Assistant',
    description: 'GenAI-powered tool trained on manuals and SOPs to assist field operators & engineers in real-time.',
    features: [
      'Answers from manuals & logs',
      'Summarizes troubleshooting',
      'Escalation automation'
    ],
    icon: <Engineering sx={{ fontSize: 40, color: 'primary.main' }} />
  },
  {
    title: 'OptimAIze Grader',
    tagline: 'Grading Assistant Trained by You',
    description: 'An academic assistant that learns from human feedback and automates rubric-based grading.',
    features: [
      'Rubric-based scoring',
      'Learns over time',
      'Standardizes evaluation'
    ],
    icon: <School sx={{ fontSize: 40, color: 'primary.main' }} />
  }
]

const ProjectSection = () => {
  const theme = useTheme()

  // Animation variants for staggered card entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="products" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: 0.5
        }}
      />

      <Container maxWidth="lg">
        {/* Section Header */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <Chip variant='outlined' label="Products" className="mb-3" />
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
            Our Products
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.125rem' }
            }}
          >
            Discover our cutting-edge AI solutions designed to automate, simplify, and transform processes across industries.
          </Typography>
        </Box>

        {/* Responsive Project Grid */}
        <Grid
          container
          spacing={4}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <Grid item size={{ xs: 12, sm: 6, }} key={index}>
              <Paper
                component={motion.div}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow: theme.shadows[8],
                  transition: { duration: 0.3 }
                }}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'grey.200',
                  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.grey[50]} 100%)`,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: theme.palette.primary.light
                  }
                }}
                role="article"
                aria-label={`Product: ${product.title}`}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  {product.icon}
                  <Box sx={{ ml: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}
                    >
                      {product.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: theme.palette.text.secondary, fontStyle: 'italic' }}
                    >
                      {product.tagline}
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.text.secondary, mb: 3, flexGrow: 1 }}
                >
                  {product.description}
                </Typography>

                <Box component="ul" sx={{ pl: 2, mb: 3, color: theme.palette.text.secondary }}>
                  {product.features.map((feat, i) => (
                    <li key={i} style={{ marginBottom: '8px' }}>
                      <Typography variant="body2">{feat}</Typography>
                    </li>
                  ))}
                </Box>
                {/* 
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  sx={{ alignSelf: 'flex-start', textTransform: 'none' }}
                  aria-label={`Learn more about ${product.title}`}
                >
                  Learn More
                </Button> */}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  )
}

export default ProjectSection