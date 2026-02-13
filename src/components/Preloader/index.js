import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  to { opacity: 1; }
`

const loading = keyframes`
  0%, 100% { transform: translateX(-100%); }
  50% { transform: translateX(230%); }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.5s ease, visibility 0.5s ease;

  &.fade-out {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
`

const Logo = styled.img`
  max-width: 200px;
  height: auto;
  margin-bottom: 40px;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease forwards;

  @media (max-width: 576px) {
    max-width: 150px;
  }
`

const BrandText = styled.p`
  color: #ffc107;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 30px;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease 0.2s forwards;
`

const LoaderBar = styled.div`
  width: 200px;
  height: 3px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease 0.4s forwards;
`

const LoaderProgress = styled.div`
  height: 100%;
  width: 30%;
  background: #ffc107;
  border-radius: 3px;
  animation: ${loading} 1.2s ease-in-out infinite;
`

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const minDisplayTime = 800
    const startTime = Date.now()

    const hidePreloader = () => {
      const elapsed = Date.now() - startTime
      const remaining = Math.max(0, minDisplayTime - elapsed)
      setTimeout(() => setIsLoading(false), remaining)
    }

    if (document.readyState === 'complete') {
      hidePreloader()
    } else {
      window.addEventListener('load', hidePreloader)
      return () => window.removeEventListener('load', hidePreloader)
    }
  }, [])

  return (
    <Overlay className={!isLoading ? 'fade-out' : ''} aria-hidden={!isLoading}>
      <Logo
        src="/logo.jpg"
        alt="Psychedelic Lab"
      />
      <BrandText>Carregando...</BrandText>
      <LoaderBar>
        <LoaderProgress />
      </LoaderBar>
    </Overlay>
  )
}

export default Preloader
