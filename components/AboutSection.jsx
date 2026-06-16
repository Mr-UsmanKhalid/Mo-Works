'use client'

import { Badge, Box, Chip, Container, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion';
import { Calendar, Clock, Code, Users } from "lucide-react";

const AboutSection = () => {

    const theme = useTheme();

   
    return (
        <>
            <section id="about" className="py-24 bg-white">
                <Container maxWidth='lg'>
                    <Box className="mb-16 text-center">
                        <Chip variant='outlined' label="About Us" className="mb-3" />
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
                            Who we are
                        </Typography>

                        <Typography variant='body1' component='p'
                            sx={{
                                textAlign: 'justify',
                                color: 'text.secondary',
                                maxWidth: '700px',
                                mx: 'auto'
                            }}
                        >
                           We are a boutique IT consultancy specializing in Agile transformation, Data Engineering, and AI solutions. Our mission is to help organizations become faster, smarter, and more adaptable in an ever-evolving digital world. 

We believe that technology should empower people to make better decisions, deliver faster, and innovate with confidence. By combining Agile principles, modern data architectures, and responsible AI practices, we enable our clients to turn complexity into clarity  and insight into impact. 

From redefining delivery models to building intelligent data pipelines and deploying AI-powered applications, we partner closely with teams to design solutions that create measurable business value. 

Agility. Data. AI. Transformation. 
It’s not just what we do  it’s how we think. 

Shape 

Perfect  here’s your refined “Agile Transformation Services” section with the added emphasis on your certified trainers and practitioners under Why Partner With Us. 
                        </Typography>

                    </Box>

                </Container>
            </section>
        </>
    )
}

export default AboutSection
