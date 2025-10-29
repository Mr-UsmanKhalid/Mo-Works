'use client'

import { Badge, Box, Chip, Container, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion';
import { Calendar, Clock, Code, Users } from "lucide-react";

const AboutSection = () => {

    const theme = useTheme();

    const aboutData = [
        {
            id: 1,
            icon: <Code className="h-5 w-5 text-[#3621A8]" />,
            title: "Modern Tech",
            description: "Using cutting-edge technologies",
        },
        {
            id: 2,
            icon: <Users className="h-5 w-5 text-[#3621A8]" />,
            title: "Expert Team",
            description: "Skilled developers & designers",
        },
        {
            id: 3,
            icon: <Clock className="h-5 w-5 text-[#3621A8]" />,
            title: "Timely Delivery",
            description: "Meeting deadlines consistently",
        },
        {
            id: 4,
            icon: <Calendar className="h-5 w-5 text-[#3621A8]" />,
            title: "Ongoing Support",
            description: "24/7 service and maintenance",
        },
    ]

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

                    {/* <Grid container spacing={6} alignItems='center'>
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <Box className="aspect-[4/3] overflow-hidden rounded-2xl">
                                    <img
                                        src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                        alt="Our Team"
                                        className="w-full h-full object-cover"
                                    />
                                </Box>
                            </motion.div>
                        </Grid>

                        <Grid item size={{ xs: 12, md: 6 }}>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Typography variant='h2' component='h3' sx={{ mb: 6 }}>
                                    Crafting Digital Excellence Since 2018
                                </Typography>

                                <Typography variant='body1' component='p'
                                    sx={{
                                        color: 'text.secondary',
                                        mb: 8
                                        // maxWidth: '700px',
                                        // mx: 'auto'
                                    }}
                                >
                                    We began as a small team with big dreams. Today, we're a diverse
                                    group of professionals united by our passion for technology and
                                    drive to create exceptional digital experiences. Our mission is to
                                    empower businesses through innovative technology solutions that
                                    drive growth and success.
                                </Typography>

                                <Grid container spacing={4}>
                                    {
                                        aboutData.map((item) => (
                                            <Grid key={item.id} item size={{ xs: 12, sm: 6 }}>
                                                <Box className="flex gap-3">
                                                    <Box className="shrink-0 p-2 rounded-md bg-slate-100">
                                                        {item.icon}
                                                    </Box>
                                                    <Box>
                                                        <Typography variant='body1' component='h4' fontWeight={500}>
                                                            {item.title}
                                                        </Typography>
                                                        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                                                            {item.description}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        ))
                                    }
                                </Grid>

                            </motion.div>
                        </Grid>
                    </Grid> */}
                </Container>
            </section>
        </>
    )
}

export default AboutSection
