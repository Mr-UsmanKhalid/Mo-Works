'use client'

import { Box, Container, Divider, Grid, IconButton, Stack, Typography, useTheme } from '@mui/material'
import { Code, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {

    const theme = useTheme()

    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="py-12 bg-[#F5F5F580]">
                <Container maxWidth='lg'>
                    <Grid container spacing={4}>
                        <Grid item size={{ xs: 12, md: 3 }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    <Link href="#home" className="flex items-center gap-2">
                                        <img src='/logo.png' className="h-7 w-7" />
                                        {/* <Code className="h-6 w-6 text-[#B91C1C]" /> */}
                                        <Typography sx={{ fontSize: '16px',fontWeight:'600', color: theme.palette.primary.main, }}>Mo Works</Typography>
                                    </Link>

                                    <Typography sx={{
                                        textAlign: 'justify',
                                        maxWidth: '700px',
                                        mx: 'auto'
                                    }} variant='body2' component='p'>
                                        Mo Works drives digital transformation through Agile practices, Project Management, and Data Intelligence. We empower businesses with high-performing teams, data-driven insights, and specialized training in Agile and Power Platform tools.
                                    </Typography>
                                </Box>

                                <Stack direction="row" spacing={2}>
                                    {/* <IconButton size="small"> */}
                                    {/* <FacebookIcon fontSize='small' sx={{ color: 'grey.600', '&:hover': { color: '#B91C1C' } }} /> */}
                                    {/* </IconButton> */}
                                    {/* <IconButton size="small"> */}
                                    {/* <InstagramIcon fontSize='small' sx={{ color: 'grey.600', '&:hover': { color: '#B91C1C' } }} /> */}
                                    {/* </IconButton> */}
                                    {/* <IconButton size="small"> */}
                                    {/* <TwitterIcon fontSize='small' sx={{ color: 'grey.600', '&:hover': { color: '#B91C1C' } }} /> */}
                                    {/* </IconButton> */}
                                    {/* <IconButton size="small"> */}
                                    {/* <GitHubIcon fontSize='small' sx={{ color: 'grey.600', '&:hover': { color: '#B91C1C' } }} /> */}
                                    {/* </IconButton> */}
                                    <Link
                                        href='https://www.linkedin.com/company/moworkseu/'
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
                                <Typography variant='body1' sx={{ fontWeight: 500 }}>Quick Links</Typography>
                                <ul className="space-y-2">
                                    {["Home", "About", "Services", "Contact"].map((item) => (
                                        <li key={item}>
                                            <Link
                                                href={`#${item.toLowerCase()}`}
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
                                <Typography variant='body1' sx={{ fontWeight: 500 }}>Services</Typography>
                                <ul className="space-y-2">
                                    {[
                                        "Agile Transformation","Data Engineering","AI & Intelligent Solutions"
                                    ].map((item) => (
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
                                <Typography variant='body1' sx={{ fontWeight: 500 }}>Contact</Typography>
                                <Box sx={{ fontStyle: 'normal' }}>
                                    <Typography variant='body2' component='p' sx={{ color: 'text.secondary' }}> Address : Kerkhofstraat 25 Rumst</Typography>
                                    <Typography variant='body2' component='p' sx={{ color: 'text.secondary' }}>Rumst, Belgium</Typography>
                                    <Typography variant='body2' component='p' sx={{ color: 'text.secondary', mt: 2 }}>VAT : BE0780.426.960</Typography>
                                    <Typography variant='body2' component='p' sx={{ color: 'text.secondary', mt: 2 }}>mail : info@moworks.be</Typography>
                                    {/* <Typography variant='body2' component='p' sx={{ color: 'text.secondary' }}>123 Business Avenue</Typography> */}

                                    {/* <p>123 Business Avenue</p> */}
                                    {/* <p>Tech City, CA 94103</p>
                                    <p className="mt-4">info@devco.com</p>
                                    <p>+1 (555) 123-4567</p> */}
                                </Box>
                            </Box>
                        </Grid>

                    </Grid>

                    <Divider sx={{ mt: 3 }} />

                    <Box sx={{ pt: 4,
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            justifyContent: 'space-between',
                            alignItems: 'center' }}>
                        <Typography variant='body2' sx={{ color: 'text.secondary' }}>© {currentYear} Mo-Works. All rights reserved.</Typography>
                        <Box sx={{ display: 'flex', gap: 3 , mt: { xs: 2, md: 0 }}}>
                            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                                (item) => (
                                    <Link
                                        key={item}
                                        href="#"
                                        className="text-sm text-[#4F4F4F] transition-colors"
                                    >
                                        {item}
                                    </Link>
                                )
                            )}
                        </Box>
                    </Box>

                </Container>
            </footer>
        </>
    )
}

export default Footer
