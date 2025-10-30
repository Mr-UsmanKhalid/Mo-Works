'use client'

import { Box, Card, CardContent, Container, Typography, Chip, useTheme } from "@mui/material"
import { CheckCircle, Brain, Users, Rocket, Leaf, Shield } from "lucide-react"
import Marquee from 'react-fast-marquee'

const trustPoints = [
  {
    icon: <CheckCircle size={36} />,
    title: "Certified AI Professionals",
    description: "Our experts hold certifications across Databricks, Azure AI, AWS AI/ML, and OpenAI/GenAI frameworks, ensuring enterprise-grade quality and compliance."
  },
  {
    icon: <Users size={36} />,
    title: "Hands-On Experience",
    description: "Proven success guiding transformations across industries helping teams deliver faster and smarter."
  },
  {
    icon: <Brain size={36} />,
    title: "Tailored Approach",
    description: "No one-size-fits-all each solution is customized to your goals, culture, and technology landscape."
  },
  {
    icon: <Rocket size={36} />,
    title: "End-to-End Delivery",
    description: "From ideation to industrialization, we deliver production-ready AI solutions that scale."
  },
  {
    icon: <Leaf size={36} />,
    title: "Sustainable Change",
    description: "We build your team's capability to ensure lasting impact beyond the project."
  },
  {
    icon: <Shield size={36} />,
    title: "Ethical & Responsible AI",
    description: "We prioritize fairness, transparency, and governance in every AI engagement, ensuring trust and accountability at every level."
  }
]

const ClientSection = () => {
  const theme = useTheme()

  return (
    <section id="partners" className="py-24 overflow-hidden bg-white">
      <Container maxWidth='lg'>
        {/* Header */}
        <Box textAlign="center" mb={8}>
          <Chip variant='outlined' label="Partners" sx={{ mb: 2 }} />
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
            Why Partner With Us
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto'
            }}
          >
            At Mo Works, we believe real transformation happens when strategy, technology, and people align. 
            Here’s why organizations trust us as their transformation partner:
          </Typography>
        </Box>

        {/* Scrolling Cards */}
        <Box sx={{ overflow: 'hidden', px: { xs: 2, md: 6 } }}>
          <Marquee speed={30} pauseOnHover={true} loop={0}>
            <Box
              sx={{
                display: 'flex',
                gap: 4, // equal space between all cards
                py: 2,
                px: 2, // gives start and end space in marquee
              }}
            >
              {trustPoints.map((item, index) => (
                <Card
                  key={index}
                  sx={{
                    minWidth: 280,
                    maxWidth: 300,
                    height: 230,
                    borderRadius: 3,
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    backgroundColor: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <Box sx={{ color: theme.palette.primary.main, mb: 1 }}>
                    {item.icon}
                  </Box>
                  <CardContent sx={{ p: 1, textAlign: 'center' }}>
                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ 
                        px: 1,
                        textAlign: 'justify'
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Marquee>
        </Box>
      </Container>
    </section>
  )
}

export default ClientSection
