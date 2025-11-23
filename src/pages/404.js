import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import "../styles/global.css"

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404: Not Found | Dave</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet" />
      </Helmet>
      
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontSize: '8rem',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #FF5E5B 0%, #23C0B5 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1rem'
          }}>404</h1>
          
          <h2 style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            color: '#F7F8FA'
          }}>Page Not Found</h2>
          
          <p style={{
            fontSize: '1.25rem',
            color: '#718096',
            marginBottom: '2rem'
          }}>
            The infrastructure you're looking for doesn't exist here.
          </p>
          
          <Link to="/" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1rem 2rem',
            background: '#FF5E5B',
            color: 'white',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'all 0.3s ease'
          }}>
            Return Home
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage
