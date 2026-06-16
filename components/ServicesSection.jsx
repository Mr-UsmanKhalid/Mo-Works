'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Workflow, BrainCircuit, DatabaseZap, ArrowUpRight, X } from 'lucide-react'
import { Badge, Box, Chip, Container, Grid, Typography, useTheme } from '@mui/material'
import { color } from 'framer-motion'
import { useTranslations } from "next-intl";

const ServicesSection = () => {

  const t = useTranslations("Services");
  const theme = useTheme();
  const [expandedId, setExpandedId] = useState(null)

  const handleCardClick = (id) => {
    // If card is expanded, close it when clicking anywhere inside
    if (expandedId === id) {
      setExpandedId(null)
    }
  }

  const handleExpandClick = (id, e) => {
    e.stopPropagation() // Prevent card click when clicking expand button
    setExpandedId(expandedId === id ? null : id)
  }


  const servicesData = [
    {
      id: 1,
      icon: Workflow,
      title: t("agile.title"),
      description: t("agile.description"),
      details: t("agile.details"),
      color: "#10B981",
    },
    {
      id: 2,
      icon: DatabaseZap,
      title: t("data.title"),
      description: t("data.description"),
      details: t("data.details"),
      color: "#10B981",
    },
    {
      id: 3,
      icon: BrainCircuit,
      title: t("ai.title"),
      description: t("ai.description"),
      details: t("ai.details"),
      color: "#10B981",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">


      <Container maxWidth='lg'>
        {/* Header */}
        <Box className="mb-16 text-center">
          <Chip variant="outlined" label={t("label")} className="mb-3" />
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 'bold',
              mb: 3,
              color: useTheme().palette.primary.main,
              fontSize: { xs: '1.875rem', md: '2.25rem' },
              lineHeight: 1.2
            }}
          >
            {t("title")}
          </Typography>
          <Typography variant='body1' component='p'
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto'
            }}
          >
            {t("subtitle")}
          </Typography>
        </Box>


        {/* Service Cards */}
        <div className="flex justify-center items-stretch flex-wrap gap-6">
          {servicesData.map((service) => {
            const isExpanded = expandedId === service.id
            const Icon = service.icon

            return (
              <div
                key={service.id}
                onClick={() => handleCardClick(service.id)}
                style={{
                  width: isExpanded ? '100%' : '320px',
                  flexGrow: isExpanded ? 1 : 0,
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: isExpanded ? 'pointer' : 'default',

                  // ✅ Float on top ONLY for desktop/tablet
                  zIndex: isExpanded && typeof window !== "undefined" && window.innerWidth > 768 ? 10 : "auto",
                  position: isExpanded && typeof window !== "undefined" && window.innerWidth > 768 ? "relative" : "static",
                }}

              >
                <div
                  className="p-6 rounded-2xl relative overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(12px)',
                    border: isExpanded
                      ? `2px solid ${service.color}`
                      : '1px solid #E0FFE8',
                    transition: 'all 0.3s ease',
                    boxShadow: isExpanded
                      ? '0 10px 30px rgba(0,0,0,0.1)'
                      : '0 6px 20px rgba(0,0,0,0.05)',
                    height: '100%',
                  }}
                >
                  <div
                    className="inline-flex p-3 rounded-lg mb-4 items-center justify-center"
                    style={{
                      backgroundColor: '#DBFFE8',
                      color: service.color,
                      width: '48px',
                      height: '48px',
                    }}
                  >
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.875rem',
                      lineHeight: '1.6',
                      mb: isExpanded ? '1rem' : '3rem',
                      textAlign: 'justify',
                    }}
                  >
                    {service.description}
                  </Typography>

                  <button
                    onClick={(e) => handleExpandClick(service.id, e)}
                    className="absolute right-4 p-2 rounded-full transition-all duration-300"
                    style={{
                      top: isExpanded ? '16px' : 'auto',
                      bottom: isExpanded ? 'auto' : '16px',
                      backgroundColor: '#DBFFE8',
                      color: service.color,
                      cursor: 'pointer',
                      hover: {
                        backgroundColor: service.color,
                        color: '#FFFFFF',
                      }
                    }}

                  >
                    {isExpanded ? <X size={18} /> : <ArrowUpRight size={18} />}
                  </button>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div
                      style={{
                        animation: 'fadeIn 0.6s ease-in-out',
                      }}
                    >
                      <Typography variant="p" component="div"
                        sx={{
                          whiteSpace: 'pre-line',
                          textAlign: 'justify',
                          color: 'text.secondary',
                          mt: 2
                        }}>
                        {service.details}
                      </Typography>

                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </Container>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

export default ServicesSection