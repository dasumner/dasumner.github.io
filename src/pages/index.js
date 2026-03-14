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
      category: "Federal & Civic Technology",
      items: ["Healthcare.gov Operations", "Medicare.gov Architecture", "CMS.gov Infrastructure", "Mission-Critical Systems"]
    },
    {
      category: "DevOps Excellence",
      items: ["Container Orchestration", "CI/CD Pipeline Design", "Infrastructure as Code", "Site Reliability Engineering"]
    },
    {
      category: "Strategic Leadership",
      items: ["Multi-Vendor Coordination", "Digital Transformation", "MSP Selection & Strategy", "Technical Contract Validation", "Crisis Response Systems", "Community Resilience"]
    },
    {
      category: "Training & Mentorship",
      items: ["AI Strategy", "Open Source Procurement", "Technical Upskilling", "Cybersecurity Leadership"]
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
        { value: "Binary", label: "Migration Readiness Signal" }
      ],
      tech: "Amazon Bedrock · LLM Extraction · Skills Ontology · Workforce Analytics",
      theme: "Organizations are information-rich. The gap is insight."
    },
    {
      id: "02",
      label: "STRATEGIC VENDOR SELECTION",
      client: "Multi-Office Law Firm (DC · NY · SF)",
      title: "Cutting Through Six MSP Proposals to Find the Right Partner for a 40-Person Firm",
      challenge: "A 50-person litigation firm operating across three major markets had outgrown its incumbent IT provider, a vendor with deep political ties to firm leadership but a documented security failure and premium pricing that couldn't be justified. The firm needed to evaluate six competing managed service providers, but each proposal used different pricing structures, different SLA definitions, and different assumptions about scope. Comparing them directly was like comparing six different languages.",
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
      title: "AI Policy Framework",
      description: "Training federal procurement officers on AI and open source software acquisition, evaluation, and ethics",
      tech: "Policy Design, Compliance, Ethics"
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
        <title>David Sumner - Executive Technology Leadership</title>
        <meta name="description" content="CTO | DevOps Leader | Mission-Driven Technologist" />
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
                {section === 'cases' ? 'Case Studies' : section.charAt(0).toUpperCase() + section.slice(1)}
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
            <div className="hero-badge">FROM DATA TO DECISIONS</div>
            <h1 className="hero-title">
              <span className="title-line">Organizations Are</span>
              <span className="title-line accent">Information-Rich.</span>
              <span className="title-line">Let's Fix the Gap.</span>
            </h1>
            <p className="hero-description">
              25+ years leading technology across global enterprise and public sector: from Oracle's 
              worldwide infrastructure to federal healthcare platforms serving 150 million Americans. 
              Now applying AI and systems thinking to help mission-driven organizations convert 
              complexity into strategic clarity.
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

              <div className="mission-card">
                <div className="mission-icon">📚</div>
                <h3>Educational Access</h3>
                <p>
                  For 20 years at Oracle, built global learning infrastructure enabling 
                  thousands of students worldwide to access technical education - from 
                  Oracle classrooms to community colleges to distance learning programs.
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
                  <li>Legal Sector - MSP Strategic Selection</li>
                  <li>CivicActions - DevOps Leadership</li>
                  <li>US Digital Response - Workforce Assessment Automation</li>
                  <li>Harris County DoE - AI Policy Development</li>
                  <li>Federal Healthcare Platforms</li>
                  <li>Relief Logistics Technology</li>
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
              <span>© 2025 David Sumner</span>
              <span className="footer-divider">•</span>
              <span>Houston, TX</span>
            </div>
            <div className="footer-right">
              <span>From Data to Decisions</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default IndexPage
