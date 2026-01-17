import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import "../styles/global.css"

const IndexPage = () => {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      const sections = ['hero', 'impact', 'expertise', 'mission', 'connect']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const metrics = [
    { value: "99.9%", label: "System Uptime", detail: "Federal Healthcare Platforms" },
    { value: "25+", label: "Years Leading", detail: "Technology Transformation" },
    { value: "40%", label: "Resilience Gain", detail: "Infrastructure Optimization" },
    { value: "10+", label: "Vendor Partners", detail: "Strategic Coordination" }
  ]

  const expertise = [
    {
      category: "Federal & Civic Technology",
      items: ["Healthcare.gov Operations", "Medicare.gov Architecture", "CMS.gov Infrastructure", "Mission-Critical Systems"]
    },
    {
      category: "DevOps Excellence",
      items: ["Container Orchestration", "CI/CD Pipeline Design", "Infrastructure as Code", "Site Reliability Engineering"]
    },
    {
      category: "Strategic Leadership",
      items: ["Multi-Vendor Coordination", "Digital Transformation", "Crisis Response Systems", "Community Resilience"]
    },
    {
      category: "Training & Mentorship",
      items: ["AI Strategy", "Open Source Procurement", "Technical Upskilling", "Cybersecurity Leadership"]
    }
  ]

  const currentWork = [
    {
      title: "Relief Logistics Platform",
      description: "Building next-generation supply chain technology for emergency response agencies",
      tech: "AWS, Python, Kubernetes"
    },
    {
      title: "AI Policy Framework",
      description: "Developing governance models for educational institutions with US Digital Response",
      tech: "Policy Design, Compliance Automation"
    },
    {
      title: "Infrastructure Modernization",
      description: "Leading container orchestration migration for enterprise CI/CD pipelines",
      tech: "Docker, Kubernetes, Jenkins"
    }
  ]

  return (
    <>
      <Helmet>
        <title>Dave - Executive Technology Leadership</title>
        <meta name="description" content="CTO | DevOps Leader | Mission-Driven Technologist" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet" />
      </Helmet>

      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-inner">
          <div className="nav-logo">
            <span className="logo-text">DAVE</span>
            <span className="logo-subtitle">DEVOPS</span>
          </div>
          <div className="nav-links">
            {['impact', 'expertise', 'mission', 'connect'].map((section) => (
              <a 
                key={section}
                href={`#${section}`}
                className={activeSection === section ? 'active' : ''}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-background">
          <div className="grid-overlay"></div>
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">EXPERIENCED TECHNICAL LEADERSHIP</div>
            <h1 className="hero-title">
              <span className="title-line">Building Resilient</span>
              <span className="title-line accent">Infrastructure</span>
              <span className="title-line">For Human Impact</span>
            </h1>
            <p className="hero-description">
              Assistant Director of DevOps at CivicActions, orchestrating federal healthcare systems 
              that serve millions. 25+ years transforming technology into mission-critical solutions
              for communities and organizations that matter.
            </p>
            <div className="hero-actions">
              <a href="#connect" className="btn btn-primary">
                <span>Start Conversation</span>
                <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#mission" className="btn btn-secondary">
                <span>View Mission</span>
              </a>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>SCROLL</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section id="impact" className="impact-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">MEASURABLE IMPACT</span>
            <h2>Performance That Matters</h2>
          </div>
          
          <div className="metrics-grid">
            {metrics.map((metric, index) => (
              <div key={index} className="metric-card" style={{'--delay': `${index * 0.1}s`}}>
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
                <div className="metric-detail">{metric.detail}</div>
                <div className="metric-accent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section id="expertise" className="expertise-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">TECHNICAL EXCELLENCE</span>
            <h2>Deep Expertise, Broad Vision</h2>
          </div>
          
          <div className="expertise-grid">
            {expertise.map((area, index) => (
              <div key={index} className="expertise-card">
                <h3>{area.category}</h3>
                <ul>
                  {area.items.map((item, idx) => (
                    <li key={idx}>
                      <span className="expertise-marker"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="current-work">
            <h3>Active Initiatives</h3>
            <div className="work-grid">
              {currentWork.map((work, index) => (
                <div key={index} className="work-card">
                  <h4>{work.title}</h4>
                  <p>{work.description}</p>
                  <div className="work-tech">{work.tech}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="section-header">
              <span className="section-label">MISSION-DRIVEN LEADERSHIP</span>
              <h2>Technology With Purpose</h2>
            </div>
            
            <div className="mission-grid">
              <div className="mission-card">
                <div className="mission-icon">🏥</div>
                <h3>Healthcare Access</h3>
                <p>
                  Maintaining critical infrastructure for healthcare.gov, medicare.gov, 
                  and cms.gov - ensuring millions can access essential services.
                </p>
              </div>
              
              <div className="mission-card">
                <div className="mission-icon">🚨</div>
                <h3>Emergency Response</h3>
                <p>
                  Developing relief logistics platforms and crisis response systems 
                  that enable rapid, coordinated action when communities need it most.
                </p>
              </div>
              
              <div className="mission-card">
                <div className="mission-icon">🌍</div>
                <h3>Community Resilience</h3>
                <p>
                  Building technology that strengthens underserved communities, 
                  from educational AI governance to digital response initiatives.
                </p>
              </div>
            </div>

            <div className="vision-statement">
              <blockquote>
                "The best technology disappears into the background, 
                enabling humans to focus on what matters: serving each other."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="connect-section">
        <div className="container">
          <div className="connect-content">
            <h2>Let's Build Something That Matters</h2>
            <p>
              Looking for an experienced technical leader who combines deep technical expertise with 
              mission-driven leadership? Let's discuss how we can create 
              resilient, impactful technology together.
            </p>
            
            <div className="connect-grid">
              <div className="connect-card">
                <h3>Ideal Opportunities</h3>
                <ul>
                  <li>Nonprofit & NGO Leadership</li>
                  <li>Civic Technology Initiatives</li>
                  <li>Healthcare Technology Platforms</li>
                  <li>Emergency Management Systems</li>
                  <li>Clean Energy Infrastructure</li>
                </ul>
              </div>
              
              <div className="connect-card">
                <h3>Recent Engagements</h3>
                <ul>
                  <li>CivicActions - DevOps Leadership</li>
                  <li>US Digital Response - AI Policy</li>
                  <li>Harris County DoE - Compliance</li>
                  <li>Federal Healthcare Platforms</li>
                  <li>Relief Logistics Technology</li>
                </ul>
              </div>
            </div>
            
            <div className="connect-actions">
              <a href="mailto:dave@example.com" className="btn btn-primary">
                <span>Email Directly</span>
                <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/dave" className="btn btn-secondary">
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <span>© 2025 Dave</span>
              <span className="footer-divider">•</span>
              <span>Houston, TX</span>
            </div>
            <div className="footer-right">
              <span>Building Infrastructure for Human Impact</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default IndexPage
