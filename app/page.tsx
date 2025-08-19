"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Github,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Calendar,
  Code,
  Moon,
  Sun,
  Send,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Menu,
  X,
  Zap,
  Cpu,
  Palette,
  Rocket,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import emoji from '../public/emoji.jpg';
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
}

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "ReactJS",
    "Next.js",
    "Tailwind CSS",
    "Bootstrap",
    "Node.js",
    "MongoDB",
    "Express.js",
    "GitHub",
    "npm",
    "v0.dev",
    "GPT/AI Tools",
    "Grok",
    "Hero UI",
    "Cursor IDE",
    "GitHub Copilot",
  ]

  const projects = [
    {
      title: "Homeshapers",
      description:
        "Modern e-commerce furniture platform with AI-powered product recommendations, interactive 3D product displays, and seamless checkout experience. Built with cutting-edge web technologies.",
      tech: ["Next.js", "Tailwind CSS", "Express.js", "MongoDB", "AI Integration"],
      link: "https://www.homeshapers.co",
      github: "https://github.com/solankiaahan/homeshapers",
      date: "Jun 2023",
    },
    {
      title: "Gate8",
      description:
        "Comprehensive travel platform featuring real-time flight tracking, smart itinerary planning, and personalized accommodation recommendations powered by multiple travel APIs.",
      tech: ["Next.js", "Tailwind CSS", "Travel APIs", "Real-time Data"],
      link: "https://gate8.travel",
      github: "https://github.com/solankiaahan/gate8-travel",
      date: "Aug 2023",
    },
    {
      title: "SchoolCard",
      description:
        "Advanced school management system with role-based authentication, student progress tracking, and automated report generation. Features intuitive dashboards for all user types.",
      tech: ["ReactJS", "Bootstrap", "CSS3", "Metronics", "Role Management"],
      link: "https://manjushanetwork.com",
      github: "https://github.com/solankiaahan/schoolcard-system",
      date: "Feb 2024",
    },
    {
      title: "PropertyAI",
      description:
        "Revolutionary AI-powered property search platform leveraging OpenAI for intelligent property matching, market analysis, and personalized investment recommendations.",
      tech: ["Next.js", "Tailwind CSS", "ShadCN UI", "OpenAI API", "Machine Learning"],
      link: "https://property-ai-webapp-frontend.vercel.app",
      github: "https://github.com/solankiaahan/property-ai-webapp",
      date: "Oct 2024",
    },
    {
      title: "Velox Payment App",
      description:
        "The Velox Payment App provides International Money Transfer, Multi-Currency Wallet, and Bills Payment services. I developed the Admin Portal, a centralized platform to monitor and configure services.",
      tech: ["React.js", "Node.js", "Payment APIs", "Admin Dashboard", "Multi-Currency"],
      link: "https://dev.admin.veloxpayments.co/",
      github: "https://github.com/solankiaahan/velox-payment-admin",
      date: "Nov 2024",
    },
    {
      title: "Freelancers per Hour",
      description:
        "Revolutionary freelance marketplace connecting businesses with top-tier developers worldwide. Features intelligent talent matching, integrated testing modules with timer functionality, and streamlined project management. Built with modern UI components for seamless user experience.",
      tech: ["Next.js", "Tailwind CSS", "ShadCN UI", "Testing Module", "Timer System"],
      link: "https://gphdev.vercel.app/",
      github: "https://github.com/solankiaahan/freelancers-per-hour",
      date: "May 2025",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 w-full glass z-50 border-b border-border/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"
            >
              AS
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.05 }}
                  className="text-muted-foreground hover:text-accent transition-colors font-medium"
                >
                  {item}
                </motion.a>
              ))}
              <Button variant="ghost" size="sm" onClick={toggleDarkMode} className="ml-4">
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={toggleDarkMode}>
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" size="sm" onClick={toggleMobileMenu}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border/50 py-4"
            >
              <div className="flex flex-col space-y-4">
                {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-muted-foreground hover:text-accent transition-colors font-medium py-2"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-accent/5 gradient-animate"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl float-animation"></div>
        <div
          className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl float-animation"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="max-w-7xl mx-auto relative">
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="text-center">
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-accent via-primary to-accent/70 flex items-center justify-center text-white text-5xl font-bold shadow-2xl relative pulse-glow">
                <Sparkles className="absolute -top-2 -right-2 h-8 w-8 text-white animate-pulse" />
                <Zap className="absolute -bottom-2 -left-2 h-6 w-6 text-white animate-bounce" />
                <Image src={emoji} alt="" className="rounded-full" />
              </div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-8xl font-bold text-foreground mb-6 tracking-tight"
            >
              Aahan Solanki
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-2xl md:text-3xl text-accent mb-4 font-semibold">
              Software Engineer & ReactJS Developer
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg text-primary mb-8 font-medium">
              Powered by AI • Built with Modern Tools • Delivered at Lightning Speed
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              A passionate engineer leveraging cutting-edge AI tools like v0, GPT, Grok, and modern development
              environments including Cursor and GitHub Copilot to deliver exceptional web applications with
              unprecedented speed and precision.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg group">
                <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link

                href="https://github.com/aahan078" target="_blank"
                className="px-8 py-4 text-lg  items-center text-accent  transition-all hover:text-orange-700 bg-transparent flex"
              >
                <Github className="mr-2 h-5 w-5" />
                View GitHub
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-center mb-16 text-foreground">About Me</h2>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="glass p-6 rounded-2xl border border-accent/20">
                  <h3 className="text-2xl font-semibold text-accent mb-4 flex items-center gap-2">
                    <Cpu className="h-6 w-6" />
                    AI-Powered Development
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I leverage cutting-edge AI tools including v0.dev, GPT, Grok, and advanced IDEs like Cursor with
                    GitHub Copilot to accelerate development cycles and deliver high-quality solutions in record time.
                  </p>
                </div>

                <div className="glass p-6 rounded-2xl border border-primary/20">
                  <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
                    <Rocket className="h-6 w-6" />
                    Modern Tech Stack
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Specializing in React ecosystem with Next.js, combined with modern UI libraries like Hero UI and
                    design systems that create stunning, responsive applications across all platforms.
                  </p>
                </div>

                <div className="glass p-6 rounded-2xl border border-accent/20">
                  <h3 className="text-2xl font-semibold text-accent mb-4 flex items-center gap-2">
                    <Palette className="h-6 w-6" />
                    Creative Problem Solving
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    From mechanical engineering to software development, I bring a unique analytical approach to
                    creating innovative digital solutions that exceed expectations.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="glass border-accent/20 hover:border-accent/40 transition-all duration-300">
                  <CardContent className="p-8 space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-semibold text-foreground mb-2">Get Connected</h3>
                      <p className="text-muted-foreground">Let's build something amazing together</p>
                    </div>

                    <motion.div
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 glass rounded-lg border border-accent/20 hover:border-accent/40 transition-all"
                    >
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Location</p>
                        <p className="text-muted-foreground">Indore, Madhya Pradesh</p>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 glass rounded-lg border border-primary/20 hover:border-primary/40 transition-all"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <p className="text-muted-foreground">+91 9993343796</p>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 glass rounded-lg border border-accent/20 hover:border-accent/40 transition-all"
                    >
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-muted-foreground">solankiaahan@gmail.com</p>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-center mb-16 text-foreground">Professional Experience</h2>
            <Card className="max-w-5xl mx-auto glass border-accent/20 hover:border-accent/40 transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-3xl text-accent mb-2">Software Engineer</CardTitle>
                    <CardDescription className="text-xl text-muted-foreground">
                      Vkaps IT Solutions • Indore, India
                    </CardDescription>
                  </div>
                  <Badge
                    variant="secondary"
                    className="mt-4 md:mt-0 bg-accent/10 text-accent border-accent/20 px-4 py-2"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Apr 2023 - Present
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-lg text-muted-foreground">
                  <li className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    Developed and maintained dynamic and responsive user interfaces for diverse projects
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    Utilized ReactJS and its frameworks as primary technologies, ensuring efficient and performant web
                    applications
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    Collaborated with cross-functional teams to meet project requirements, adhering to best practices
                    and industry standards
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-center mb-16 text-foreground">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full glass border-accent/20 hover:border-accent/40 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardHeader className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <CardTitle className="text-2xl text-accent group-hover:text-accent/80 transition-colors flex items-center gap-2">
                          <Sparkles className="h-5 w-5" />
                          {project.title}
                        </CardTitle>
                        <Badge variant="outline" className="border-accent/30 text-accent bg-accent/10">
                          {project.date}
                        </Badge>
                      </div>
                      <CardDescription className="text-lg leading-relaxed text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent group/btn"
                          asChild
                        >
                          <Link href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-45 transition-transform" />
                            Live Demo
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent group/btn"
                          asChild
                        >
                          <Link href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                            GitHub
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-center mb-16 text-foreground">Technical Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <Badge
                    variant="outline"
                    className="text-lg px-6 py-3 glass border-accent/30 text-accent hover:bg-accent hover:text-black dark:hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    <Code className="mr-2 h-5 w-5" />
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-foreground">Let's Work Together</h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can
                create something amazing together.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 glass rounded-lg border border-accent/20 hover:border-accent/40 transition-all"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">solankiaahan@gmail.com</p>
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 glass rounded-lg border border-accent/20 hover:border-accent/40 transition-all"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">+91 9993343796</p>
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 glass rounded-lg border border-accent/20 hover:border-accent/40 transition-all"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Github className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">GitHub</p>
                      <p className="text-muted-foreground">github.com/solankiaahan</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="glass border-accent/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-accent flex items-center gap-2">
                    <MessageSquare className="h-6 w-6" />
                    Send Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-background/50 border-accent/30 focus:border-accent"
                          required
                        />
                      </div>
                      <div>
                        <Input
                          name="email"
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-background/50 border-accent/30 focus:border-accent"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Input
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="bg-background/50 border-accent/30 focus:border-accent"
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-background/50 border-accent/30 focus:border-accent min-h-[120px]"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 text-lg group"
                    >
                      <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent/20 to-primary"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg opacity-90 mb-2">
              © {new Date().getFullYear()} Aahan Solanki. Built with Next.js, Tailwind CSS, and Framer Motion.
            </p>
            <p className="text-sm opacity-70 mb-4">Powered by AI Tools & Modern Development Stack</p>
            <div className="flex justify-center items-center gap-2 text-sm opacity-60">
              <span>Crafted with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                className="text-red-400"
              >
                ❤️
              </motion.span>
              <span>and lots of</span>
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                ☕
              </motion.span>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
