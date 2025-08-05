'use client'

import { Box, Chip, Container, Grid, Paper, Typography, useTheme } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'
import { BrainCircuitIcon, Cloud, LayoutGrid, Palette, ScanIcon, Smartphone, SparklesIcon, WorkflowIcon } from 'lucide-react'

const ServicesSection = () => {

    const theme = useTheme()

    const servicesData = [
        {
            icon: <WorkflowIcon className="h-6 w-6" />,
            title: "RAG Systems",
            description:
                "Combine your internal data with LLMs for precise and contextual answers.",
            color: "bg-blue-500/10 text-blue-500",
        },
        {
            icon: <ScanIcon className="h-6 w-6" />,
            title: "AI-Powered Chatbots",
            description:
                "Customized assistants that are deeply integrated with internal systems, offering fast, secure, and reliable responses.",
            color: "bg-purple-500/10 text-purple-500",
        },
        {
            icon: <SparklesIcon className="h-6 w-6" />,
            title: "Gen AI Automation",
            description:
                "Automate insight generation, customer support, document processing, and more using LLMs and fine-tuned models.",
            color: "bg-pink-500/10 text-pink-500",
        },
        {
            icon: <BrainCircuitIcon className="h-6 w-6" />,
            title: "Agentic AI Assistants",
            description:
                "Build smart agents that don't just answer they take meaningful action.",
            color: "bg-emerald-500/10 text-emerald-500",
        },
    ]

    return (
        <>
            <section id="services" className="py-24 bg-[#F5F5F580]">
                <Container maxWidth='lg'>
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

                        <Typography variant='body1' component='p'
                            sx={{
                                color: 'text.secondary',
                                maxWidth: '700px',
                                mx: 'auto'
                            }}
                        >
                            Optim Alze solutions tailored to meet your business needs
                            and drive your success in the digital landscape.
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {
                            servicesData?.map((service, index) => (
                                <Grid key={index} item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                                    <Paper
                                        component={motion.div}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group relative p-6 rounded-2xl transition-all duration-300"
                                        sx={{
                                            background: 'rgba(255, 255, 255, 0.9)',
                                            backdropFilter: 'blur(12px)',
                                            border: '1px solid #E0E0E0',
                                            boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
                                            height: { md: '250px' },
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-6px)',
                                                boxShadow: '0 10px 25px rgba(81, 57, 250, 0.2)',
                                                borderColor: theme.palette.primary.main,
                                            }
                                        }}
                                    >
                                        <Box
                                            className="inline-flex p-3 rounded-lg mb-4"
                                            sx={{
                                                backgroundColor: '#EBE9FE', // light brand shade
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

                                </Grid>
                            ))
                        }
                    </Grid>

                </Container>
            </section>
        </>
    )
}

export default ServicesSection