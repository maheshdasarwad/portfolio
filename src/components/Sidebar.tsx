import { Download, Clock } from 'lucide-react'
import type { Section } from '../App'
import { data } from '../data/portfolioData'
import { BiLogoLinkedin } from "react-icons/bi"

interface Props {
  activeSection: Section
  setActiveSection: (s: Section) => void
}

export default function Sidebar({ setActiveSection }: Props) {

  const now = new Date()
  const timeStr = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  })

  return (
    <aside className="w-full mt-3 rounded-xl overflow-hidden">

      <div className="flex justify-center pb-3 px-10">
        <div className="relative">
          <div className="w-[250px] h-[250px] rounded-full
                          bg-gradient-to-br from-[#1f6feb] to-[#388bfd]
                          overflow-hidden shadow-xl">
            <img
              src="IMG_4800.jpg"
              className="object-cover w-full h-full"
              alt="Profile"
            />
          </div>

          {/* Badge */}
          <div className="absolute bottom-8 right-0.5 w-8 h-8 rounded-full
                          bg-[#21262d] border-[#161b22]
                          flex items-center justify-center shadow">
            👨‍💻
          </div>
        </div>
      </div>

      {/* Name */}
      <div className="px-5 pb-3">
        <h1 className="text-[27px] font-bold text-white">
          Mahesh Dasarwad
        </h1>
      </div>

      {/* Resume Button - View in browser */}
      <div className="px-5 pb-4">
        <a
          href="/Resume_sem6.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2
                     rounded-lg bg-[#21262d] hover:bg-[#30363d]
                     border border-[#30363d]
                     text-white text-sm font-semibold transition-all"
        >
          View Resume
        </a>
      </div>

      {/* Bio */}
      <div className="px-5 py-4">
        <p className="text-sm font-semibold text-white">
          Full Stack Developer | MERN | Python | AI/ML Enthusiast
        </p>
          <p className="text-xs text-[#8b949e] mt-1">
            Computer Engineering
          </p>
      </div>

      {/* Info Section */}
      <div className="px-5 py-4 space-y-3">

        {/* Time */}
        <div className="flex items-center gap-2 text-sm text-[#8b949e]">
          <Clock size={15} />
          <span>
            <span className="text-white">{timeStr}</span> — local time
          </span>
        </div>

        {/* LinkedIn Link */}
        <a 
          href={data.linkedIn} 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-2 text-sm text-[#8b949e] hover:text-white transition-colors"
        >
          <BiLogoLinkedin />
          <span>LinkedIn</span>
        </a>
      </div>

      {/* Contact */}
      <div className="-mt-3 px-5 py-3">
        <button
          onClick={() => {
            const el = document.getElementById('contact-section')
            el?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="text-sm cursor-pointer font-semibold text-[#58a6ff] hover:underline transition-all"
        >
          Send a message →
        </button>
      </div>

    </aside>
  )
}