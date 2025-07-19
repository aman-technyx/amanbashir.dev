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
    <div className={`app ${theme === 'dark' ? 'dark' : ''} ${theme}-theme relative min-h-screen`}>
      <Header />
      <button
        onClick={toggleTheme}
        className={`theme-toggle ${theme}`}
        aria-label="Toggle theme"
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
      {/* Custom Cursor */}
      <div
        className="custom-cursor"
        style={{
          left: cursor.x - 3,
          top: cursor.y - 3,
        }}
      >
      </div>
      {/* Fluid Cursor Canvas Overlay */}
      <canvas id="fluid" className="canvas-overlay canvas-fluid" />
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
        <canvas id="light-canvas" className="canvas-overlay canvas-light"></canvas>
      )}
    </div>
  )
}

export default App
