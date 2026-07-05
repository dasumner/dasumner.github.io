import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import "../styles/global.css"

const IndexPage = () => {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      const sections = ['hero', 'impact', 'expertise', 'cases', 'mission', 'connect']
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
      category: "Enterprise & Regulated Platforms",
      items: ["Healthcare.gov Operations", "Medicare.gov Architecture", "CMS.gov Infrastructure", "High-Availability Systems"]
    },
    {
      category: "Cloud, DevOps & SRE",
      items: ["AWS Cloud Infrastructure", "CI/CD Pipeline Engineering", "Site Reliability Engineering", "Production AI in Operations (Bedrock)"]
    },
    {
      category: "Security & Compliance",
      items: ["NIST 800-53 / FedRAMP / FISMA", "SOX-Equivalent Controls", "Cybersecurity Leadership"]
    },
    {
      category: "Strategic Leadership",
      items: ["Multi-Vendor Orchestration", "Digital Transformation", "MSP Selection & Strategy", "$80M+ Contract Management", "Organizational Resilience (DR/BC)", "Executive Stakeholder Alignment"]
    }
  ]

  const caseStudies = [
    {
      id: "01",
      label: "AI-POWERED WORKFORCE INTELLIGENCE",
      client: "Major Municipal Housing Authority",
      title: "Turning Hundreds of Job Descriptions Into a Living Skills Database",
      challenge: "A large municipal housing agency had accumulated hundreds of job descriptions authored by dozens of independent offices over more than a decade. The collection was a study in the agency's documentation processes over time. There were different terminologies, different skill frameworks and no shared taxonomy. With a major enterprise technology migration on the horizon, leadership had no reliable way to assess workforce readiness. The data existed. The insight did not.",
      approach: "Designed and deployed an Amazon Bedrock pipeline that ingested the full corpus of job descriptions and applied large language models to extract, normalize, and cluster skills at scale. Disparate job titles, inconsistent competency language, and redundant role definitions were resolved into a unified, queryable skills database that captured technical and functional competencies across the organization.",
      outcome: "The resulting skills database gave agency leadership a clear, defensible picture of workforce readiness: which employees were prepared for the technology migration and which required targeted upskilling. What had been an information management problem became a strategic planning asset.",
      metrics: [
        { value: "Hundreds", label: "Job Descriptions Processed" },
        { value: "Single", label: "Unified Skills Taxonomy" },
        { value: "Actionable", label: "Readiness Score For Every Employee" }
      ],
      tech: "Amazon Bedrock · LLM Extraction · Skills Ontology · Workforce Analytics",
      theme: "Organizations are information-rich. The gap is insight."
    },
    {
      id: "02",
      label: "STRATEGIC VENDOR SELECTION",
      client: "Multi-Office Law Firm (DC · NY · SF)",
      title: "Cutting Through MSP Proposals to Find the Right Technology Partner for a Law Firm",
      challenge: "A small litigation firm operating across three major markets had outgrown its incumbent IT provider, a vendor with deep political ties to firm leadership but a documented security failure and premium pricing that couldn't be justified. The firm needed to evaluate six competing managed service providers, but each proposal used different pricing structures, different SLA definitions, and different assumptions about scope. Comparing them directly was like comparing six different languages.",
      approach: "Built a structured evaluation framework from the ground up: a weighted scoring matrix spanning security posture, unified communications, compliance readiness, service desk coverage, and total cost of ownership. Each vendor's proposal was normalized against the same criteria regardless of how they chose to present it. SOC 2 certifications were independently verified. Risk and cost tradeoffs were modeled visually so firm leadership could see where the gaps were, not just who scored highest, but why. Vendor write-ups were produced for each of the six finalists, and a full transition roadmap with IT recruitment advisory was delivered alongside.",
      outcome: "Two vendors emerged as clear finalists, differentiated not just on price but on security maturity and cultural fit for a firm operating in sensitive litigation environments. Leadership had a defensible, documented rationale for their selection, independent of the incumbent relationship. The engagement also surfaced an IT staffing gap the firm hadn't previously scoped, expanding the advisory into recruitment strategy.",
      metrics: [
        { value: "6", label: "Vendors Evaluated" },
        { value: "3", label: "Markets (DC · NY · SF)" },
        { value: "2", label: "Finalists Identified" }
      ],
      tech: "Vendor Scoring Matrix · SOC 2 Verification · Risk Modeling · IT Governance · Transition Planning",
      theme: "The right decision needs more than a gut feeling. It needs a defendable framework that holds up to scrutiny."
    }
  ]

  const currentWork = [
    {
      title: "Observability Transformation",
      description: "Leading proactive monitoring strategy improvements for healthcare applications serving 150M Americans",
      tech: "New Relic, Datadog, Splunk ITSI, Multi-Vendor Coordination"
    },
    {
      title: "AI Governance & Adoption",
      description: "Designing AI evaluation, acquisition, and ethics frameworks for large public-sector and enterprise technology programs",
      tech: "AI Strategy, Governance, Compliance"
    },
    {
      title: "Infrastructure Modernization",
      description: "Leading container orchestration migration for enterprise CI/CD pipelines",
      tech: "Docker, Kubernetes, Jenkins"
    },
    {
      title: "Strategic MSP Advisory",
      description: "Evaluated 6 MSP proposals for a multi-office law firm (DC, NY, SF), normalizing complex bids and architecting the transition roadmap.",
      tech: "Vendor Analysis, IT Governance, Multi-State Infrastructure"
}
  ]

  return (
    <>
      <Helmet>
        <title>David Sumner — Technology Director | AI-Augmented IT Operations</title>
        <meta name="description" content="IT Director | AI-Augmented Operations | FedRAMP & SOX-Grade Compliance" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet" />
      </Helmet>

      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-inner">
          <div className="nav-logo">
            <span className="logo-text">DAVID</span>
            <span className="logo-subtitle">SUMNER</span>
          </div>
          <div className="nav-links">
            {['impact', 'expertise', 'cases', 'mission', 'connect'].map((section) => (
              <a 
                key={section}
                href={`#${section}`}
                className={activeSection === section ? 'active' : ''}
              >
                {section === 'cases' ? 'Case Studies' : section === 'mission' ? 'At Scale' : section.charAt(0).toUpperCase() + section.slice(1)}
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
            <div className="hero-badge">ENTERPRISE IT OPERATIONS · RESILIENCE · AI</div>
            <h1 className="hero-title">
              <span className="title-line">Enterprise IT Operations,</span>
              <span className="title-line">Engineered for Resilience —</span>
              <span className="title-line accent">and Built with Production AI.</span>
            </h1>
            <p className="hero-description">
              25+ years leading enterprise technology — from Oracle's worldwide infrastructure to 
              federal healthcare platforms serving 150 million Americans. I pair federal-grade 
              compliance discipline (FedRAMP, FISMA, NIST 800-53) with production AI in operations, 
              bringing regulated and commercial enterprises the rigor to run resilient systems at scale.
            </p>
            <div className="hero-actions">
              <a href="#connect" className="btn btn-primary">
                <span>Get in Touch</span>
                <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#cases" className="btn btn-secondary">
                <span>View Case Studies</span>
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

      {/* Case Studies Section */}
      <section id="cases" className="cases-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">FIELD WORK</span>
            <h2>Case Studies</h2>
          </div>

          {caseStudies.map((study) => (
            <div key={study.id} className="case-study">
              <div className="case-study-header">
                <div className="case-number">{study.id}</div>
                <div className="case-meta">
                  <span className="case-label">{study.label}</span>
                  <span className="case-client">{study.client}</span>
                </div>
              </div>

              <h3 className="case-title">{study.title}</h3>

              <div className="case-body">
                <div className="case-narrative">
                  <div className="case-block">
                    <div className="case-block-label">THE CHALLENGE</div>
                    <p>{study.challenge}</p>
                  </div>
                  <div className="case-block">
                    <div className="case-block-label">THE APPROACH</div>
                    <p>{study.approach}</p>
                  </div>
                  <div className="case-block">
                    <div className="case-block-label">THE OUTCOME</div>
                    <p>{study.outcome}</p>
                  </div>
                </div>

                <div className="case-sidebar">
                  <div className="case-metrics">
                    {study.metrics.map((m, i) => (
                      <div key={i} className="case-metric">
                        <div className="case-metric-value">{m.value}</div>
                        <div className="case-metric-label">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="case-tech">
                    <div className="case-block-label">TOOLS & METHODS</div>
                    <div className="case-tech-tags">
                      {study.tech.split(' · ').map((tag, i) => (
                        <span key={i} className="tech-tag">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="case-theme">
                    <div className="case-theme-quote">"{study.theme}"</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="section-header">
              <span className="section-label">PROVEN IN HIGH-STAKES ENVIRONMENTS</span>
              <h2>Built for Scale and Scrutiny</h2>
            </div>
            
            <div className="mission-grid">
              <div className="mission-card">
                <div className="mission-icon">🏥</div>
                <h3>Regulated, High-Availability Platforms</h3>
                <p>
                  Operated healthcare.gov, medicare.gov, and cms.gov — high-availability systems 
                  under continuous compliance scrutiny, serving millions without interruption.
                </p>
              </div>
              
              <div className="mission-card">
                <div className="mission-icon">🛡️</div>
                <h3>Resilience &amp; Continuity</h3>
                <p>
                  Built DR/BC and incident-command capability for systems where downtime carries real 
                  consequences — the operational discipline regulated and commercial enterprises depend on.
                </p>
              </div>
              
              <div className="mission-card">
                <div className="mission-icon">🔗</div>
                <h3>Multi-Vendor Orchestration</h3>
                <p>
                  Coordinated 10+ vendor organizations and $80M+ in annual contracts across complex 
                  enterprise platforms — aligning delivery, cost, and accountability at scale.
                </p>
              </div>

              <div className="mission-card">
                <div className="mission-icon">🌐</div>
                <h3>Global Enterprise Leadership</h3>
                <p>
                  Progressive scope two decades at Oracle leading distributed engineering teams 
                  spanning the US, Europe, Asia, and the Americas — global infrastructure at enterprise scale.
                </p>
              </div>
            </div>

            <div className="vision-statement">
              <blockquote>
                "The systems that matter most are the ones that can't go down.
                That's the standard I build to."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="connect-section">
        <div className="container">
          <div className="connect-content">
            <h2>Open to Director &amp; VP Technology Roles</h2>
            <p>
              I'm exploring senior technology leadership roles — Director and VP of IT Operations, 
              Digital Transformation, and Technology — where federal-grade compliance discipline and 
              production AI create durable advantage. Houston-based, open to remote.
            </p>
            
            <div className="connect-grid">
              <div className="connect-card">
                <h3>Target Roles</h3>
                <ul>
                  <li>VP / Director, Technology</li>
                  <li>Director, IT Operations</li>
                  <li>Director, Digital Transformation</li>
                  <li>Head of Technology Resilience</li>
                  <li>FinTech · SaaS · Managed Services</li>
                </ul>
              </div>
              
              <div className="connect-card">
                <h3>Recent Engagements</h3>
                <ul>
                  <li>Legal Sector — MSP Strategic Selection</li>
                  <li>Enterprise AI — Bedrock Workforce Intelligence</li>
                  <li>Federal Healthcare Platforms — Operations at Scale</li>
                  <li>Observability Transformation — Splunk ITSI, New Relic</li>
                  <li>US Digital Response — Workforce Assessment Automation</li>
                </ul>
              </div>
            </div>
            
            <div className="connect-actions">
              <a href="mailto:iamdavesumner@proton.me" className="btn btn-primary">
                <span>Email Directly</span>
                <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/davidasumner" className="btn btn-secondary">
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
              <span>© 2026 David Sumner</span>
              <span className="footer-divider">•</span>
              <span>Houston, TX · Open to Remote</span>
            </div>
            <div className="footer-right">
              <span>Enterprise IT Operations · Resilience · AI</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default IndexPage
