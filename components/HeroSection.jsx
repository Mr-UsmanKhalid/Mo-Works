'use client'

import { Container, Grid, Typography, useTheme, Box } from '@mui/material'
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
            style={{ backgroundColor: '#DBFFE8' }}
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
            style={{ backgroundColor: '#E0FFE8' }}
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
            style={{ backgroundColor: '#E0FFE8' }}
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
            style={{ backgroundColor: '#E0FFE8' }}
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
            style={{ backgroundColor: '#E0FFF0' }}
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
            style={{ backgroundColor: '#E0FFE8' }}
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
                
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  mb: 1,
                  zIndex: 50
                }}>
                  <img src='/logo.png' className="h-30 w-30" />
                            <Typography
                    variant="subtitle1"
                    sx={{
                      mt: 1.5,
                      fontSize: { xs: '14px', sm: '16px' },
                      fontWeight: 600,
                      fontStyle: 'italic',
                      fontWeight: 500,
                      color: theme.palette.primary.main,
                      letterSpacing: 0.6,
                      textTransform: 'uppercase',
                    }}
                  >
                    Transforming Data, Powering AI, Accelerating Agility
                  </Typography>
                </Box>

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
                  Mo Works drives digital transformation through Agile practices, Project Management, and Data Intelligence. We empower businesses with high-performing teams, data-driven insights, and specialized training in Agile and Power Platform tools.
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