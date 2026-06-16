'use client'

import { Box, Card, CardHeader, Chip, Container, Grid, Typography, CardTitle, CardDescription, CardContent, TextField, InputLabel, TextareaAutosize, Button, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { useTranslations } from "next-intl";


const ContactSection = () => {

    const t = useTranslations("Contact");

    const theme = useTheme()

    const contactInfo = [
        {
            icon: <MapPin className="h-5 w-5" />,
            title: t("addressTitle"),
            details: "Kerkhofstraat 25 Rumst, Belgium",
        },
        {
            icon: <Mail className="h-5 w-5" />,
            title: t("emailTitle"),
            details: "info@moworks.be",
        },
    ];

    return (
        <>
            <section id="contact" className="py-24 bg-white">
                <Container maxWidth='lg'>
                    <Box className="mb-16 text-center">
                        <Chip variant="outlined" label={t("label")} className="mb-3" />
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                fontWeight: 'bold',
                                mb: 2.2,
                                color: theme.palette.primary.main,
                                fontSize: { xs: '1.875rem', md: '2.25rem' },
                                lineHeight: 1.2
                            }}
                        >
                           {t("title")}
                        </Typography>

                        <Typography variant='body1' component='p'
                            sx={{
                                color: 'text.secondary',
                                maxWidth: '700px',
                                mx: 'auto'
                            }}
                        >
                            {t("subtitle")}
                        </Typography>
                    </Box>

                    <Grid container spacing={6}>
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <Card>
                                    <CardContent sx={{ p: 4 }}>
                                        <Typography variant='h3' sx={{ color: '#333', }}>{t("formTitle")}</Typography>
                                        <Typography variant='body2' sx={{ color: 'text.secondary', mt: 1 }}>
                                            {t("formSubtitle")}
                                        </Typography>

                                        <Box component="form" noValidate sx={{ mt: 2 }}>
                                            <Grid container spacing={3}>
                                                <Grid item size={{ xs: 12, sm: 6 }}>
                                                    <InputLabel sx={{ fontWeight: 500 }}>{t("name")}</InputLabel>
                                                    <TextField
                                                        fullWidth
                                                        name="name"
                                                        type='text'
                                                        placeholder={t("namePlaceholder")}
                                                        size='small'
                                                    />
                                                </Grid>
                                                <Grid item size={{ xs: 12, sm: 6 }}>
                                                    <InputLabel sx={{ fontWeight: 500 }}>{t("email")}</InputLabel>
                                                    <TextField
                                                        fullWidth
                                                        name="email"
                                                        // type="email"
                                                        placeholder={t("emailPlaceholder")}
                                                        size='small'
                                                    />
                                                </Grid>

                                                <Grid item size={12}>
                                                    <InputLabel sx={{ fontWeight: 500 }}>{t("subject")}</InputLabel>
                                                    <TextField
                                                        fullWidth
                                                        name="subject"
                                                        type='text'
                                                        placeholder={t("subjectPlaceholder")}
                                                        size='small'
                                                    />
                                                </Grid>

                                                <Grid item size={12}>
                                                    <InputLabel sx={{ fontWeight: 500 }}>{t("message")}</InputLabel>
                                                    <TextField
                                                        fullWidth
                                                        name="message"
                                                        placeholder={t("messagePlaceholder")}
                                                        rows={5}
                                                        className="resize-none"
                                                    />
                                                </Grid>

                                                <Grid item size={12}>
                                                    <Button
                                                        fullWidth
                                                        // type="submit"
                                                        // className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white"
                                                        sx={{
                                                            my: 1, color: '#fff',
                                                            bgcolor: theme.palette.primary.main,
                                                            '&:hover': {
                                                                bgcolor: theme.palette.primary.dark,
                                                            },
                                                        }}
                                                    >
                                                        {t("button")}
                                                    </Button>
                                                </Grid>

                                            </Grid>
                                        </Box>

                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>

                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                                sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                            >
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <Typography variant='h3' sx={{ color: '#333', }}>{t('infoTitle')}</Typography>
                                    <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                                        {t('infoSubtitle')}
                                    </Typography>
                                </Box>

                                <Box className="space-y-4">
                                    {
                                        contactInfo?.map((info, index) => (
                                            <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                                <Box className="p-2 rounded-md bg-slate-100 text-[#3621A8]">
                                                    {info.icon}
                                                </Box>

                                                <Box>
                                                    <Typography variant='body1' component='h4' fontWeight={500}>
                                                        {info.title}
                                                    </Typography>
                                                    <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                                                        {info.details}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        ))
                                    }

                                </Box>

                                <Box className="aspect-video rounded-lg overflow-hidden shadow-md mt-6">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977629424647!2d-122.41941508468188!3d37.77492977975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa519bf8358470de0!2sMo%20Works!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title={t('mapTitle')}
                                    ></iframe>
                                </Box>

                            </Box>

                        </Grid>

                    </Grid>

                </Container>
            </section>
        </>
    )
}

export default ContactSection
