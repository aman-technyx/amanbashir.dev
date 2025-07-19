import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import FeatureProject from './components/FeatureProject'
import LogoCarousel from './components/LogoCarousel'
import './styles/main.scss'
import signature from './assets/signature.jpg'
import useFluidCursor from './hooks/useFluidCursor'
import { CURSOR_LIGHT_EFFECT_ENABLED, CURSOR_FLUID_COLOR_ENABLED } from './constants.js'

function App() {
  if (CURSOR_FLUID_COLOR_ENABLED) {
    useFluidCursor();
  }
  const [theme, setTheme] = useState('dark')
  const [cursor, setCursor] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  useEffect(() => {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        })
      })
    })
  }, [])

  // Always update cursor position
  useEffect(() => {
    function onMouseMove(e) {
      setCursor({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  // Light effect only if enabled
  useEffect(() => {
    if (!CURSOR_LIGHT_EFFECT_ENABLED) return;
    // Mouse-following light effect (global)
    const lightCanvas = document.getElementById('light-canvas')
    if (!lightCanvas) return
    const ctx = lightCanvas.getContext('2d')
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    function resizeLightCanvas() {
      lightCanvas.width = window.innerWidth
      lightCanvas.height = window.innerHeight
    }
    window.addEventListener('resize', resizeLightCanvas)
    resizeLightCanvas()
    function onMouseMove(e) {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    window.addEventListener('mousemove', onMouseMove)
    let lightFrameId
    function drawLight() {
      ctx.clearRect(0, 0, lightCanvas.width, lightCanvas.height)
      const r = 200
      const gradient = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, r
      )
      gradient.addColorStop(0, 'rgba(255,255,255,0.25)')
      gradient.addColorStop(0.5, 'rgba(255,255,255,0.10)')
      gradient.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.globalCompositeOperation = 'lighter'
      ctx.fillStyle = gradient
      ctx.fillRect(mouse.x - r, mouse.y - r, r * 2, r * 2)
      ctx.globalCompositeOperation = 'source-over'
      lightFrameId = requestAnimationFrame(drawLight)
    }
    drawLight()
    return () => {
      window.removeEventListener('resize', resizeLightCanvas)
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(lightFrameId)
    }
  }, [])

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = 'none'
    return () => {
      document.body.style.cursor = ''
    }
  }, [])

  return (
    <div className={`app ${theme === 'dark' ? 'dark' : ''} ${theme}-theme`} style={{ position: 'relative', minHeight: '100vh' }}>
      <Header />
      <button
        onClick={toggleTheme}
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          zIndex: 10000,
          padding: '0.5rem 1rem',
          borderRadius: '1.5rem',
          border: 'none',
          background: theme === 'light' ? '#222' : '#fff',
          color: theme === 'light' ? '#fff' : '#222',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }}
        aria-label="Toggle theme"
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
      {/* Custom Cursor */}
      <div
        style={{
          position: 'fixed',
          left: cursor.x - 3,
          top: cursor.y - 3,
          width: 6,
          height: 6,
          borderRadius: '50%',
          border: '3px solid #9147ff', // Twitch purple
          background: '#fff',
          boxShadow: '0 2px 8px rgba(145,71,255,0.15)',
          pointerEvents: 'none',
          zIndex: 10001,
          transition: 'background 0.2s, border 0.2s',
          mixBlendMode: 'exclusion',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
      </div>
      {/* Fluid Cursor Canvas Overlay */}
      <canvas id="fluid" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 9999 }} />
      <main>
        <Home theme={theme} />
        <About />
        <FeatureProject />
        <Experience />
        <Skills />
        <LogoCarousel />
        <Contact />
      </main>
      <Footer />
      {CURSOR_LIGHT_EFFECT_ENABLED && (
        <canvas id="light-canvas" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 3, pointerEvents: 'none' }}></canvas>
      )}
    </div>
  )
}

export default App
