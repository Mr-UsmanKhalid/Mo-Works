'use client'

import { Container, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion';

const HeroSection = () => {

  const theme = useTheme();

  return (
    <>
      <section id="home" className="relative min-h-screen overflow-hidden flex items-center bg-white">

        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          <motion.div
            className="absolute left-[10%] top-[20%] w-16 h-16 rounded-full"
            style={{ backgroundColor: '#D1CCFD' }}
            animate={{
              y: [0, -15, 0],
              x: [0, 5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute right-[15%] top-[25%] w-20 h-20 rounded-full"
            style={{ backgroundColor: '#EAE7FE' }}
            animate={{
              y: [0, -20, 0],
              x: [0, -8, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          <motion.div
            className="absolute left-[20%] bottom-[15%] w-24 h-24 rounded-full"
            style={{ backgroundColor: '#D1CCFD' }}
            animate={{
              y: [0, 20, 0],
              x: [0, 12, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute right-[25%] bottom-[20%] w-32 h-32 rounded-full"
            style={{ backgroundColor: '#EAE7FE' }}
            animate={{
              y: [0, 15, 0],
              x: [0, -10, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          />
          <motion.div
            className="absolute left-[40%] top-[10%] w-12 h-12 rounded-full"
            style={{ backgroundColor: '#EAE7FE' }}
            animate={{
              y: [0, -12, 0],
              x: [0, 8, 0]
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute right-[35%] top-[50%] w-16 h-16 rounded-full"
            style={{ backgroundColor: '#EAE7FE' }}
            animate={{
              y: [0, 18, 0],
              x: [0, -6, 0]
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5
            }}
          />
        </div>

        <Container maxWidth="lg" sx={{ py: 8, zIndex: 50 }}>

          <Grid
            container
            spacing={0}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    fontWeight: 'bold',
                    mb: 3,
                    color: theme.palette.primary.main,
                    fontSize: { xs: '2.5rem', md: '3rem', lg: '3.5rem' },
                    lineHeight: 1.2,
                    zIndex: 50
                  }}
                >
                  OptimAlze
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    mb: 4,
                    color: 'text.secondary',
                    maxWidth: '700px',
                    mx: 'auto',
                    zIndex: 50
                  }}
                >
                  GenAI and Agentic AI to empower your future
                  We help forward thinking organizations automate complex tasks using Generative AI and Agentic AI.
                  Whether it's citizen services, internal operations, or customer support we make work smarter, faster, and easier.
                </Typography>

              </motion.div>
            </Grid>
          </Grid>

        </Container>
      </section>
    </>
  )
}

export default HeroSection
 