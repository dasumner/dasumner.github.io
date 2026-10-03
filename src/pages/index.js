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
    { value: "200 → 40", label: "Support Staff Consolidated", detail: "Oracle Cloud Transformation" },
    { value: "15,000+", label: "Students Served Weekly", detail: "Through the Migration" },
    { value: "12", label: "Person DevOps Practice", detail: "Multi-Project Federal Portfolio" },
    { value: "25+", label: "Years Leading", detail: "Technology Operations" }
  ]

  const expertise = [
    {
      category: "Enterprise & Regulated Platforms",
      items: ["DevSecOps for healthcare.gov, medicare.gov & cms.gov", "Multi-Vendor Federal Delivery", "High-Availability Systems", "Incident Command & SLA Management"]
    },
    {
      category: "Cloud, DevOps & SRE",
      items: ["AWS Cloud Infrastructure", "CI/CD Pipeline Engineering", "Site Reliability Engineering", "AI-Assisted Operations (Amazon Bedrock)"]
    },
    {
      category: "Security & Compliance",
      items: ["NIST 800-53 / FedRAMP / FISMA", "SOX-Equivalent Controls", "Cybersecurity Leadership"]
    },
    {
      category: "Strategic Leadership",
      items: ["Multi-Vendor Orchestration", "Digital Transformation", "MSP Selection & Strategy", "Contract Cost & Labor Modeling", "Utilization & Margin Management", "M&A Systems Integration", "Organizational Resilience (DR/BC)", "Executive Stakeholder Alignment"]
    }
  ]

  const caseStudies = [
    {
      id: "01",
      label: "WORKFORCE READINESS",
      client: "Major Municipal Housing Authority",
      title: "Turning a Decade of Inconsistent Job Descriptions Into a Living Skills Database",
      challenge: "A large municipal housing agency had accumulated a large body of job descriptions authored by dozens of independent offices over more than a decade. The collection was a study in the agency's documentation processes over time. There were different terminologies, different skill frameworks and no shared taxonomy. With a major enterprise technology migration on the horizon, leadership had no reliable way to assess workforce readiness. The data existed. The insight did not.",
      approach: "Designed and deployed an Amazon Bedrock pipeline that ingested the full corpus of job descriptions and applied large language models to extract, normalize, and cluster skills at scale. Disparate job titles, inconsistent competency language, and redundant role definitions were resolved into a unified, queryable skills database that captured technical and functional competencies across the organization.",
      outcome: "The resulting skills database gave agency leadership a clear, defensible picture of workforce readiness: which employees were prepared for the technology migration and which required targeted upskilling. What had been an information management problem became a strategic planning asset.",
      metrics: [],
      tech: "Amazon Bedrock · LLM Extraction · Skills Ontology · Workforce Analytics"
    },
    {
      id: "02",
      label: "STRATEGIC VENDOR SELECTION",
      client: "Multi-Office Law Firm (DC · NY · SF)",
      title: "Cutting Through MSP Proposals to Find the Right Technology Partner for a Law Firm",
      challenge: "A small litigation firm operating across three major markets had outgrown its incumbent IT provider. The incumbent provider had a documented security failure and premium pricing. The firm needed to evaluate six competing managed service providers, but each proposal used different pricing structures, different SLA definitions, and different assumptions about scope. Comparing them directly was like comparing six different languages.",
      approach: "Built a structured evaluation framework from the ground up: a weighted scoring matrix spanning security posture, unified communications, compliance readiness, service desk coverage, and total cost of ownership. Each vendor's proposal was normalized against the same criteria regardless of how they chose to present it. SOC 2 certifications were independently verified. Risk and cost tradeoffs were modeled visually so firm leadership could see where the gaps were, not just who scored highest, but why. Vendor write-ups were produced for each of the six finalists, and a full transition roadmap with IT recruitment advisory was delivered alongside.",
      outcome: "Two vendors emerged as clear finalists, differentiated not just on price but on security maturity and cultural fit for a firm operating in sensitive litigation environments. Leadership had a defensible, documented rationale for their selection. The engagement also surfaced an IT staffing gap the firm hadn't previously scoped, expanding the advisory into recruitment strategy.",
      metrics: [
        { value: "6", label: "Vendors Evaluated" },
        { value: "3", label: "Markets (DC · NY · SF)" },
        { value: "2", label: "Finalists Identified" }
      ],
      tech: "Vendor Scoring Matrix · SOC 2 Verification · Risk Modeling · IT Governance · Transition Planning"
    },
    {
      id: "03",
      label: "PLATFORM DEFENSE IN THE AI ERA",
      client: "High-Traffic Federal Healthcare Platforms",
      title: "Restoring SLA Uptime After an AI-Driven Traffic Surge",
      challenge: "Over four months, total traffic across a portfolio of high-visibility public platforms climbed 40% with no corresponding growth in the populations they serve. The surge strained infrastructure and created significant performance impact. Traditional traffic metrics offered no explanation: request volumes were rising, but the users were not.",
      approach: "Led the attribution analysis that traced nearly all of the growth to AI-driven scrapers and bots with constantly shifting behaviors. Built traffic throttling and malicious-request blocking tooling, coordinated WAF and caching rule changes with the CDN provider, and permanently restructured monitoring to segment automated traffic from legitimate human usage.",
      outcome: "SLA uptime requirements were restored and have been maintained since, even as bot behaviors continue to evolve. The deeper change was to the operating model itself: performance measurement now begins with the question of who the traffic actually is, an assumption the AI era no longer allows operations teams to take for granted.",
      metrics: [
        { value: "40%", label: "Traffic Surge in Four Months" },
        { value: "~100%", label: "Of Growth Attributed to Bots" },
        { value: "SLA", label: "Uptime Restored & Maintained" }
      ],
      tech: "Akamai WAF · Traffic Attribution · Rate Limiting · New Relic · Grafana · Splunk",
      theme: "In the AI era, you can't manage performance until you know who your traffic really is."
    }
  ]

  const currentWork = [
    {
      title: "Observability Transformation",
      description: "Leading proactive monitoring strategy for healthcare platforms supporting programs that serve over 150M Americans, including traffic segmentation that separates AI-driven bots from legitimate usage",
      tech: "New Relic, Datadog, Splunk ITSI, Multi-Vendor Coordination"
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
        <title>David Sumner | Technology Leader | Regulated Engineering Operations</title>
        <meta name="description" content="Senior Associate Director | Engineering Operations for Regulated, High-Availability Platforms | FedRAMP, FISMA & NIST 800-53" />
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
            <div className="hero-badge">REGULATED OPERATIONS · RESILIENCE · COMPLIANCE</div>
            <h1 className="hero-title">
              <span className="title-line">I run engineering operations</span>
              <span className="title-line">where uptime and compliance</span>
              <span className="title-line accent">are both non&#8209;negotiable.</span>
            </h1>
            <p className="hero-description">
              Over 25 years leading enterprise technology, from Oracle's worldwide infrastructure to 
              the DevSecOps practice supporting federal healthcare platforms for programs that serve 
              over 150 million Americans. I bring regulated-industry compliance discipline (FedRAMP, 
              FISMA, NIST 800-53) and incident-tested operations to systems that can't go down, and 
              I use AI where it earns its place.
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
                  {study.metrics.length > 0 && (
                    <div className="case-metrics">
                      {study.metrics.map((m, i) => (
                        <div key={i} className="case-metric">
                          <div className="case-metric-value">{m.value}</div>
                          <div className="case-metric-label">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="case-tech">
                    <div className="case-block-label">TOOLS & METHODS</div>
                    <div className="case-tech-tags">
                      {study.tech.split(' · ').map((tag, i) => (
                        <span key={i} className="tech-tag">{tag}</span>
                      ))}
                    </div>
                  </div>

                  {study.theme && (
                    <div className="case-theme">
                      <div className="case-theme-quote">"{study.theme}"</div>
                    </div>
                  )}
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
                <div className="mission-icon">📈</div>
                <h3>Expanded Portfolio, No Backfill</h3>
                <p>
                  Promoted to Senior Associate Director in 2026, absorbing part of a departing 
                  Director's portfolio with no backfill while continuing to run the DevSecOps 
                  practice and its federal delivery commitments.
                </p>
              </div>

              <div className="mission-card">
                <div className="mission-icon">🏥</div>
                <h3>Regulated, High-Availability Platforms</h3>
                <p>
                  Lead the DevSecOps practice supporting healthcare.gov, medicare.gov, and cms.gov, 
                  high-availability systems under continuous compliance scrutiny. The practice is a 
                  12-person team working across a multi-project federal portfolio.
                </p>
              </div>
              
              <div className="mission-card">
                <div className="mission-icon">🛡️</div>
                <h3>Resilience &amp; Continuity</h3>
                <p>
                  Built DR/BC and incident-command capability for systems where downtime carries real 
                  consequences. This is the operational discipline regulated and commercial enterprises depend on.
                </p>
              </div>
              
              <div className="mission-card">
                <div className="mission-icon">🔗</div>
                <h3>Multi-Vendor Orchestration</h3>
                <p>
                  Coordinated 10+ vendor organizations across complex enterprise platforms, and built 
                  the infrastructure and labor cost models behind an $80M contract renewal, aligning 
                  delivery, cost, and accountability at scale.
                </p>
              </div>

              <div className="mission-card">
                <div className="mission-icon">🌐</div>
                <h3>Global Enterprise Leadership</h3>
                <p>
                  Consolidated support operations from roughly 200 staff to 40 while migrating a 
                  training business serving 15,000+ students per week to Oracle Cloud Infrastructure. 
                  Over 21 years at Oracle, grew from system administrator to cloud architect and 
                  integrated education operations from acquired companies including Sun Microsystems, 
                  PeopleSoft, and JD Edwards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="connect-section">
        <div className="container">
          <div className="connect-content">
            <h2>Interested in Conversations About Senior Technology Leadership</h2>
            <p>
              I'm glad to talk with organizations where regulated-industry compliance discipline and 
              resilient operations create durable advantage, particularly healthcare systems and payers, 
              and sectors undergoing rapid transformation such as energy. Houston-based, open to remote.
            </p>
            
            <div className="connect-grid">
              <div className="connect-card">
                <h3>Areas of Interest</h3>
                <ul>
                  <li>VP / Director, Technology</li>
                  <li>Director, IT Operations</li>
                  <li>Director, Digital Transformation</li>
                  <li>Head of Technology Resilience</li>
                  <li>Healthcare Systems & Payers · Energy · FinTech · Managed Services</li>
                </ul>
              </div>
              
              <div className="connect-card">
                <h3>Recent Engagements</h3>
                <ul>
                  <li>Platform Defense: SLA Recovery After a 40% Bot-Driven Surge</li>
                  <li>Legal Sector: MSP Strategic Selection</li>
                  <li>Workforce Readiness: Skills Database on Amazon Bedrock</li>
                  <li>Federal Acquisition: AI Procurement Curriculum (DITAP)</li>
                  <li>County Education Agency: AI Acceptable Use Policy</li>
                  <li>US Digital Response: Workforce Assessment Automation</li>
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
              <a href="/David_Sumner_Resume.pdf" className="btn btn-secondary" download>
                <span>Download Resume</span>
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
              <span>Regulated Operations · Resilience · Compliance</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default IndexPage