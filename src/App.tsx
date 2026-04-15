import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Overview from './sections/Overview'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Certifications from './sections/Certifications'
import ContactFooter from './components/ContactFooter'

export type Section =
  | 'overview'
  | 'projects'
  | 'education'
  | 'certifications'

const SECTIONS: Section[] = ['overview', 'projects', 'education', 'certifications']

const labelFor = (s: Section) =>
  s === 'certifications' ? 'Certifications' : s.charAt(0).toUpperCase() + s.slice(1)

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('overview')

  const renderSection = () => {
    switch (activeSection) {
      case 'overview': return <Overview />
      case 'projects': return <Projects />
      case 'education': return <Education />
      case 'certifications': return <Certifications />
      default: return null
    }
  }

  return (
    <div className="w-full min-h-screen bg-[#0d1117] text-white flex flex-col">

      {/* ── MAIN CONTENT AREA ── */}
      <div className="flex flex-col lg:flex-row px-3 sm:px-4 pt-2 flex-1">

        {/* ── SIDEBAR: full width on mobile, fixed 300px on desktop ── */}
        <div className="w-full lg:w-[300px] lg:shrink-0 lg:pr-4 lg:sticky lg:top-2 lg:h-screen lg:overflow-y-auto
                        scrollbar-thin scrollbar-thumb-[#30363d] scrollbar-track-transparent">
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="flex-1 min-w-0 mt-3 flex flex-col gap-4 pb-24 lg:pb-6">

          {/* ── MAIN CONTENT CARD ── */}
          <div className="rounded-xl bg-[#161b22] shadow-sm overflow-hidden">

            {/* HEADER + NAV */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:h-15 w-full">
              <h2 className="pl-5 pt-5 text-2xl sm:text-3xl font-bold capitalize">
                {labelFor(activeSection)}
              </h2>

              {/* Desktop nav (visible sm and up) */}
              <div className="hidden sm:flex w-full justify-end">
                <nav className="bg-[#1d2127] rounded-bl-xl rounded-tr-xl shadow-lg px-4 py-2 w-full sm:w-auto sm:max-w-[650px]">
                  <ul className="flex items-center justify-between w-full">
                    {SECTIONS.map(s => (
                      <li key={s} className="flex-1">
                        <button
                          onClick={() => setActiveSection(s)}
                          className={`cursor-pointer relative w-full px-2 sm:px-3 py-2 text-center rounded-xl text-[14px] sm:text-[18px] font-medium
                                      transition-all duration-200 group
                                      ${activeSection === s ? 'text-yellow-400' : 'text-gray-400 hover:text-white'}`}
                        >
                          {labelFor(s)}
                          <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-200" />
                          {activeSection === s && (
                            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-yellow-400 rounded-full" />
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            {/* SECTION CONTENT */}
            <div className="p-4 sm:p-6 animate-fadeIn">
              {renderSection()}
            </div>
          </div>

        </div>
      </div>

      {/* ── FOOTER ── */}
      <div className="w-full pb-3 mt-10">
        <div className="overflow-hidden">
          <ContactFooter />
        </div>
      </div>

      {/* ── MOBILE BOTTOM NAV (hidden on sm and up) ── */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-50
                      bg-[#161b22]/95 backdrop-blur-md
                      border-t border-[#30363d]
                      shadow-[0_-4px_20px_rgba(0,0,0,0.4)]">
        <ul className="flex items-center justify-around w-full py-2">
          {SECTIONS.map(s => (
            <li key={s} className="flex-1">
              <button
                onClick={() => setActiveSection(s)}
                className={`relative flex flex-col items-center justify-center w-full py-1.5 text-[11px] font-medium
                            transition-all duration-200
                            ${activeSection === s ? 'text-yellow-400' : 'text-gray-400'}`}
              >
                {activeSection === s && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-yellow-400 rounded-full" />
                )}
                <NavIcon section={s} active={activeSection === s} />
                <span className="mt-1">{labelFor(s)}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

    </div>
  )
}

function NavIcon({ section, active }: { section: Section; active: boolean }) {
  const color = active ? '#facc15' : '#9ca3af'
  const size = 20
  if (section === 'overview') return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  )
  if (section === 'projects') return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polyline points="2 17 12 22 22 17"/>
      <polyline points="2 12 12 17 22 12"/>
    </svg>
  )
  if (section === 'education') return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  )
  if (section === 'certifications') return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  )
  return null
}
