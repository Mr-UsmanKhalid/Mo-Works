'use client'

import { Badge, Box, Chip, Container, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion';
import { Calendar, Clock, Code, Users } from "lucide-react";
import { useTranslations } from "next-intl";

const AboutSection = () => {
    const t = useTranslations("About");
    const theme = useTheme();


    return (
        <>
            <section id="about" className="py-24 bg-white">
                <Container maxWidth='lg'>
                    <Box className="mb-16 text-center">
                        <Chip variant="outlined" label={t("label")} className="mb-3" />
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
                            {t("title")}
                        </Typography>

                        <Typography variant='body1' component='p'
                            sx={{
                                textAlign: 'justify',
                                color: 'text.secondary',
                                maxWidth: '700px',
                                mx: 'auto'
                            }}
                        >
                            {t("description")}
                        </Typography>

                    </Box>

                </Container>
            </section>
        </>
    )
}

export default AboutSection
