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
  // | 'Experience'
  // | 'Extracurricular activities'

const SECTIONS: Section[] = [
  'overview',
  'projects',
  'education',
  'certifications',
  // 'Experience',
]

const labelFor = (s: Section) =>
  s === 'certifications'
    ? 'Certifications'
    : s.charAt(0).toUpperCase() + s.slice(1)

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('overview')

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <Overview />
      case 'projects':
        return <Projects />
      case 'education':
        return <Education />
      case 'certifications':
        return <Certifications />
      // case 'Experience':
      //   return <Certifications />
      default:
        return null
    }
  }

  return (
    <div className="w-full min-h-screen bg-[#0d1117] text-white flex flex-col">

      {/* ───────── MAIN CONTENT AREA ───────── */}
      <div className="flex px-4 pt-2 flex-1">

        {/* ── SIDEBAR ── */}
        <div className="w-[300px] shrink-0 pr-4 sticky top-2 h-screen overflow-y-auto
                        scrollbar-thin scrollbar-thumb-[#30363d] scrollbar-track-transparent">
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="flex-1 min-w-0 mt-3 flex flex-col gap-4 pb-6">

          {/* ── MAIN CONTENT CARD ── */}
          <div className="rounded-xl bg-[#161b22] shadow-sm overflow-hidden">

            {/* HEADER + NAV */}
            <div className="flex  h-15 w-full ">
              <h2 className="pl-5 pt-5 justify-items-start  text-3xl font-bold capitalize">
                {labelFor(activeSection)}
              </h2>

              <div className="w-full flex justify-end" >
                  <nav className="bg-[#1d2127] 
                rounded-bl-xl rounded-tr-xl
               
                shadow-lg px-4 py-2 w-[650px] ">

                <ul className="flex items-center justify-between w-full">

                  {SECTIONS.map(s => (
                    <li key={s} className="flex-1">
                      <button
                        onClick={() => setActiveSection(s)}
                        className={`cursor-pointer relative w-full px-3 py-2 text-center rounded-xl text-[18px] font-medium
                                    transition-all duration-200 group
                                    ${activeSection === s
                                      ? 'text-yellow-400'
                                      : 'text-gray-400 hover:text-white'
                                    }`}
                      >
                        {labelFor(s)}

                        <span className="absolute inset-0 rounded-xl
                                        opacity-0 group-hover:opacity-100 transition duration-200" />

                        {activeSection === s && (
                          <span className="absolute bottom-1 left-1/2 -translate-x-1/2
                                          w-5 h-[2px] bg-yellow-400 rounded-full" />
                        )}
                      </button>
                    </li>
                  ))}

                </ul>
              </nav>
              </div>
              
            </div>

            {/* SECTION CONTENT */}
            <div className="p-6 animate-fadeIn">
              {renderSection()}
            </div>
          </div>

        </div>
      </div>

      {/* ───────── FOOTER SECTION (FULL WIDTH) ───────── */}
      <div className="w-full pb-3 mt-10">
        <div className=" overflow-hidden">
          <ContactFooter />
        </div>
      </div>

    </div>
  )
}