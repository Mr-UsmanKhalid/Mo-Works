'use client'

import { Box, Chip, Container, Grid, Paper, Typography, useTheme } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'
import { 
  Cloud, 
  LayoutGrid, 
  WorkflowIcon, 
  BrainCircuitIcon, 
  BarChart2, 
  Bot, 
  Smartphone, 
  GraduationCap 
} from 'lucide-react'

const ServicesSection = () => {

    const theme = useTheme()

    const servicesData = [
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Microsoft Fabric",
    description:
      "End-to-end analytics platform combining data movement, storage, pipelines, and governance — all in one place.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: <LayoutGrid className="h-6 w-6" />,
    title: "Synapse Data Warehousing",
    description:
      "Accelerate insights by integrating SQL, Spark, and big data analytics for unified enterprise reporting.",
    color: "bg-sky-500/10 text-sky-500",
  },
  {
    icon: <WorkflowIcon className="h-6 w-6" />,
    title: "Synapse Data Engineering",
    description:
      "Simplify data lake and warehouse management with seamless ingestion, transformation, and sharing.",
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    icon: <BrainCircuitIcon className="h-6 w-6" />,
    title: "Synapse Data Science",
    description:
      "Empower teams with collaborative machine learning, notebooks, and governed data access.",
    color: "bg-violet-500/10 text-violet-500",
  },
  {
    icon: <BarChart2 className="h-6 w-6" />,
    title: "Power BI & Data Assets",
    description:
      "Transform raw data into clear, actionable insights through interactive dashboards and KPIs.",
    color: "bg-yellow-500/10 text-yellow-500",
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "Power Automate",
    description:
      "Boost efficiency by automating repetitive workflows across Microsoft 365 and third-party apps.",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Power Apps",
    description:
      "Rapidly build and deploy custom business apps connected to Microsoft Dataverse and other sources.",
    color: "bg-pink-500/10 text-pink-500",
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Corporate Trainings",
    description:
      "Upskill teams in Power BI, Power Apps, Power Automate, Data Engineering, and Agile practices.",
    color: "bg-orange-500/10 text-orange-500",
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
                            We offer Agile transformation, Project Management, Data & Business Intelligence solutions, and professional training to help businesses innovate, grow, and stay ahead in the digital era.
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
                                            border: '1px solid #E0FFE8',
                                            boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
                                            height: { md: '250px' },
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-6px)',
                                                boxShadow: '0 10px 25px rgba(219, 255, 232, 0.3)',
                                                borderColor: theme.palette.primary.main,
                                            }
                                        }}
                                    >
                                        <Box
                                            className="inline-flex p-3 rounded-lg mb-4"
                                            sx={{
                                                backgroundColor: '#DBFFE8', // light brand shade
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