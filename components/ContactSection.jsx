'use client'

import {
    Box,
    Card,
    Chip,
    Container,
    Grid,
    Typography,
    CardContent,
    TextField,
    InputLabel,
    Button,
    useTheme,
    Snackbar,
    Alert,
    LinearProgress,
    IconButton
} from '@mui/material'
import { motion } from 'framer-motion'
import { Mail, MapPin, UploadCloud, FileText, X } from 'lucide-react'
import React from 'react'
import { useTranslations } from "next-intl";

const ContactSection = () => {
    const t = useTranslations("Contact");
    const theme = useTheme();

    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [file, setFile] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [fieldErrors, setFieldErrors] = React.useState({});
    const [toast, setToast] = React.useState({
        open: false,
        type: "success",
        message: "",
    });

    const fileInputRef = React.useRef(null);

    const MAX_FILE_SIZE = 3 * 1024 * 1024;

    const allowedFileTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    const allowedFileExtensions = [".pdf", ".doc", ".docx"];

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const isFormValid =
        formData.name.trim() &&
        formData.email.trim() &&
        isValidEmail(formData.email) &&
        formData.message.trim();

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

    const validateField = (name, value) => {
        let error = "";

        if (name === "name" && !value.trim()) {
            error = "Name is required.";
        }

        if (name === "email") {
            if (!value.trim()) {
                error = "Email is required.";
            } else if (!isValidEmail(value)) {
                error = "Please enter a valid email address.";
            }
        }

        if (name === "message" && !value.trim()) {
            error = "Message is required.";
        }

        setFieldErrors((prev) => ({
            ...prev,
            [name]: error,
        }));

        return error;
    };

    const validateForm = () => {
        const errors = {
            name: validateField("name", formData.name),
            email: validateField("email", formData.email),
            message: validateField("message", formData.message),
        };

        return !errors.name && !errors.email && !errors.message;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        validateField(name, value);
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files?.[0];

        if (!selectedFile) return;

        const fileName = selectedFile.name.toLowerCase();
        const hasAllowedExtension = allowedFileExtensions.some((ext) =>
            fileName.endsWith(ext)
        );

        if (!allowedFileTypes.includes(selectedFile.type) || !hasAllowedExtension) {
            setFile(null);

            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }

            setFieldErrors((prev) => ({
                ...prev,
                file: "Only PDF, DOC, and DOCX files are allowed.",
            }));

            return;
        }

        if (selectedFile.size > MAX_FILE_SIZE) {
            setFile(null);

            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }

            setFieldErrors((prev) => ({
                ...prev,
                file: "File size must be less than 3MB.",
            }));

            return;
        }

        setFieldErrors((prev) => ({
            ...prev,
            file: "",
        }));

        setFile(selectedFile);
    };

    const removeFile = () => {
        setFile(null);

        setFieldErrors((prev) => ({
            ...prev,
            file: "",
        }));

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleToastClose = () => {
        setToast((prev) => ({
            ...prev,
            open: false,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true);

        try {
            const data = new FormData();

            data.append("name", formData.name.trim());
            data.append("email", formData.email.trim());
            data.append("subject", formData.subject.trim());
            data.append("message", formData.message.trim());

            if (file) {
                data.append("file", file);
            }

            const response = await fetch("/api/contact", {
                method: "POST",
                body: data,
            });

            if (!response.ok) {
                throw new Error("Please try again later.");
            }

            setToast({
                open: true,
                type: "success",
                message: "Message sent successfully!",
            });

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

            setFieldErrors({});
            removeFile();
            e.target.reset();

        } catch {
            setToast({
                open: true,
                type: "error",
                message: "Please try again later.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
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

                    <Typography
                        variant='body1'
                        component='p'
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
                                    <Typography variant='h3' sx={{ color: '#333' }}>
                                        {t("formTitle")}
                                    </Typography>

                                    <Typography variant='body2' sx={{ color: 'text.secondary', mt: 1 }}>
                                        {t("formSubtitle")}
                                    </Typography>

                                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
                                        <Grid container spacing={3}>
                                            <Grid item size={{ xs: 12, sm: 6 }}>
                                                <InputLabel sx={{ fontWeight: 500 }}>
                                                    {t("name")} *
                                                </InputLabel>
                                                <TextField
                                                    fullWidth
                                                    required
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    onBlur={(e) => validateField("name", e.target.value)}
                                                    placeholder={t("namePlaceholder")}
                                                    size="small"
                                                    error={Boolean(fieldErrors.name)}
                                                    helperText={fieldErrors.name || ""}
                                                />
                                            </Grid>

                                            <Grid item size={{ xs: 12, sm: 6 }}>
                                                <InputLabel sx={{ fontWeight: 500 }}>
                                                    {t("email")} *
                                                </InputLabel>
                                                <TextField
                                                    fullWidth
                                                    required
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    onBlur={(e) => validateField("email", e.target.value)}
                                                    placeholder={t("emailPlaceholder")}
                                                    size="small"
                                                    error={Boolean(fieldErrors.email)}
                                                    helperText={fieldErrors.email || ""}
                                                />
                                            </Grid>

                                            <Grid item size={12}>
                                                <InputLabel sx={{ fontWeight: 500 }}>{t("subject")}</InputLabel>
                                                <TextField
                                                    fullWidth
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    placeholder={t("subjectPlaceholder")}
                                                    size="small"
                                                />
                                            </Grid>

                                            <Grid item size={12}>
                                                <InputLabel sx={{ fontWeight: 500 }}>
                                                    {t("message")} *
                                                </InputLabel>
                                                <TextField
                                                    fullWidth
                                                    required
                                                    multiline
                                                    rows={3}
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    onBlur={(e) => validateField("message", e.target.value)}
                                                    placeholder={t("messagePlaceholder")}
                                                    error={Boolean(fieldErrors.message)}
                                                    helperText={fieldErrors.message || ""}
                                                />
                                            </Grid>

                                            <Grid item size={12}>
                                                <InputLabel sx={{ fontWeight: 500, mb: 0.8 }}>
                                                    Attachment
                                                </InputLabel>

                                                <Box
                                                    onClick={() => fileInputRef.current?.click()}
                                                    sx={{
                                                        border: `1.5px dashed ${
                                                            fieldErrors.file
                                                                ? theme.palette.error.main
                                                                : file
                                                                    ? theme.palette.primary.main
                                                                    : '#d0d5dd'
                                                        }`,
                                                        borderRadius: 2,
                                                        p: 2.2,
                                                        cursor: 'pointer',
                                                        bgcolor: file ? 'rgba(54, 33, 168, 0.04)' : '#fafafa',
                                                        transition: '0.2s ease',
                                                        '&:hover': {
                                                            borderColor: fieldErrors.file
                                                                ? theme.palette.error.main
                                                                : theme.palette.primary.main,
                                                            bgcolor: 'rgba(54, 33, 168, 0.04)',
                                                        },
                                                    }}
                                                >
                                                    <input
                                                        ref={fileInputRef}
                                                        hidden
                                                        type="file"
                                                        onChange={handleFileChange}
                                                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                                    />

                                                    {!file ? (
                                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                                            <Box
                                                                sx={{
                                                                    width: 42,
                                                                    height: 42,
                                                                    borderRadius: '50%',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    bgcolor: 'rgba(54, 33, 168, 0.08)',
                                                                    color: theme.palette.primary.main,
                                                                }}
                                                            >
                                                                <UploadCloud size={22} />
                                                            </Box>

                                                            <Box>
                                                                <Typography variant="body2" fontWeight={600} sx={{ color: '#333' }}>
                                                                    Click to upload a document
                                                                </Typography>
                                                                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                                                    PDF, DOC, or DOCX up to 3MB
                                                                </Typography>
                                                            </Box>
                                                        </Box>
                                                    ) : (
                                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1.5 }}>
                                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, minWidth: 0 }}>
                                                                <Box
                                                                    sx={{
                                                                        width: 42,
                                                                        height: 42,
                                                                        borderRadius: '50%',
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center',
                                                                        bgcolor: 'rgba(54, 33, 168, 0.08)',
                                                                        color: theme.palette.primary.main,
                                                                    }}
                                                                >
                                                                    <FileText size={22} />
                                                                </Box>

                                                                <Box sx={{ minWidth: 0 }}>
                                                                    <Typography
                                                                        variant="body2"
                                                                        fontWeight={600}
                                                                        sx={{
                                                                            color: '#333',
                                                                            overflow: 'hidden',
                                                                            textOverflow: 'ellipsis',
                                                                            whiteSpace: 'nowrap',
                                                                        }}
                                                                    >
                                                                        {file.name}
                                                                    </Typography>
                                                                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                                                        {(file.size / 1024 / 1024).toFixed(2)} MB
                                                                    </Typography>
                                                                </Box>
                                                            </Box>

                                                            <IconButton
                                                                size="small"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    removeFile();
                                                                }}
                                                            >
                                                                <X size={18} />
                                                            </IconButton>
                                                        </Box>
                                                    )}
                                                </Box>

                                                {fieldErrors.file && (
                                                    <Typography
                                                        variant="caption"
                                                        sx={{
                                                            color: theme.palette.error.main,
                                                            mt: 0.6,
                                                            display: 'block',
                                                        }}
                                                    >
                                                        {fieldErrors.file}
                                                    </Typography>
                                                )}
                                            </Grid>

                                            <Grid item size={12}>
                                                <Button
                                                    type="submit"
                                                    disabled={loading || !isFormValid}
                                                    fullWidth
                                                    sx={{
                                                        my: 1,
                                                        color: '#fff',
                                                        bgcolor: theme.palette.primary.main,
                                                        opacity: loading || !isFormValid ? 0.65 : 1,
                                                        '&:hover': {
                                                            bgcolor: theme.palette.secondary.dark,
                                                        },
                                                    }}
                                                >
                                                    {loading ? "Sending..." : t("button")}
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
                                <Typography variant='h3' sx={{ color: '#333' }}>
                                    {t('infoTitle')}
                                </Typography>
                                <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                                    {t('infoSubtitle')}
                                </Typography>
                            </Box>

                            <Box className="space-y-4">
                                {contactInfo.map((info, index) => (
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
                                ))}
                            </Box>

                            <Box className="aspect-video rounded-lg overflow-hidden shadow-md mt-6">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977629424647!2d-122.41941508468188!3d37.77492977975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa519bf8358470de0!2sMo%20Works!5e0!3m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={t('mapTitle')}
                                />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Snackbar
                open={toast.open}
                autoHideDuration={6000}
                onClose={handleToastClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert
                    onClose={handleToastClose}
                    severity={toast.type}
                    variant="filled"
                    sx={{
                        width: '100%',
                        minWidth: { xs: '280px', sm: '360px' },
                        position: 'relative',
                        overflow: 'hidden',
                        bgcolor: '#fff',
                        color: '#333',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                        borderLeft: `5px solid ${theme.palette.primary.main}`,
                        '& .MuiAlert-icon': {
                            color: theme.palette.primary.main,
                        },
                    }}
                >
                    {toast.message}

                    <LinearProgress
                        sx={{
                            position: 'absolute',
                            left: 0,
                            bottom: 0,
                            width: '100%',
                            height: 3,
                            bgcolor: 'rgba(0,0,0,0.06)',
                            '& .MuiLinearProgress-bar': {
                                bgcolor: theme.palette.primary.main,
                            },
                        }}
                    />
                </Alert>
            </Snackbar>
        </section>
    );
};

export default ContactSection;