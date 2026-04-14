// components/Navbar.tsx
import { Section } from '../App'

const SECTIONS: Section[] = [
  'overview', 'projects', 'education', 'certifications',
  'experience', 'extracurricular', 'contact'
]

const labelFor = (s: Section) =>
  s === 'extracurricular' ? 'Activities' : s.charAt(0).toUpperCase() + s.slice(1)

interface NavbarProps {
  activeSection: Section
  setActiveSection: (s: Section) => void
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  return (
    <nav className="
      fixed bottom-0 left-0 w-full z-[5]
      bg-[hsla(240,1%,17%,0.75)] backdrop-blur-[10px]
      border border-[hsl(0,0%,22%)]
      rounded-t-[12px]
      shadow-[0_16px_30px_hsla(0,0%,0%,0.25)]
      lg:absolute lg:bottom-auto lg:top-0 lg:left-auto lg:right-0
      lg:w-max lg:rounded-[0_20px] lg:shadow-none
      lg:px-5
    ">
      <ul className="
        flex flex-wrap justify-center items-center
        px-2.5
        lg:gap-[30px] lg:px-5
      ">
        {SECTIONS.map(s => (
          <li key={s}>
            <button
              onClick={() => setActiveSection(s)}
              className={`
                text-[11px] px-[7px] py-5 transition-colors duration-[0.25s]
                sm:text-[14px]
                md:text-[15px]
                lg:font-medium
                ${activeSection === s
                  ? 'text-[hsl(45,100%,72%)]'
                  : 'text-[hsl(0,0%,84%)] hover:text-[hsla(0,0%,84%,0.7)]'
                }
              `}
            >
              {labelFor(s)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}