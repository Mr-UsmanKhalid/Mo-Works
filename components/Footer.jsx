'use client'

import { Box, Container, Divider, Grid, Stack, Typography, useTheme } from '@mui/material'
import { Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useTranslations } from 'next-intl'

const Footer = () => {
    const theme = useTheme()
    const t = useTranslations('Footer')
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { label: t('home'), href: '#home' },
        { label: t('about'), href: '#about' },
        { label: t('services'), href: '#services' },
        { label: t('contact'), href: '#contact' },
    ]

    const services = [
        t('agile'),
        t('dataEngineering'),
        t('aiSolutions'),
    ]

    const policyLinks = [
        t('privacyPolicy'),
        t('termsOfService'),
        t('cookiePolicy'),
    ]

    return (
        <footer className="py-12 bg-[#F5F5F580]">
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item size={{ xs: 12, md: 3 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <Link href="#home" className="flex items-center gap-2">
                                    <img src="/logo.png" className="h-7 w-7" />
                                    <Typography sx={{ fontSize: '16px', fontWeight: '600', color: theme.palette.primary.main }}>
                                        Mo Works
                                    </Typography>
                                </Link>

                                <Typography
                                    sx={{
                                        textAlign: 'justify',
                                        maxWidth: '700px',
                                        mx: 'auto',
                                    }}
                                    variant="body2"
                                    component="p"
                                >
                                    {t('description')}
                                </Typography>
                            </Box>

                            <Stack direction="row" spacing={2}>
                                <Link
                                    href="https://www.linkedin.com/company/moworkseu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-[#008000] transition-colors"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </Link>
                            </Stack>
                        </Box>
                    </Grid>

                    <Grid item size={{ xs: 12, md: 3 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                {t('quickLinks')}
                            </Typography>

                            <ul className="space-y-2">
                                {quickLinks.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Box>
                    </Grid>

                    <Grid item size={{ xs: 12, md: 3 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                {t('servicesTitle')}
                            </Typography>

                            <ul className="space-y-2">
                                {services.map((item) => (
                                    <li key={item}>
                                        <Link
                                            href="#services"
                                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Box>
                    </Grid>

                    <Grid item size={{ xs: 12, md: 3 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                {t('contactTitle')}
                            </Typography>

                            <Box sx={{ fontStyle: 'normal' }}>
                                <Typography variant="body2" component="p" sx={{ color: 'text.secondary' }}>
                                    {t('address')} : Kerkhofstraat 25 Rumst, Belgium
                                </Typography>

                                <Typography variant="body2" component="p" sx={{ color: 'text.secondary', mt: 2 }}>
                                    VAT : BE0780.426.960
                                </Typography>

                                <Typography variant="body2" component="p" sx={{ color: 'text.secondary', mt: 2 }}>
                                    {t('email')} : info@moworks.be
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ mt: 3 }} />

                <Box
                    sx={{
                        pt: 4,
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        © {currentYear} Mo-Works. {t('rights')}
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 3, mt: { xs: 2, md: 0 } }}>
                        {policyLinks.map((item) => (
                            <Link
                                key={item}
                                href="#"
                                className="text-sm text-[#4F4F4F] transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                    </Box>
                </Box>
            </Container>
        </footer>
    )
}

export default Footer