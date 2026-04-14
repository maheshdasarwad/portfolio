import { useEffect, useRef } from 'react'
import { Share2 } from 'lucide-react'

export default function Header() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const W = () => canvas.width
    const H = () => canvas.height

    const stars = Array.from({ length: 120 }, () => ({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      r:  Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.12,
      a:  Math.random(),
    }))

    const draw = () => {
      ctx.clearRect(0, 0, W(), H())

      // move + wrap
      stars.forEach(s => {
        s.x += s.vx
        s.y += s.vy
        if (s.x < 0)    s.x = W()
        if (s.x > W())  s.x = 0
        if (s.y < 0)    s.y = H()
        if (s.y > H())  s.y = 0
      })

      // connection lines
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x
          const dy = stars[i].y - stars[j].y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < 90) {
            ctx.beginPath()
            ctx.moveTo(stars[i].x, stars[i].y)
            ctx.lineTo(stars[j].x, stars[j].y)
            ctx.strokeStyle = `rgba(88,166,255,${(1 - d / 90) * 0.18})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // dots
      stars.forEach(s => {
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${s.a * 0.65})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const handleShare = async () => {
    try {
      await navigator.share({ title: 'My Portfolio', url: window.location.href })
    } catch {
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <header className="w-full h-[150px] relative overflow-hidden bg-[#080c14]">

      {/* animated canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* subtle vignette — fades edges into the page bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(8,12,20,0.7)_100%)]" />

      {/* bottom fade so it blends into the content below */}
      <div className="absolute bottom-0 left-0 right-0 h-10
                      bg-gradient-to-t from-[#080c14] to-transparent" />

      {/* content row */}
      <div className="absolute inset-0 flex items-center justify-end px-5">
        {/* share button */}
        <button
          onClick={handleShare}
          className="flex justi items-center gap-1.5 px-4 py-1.5 rounded-full
                     bg-white/6 hover:bg-white/12
                     border border-white/12 hover:border-white/25
                     text-white/70 hover:text-white
                     text-xs font-medium
                     backdrop-blur-sm transition-all duration-200"
        >
          <Share2 size={12} />
          Share
        </button>
      </div>
    </header>
  )
}