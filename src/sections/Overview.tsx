import { useState, useRef, useEffect } from 'react'
import { data } from '../data/portfolioData'
import { BsGithub } from "react-icons/bs"
import { SiLeetcode, SiHackerrank } from "react-icons/si"

function SkillRow({ title, skills }: { title: string; skills: { name: string; icon: string }[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg sm:text-xl font-semibold text-[#d4af37]">
          {title}
        </h3>
      </div>

      <div
        ref={scrollRef}
        className="cursor-pointer flex gap-6 sm:gap-10 overflow-x-auto scroll-smooth no-scrollbar pb-2"
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            className="min-w-[70px] sm:min-w-[100px] flex flex-col items-center mb-4 group"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />
            <span className="text-xs sm:text-sm text-[#d4af37] text-center mt-2">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

const MY_NAME       = "Mahesh Dasarwad"
const DEFAULT_ABOUT = "I am a passionate full stack developer who loves building impactful products 🚀"

const DEFAULT_CODE = `//Edit the fields below and press ▶ Run Code

developer.name  = "${MY_NAME}";
developer.about = "${DEFAULT_ABOUT}";`

export default function Overview() {
  const [name,      setName]      = useState(MY_NAME)
  const [about,     setAbout]     = useState(DEFAULT_ABOUT)
  const [code,      setCode]      = useState(DEFAULT_CODE)
  const [isRunning, setIsRunning] = useState(false)
  const [runStatus, setRunStatus] = useState<'idle' | 'ok' | 'error'>('idle')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const runJavaScript = (codeToRun: string) => {
    const developer = {
      set name(v: string)  { setName(String(v))  },
      get name()           { return name          },
      set about(v: string) { setAbout(String(v)) },
      get about()          { return about         },
    }
    try {
      const fn = new Function('developer', codeToRun)
      fn(developer)
      setRunStatus('ok')
    } catch (err) {
      console.error(err)
      setRunStatus('error')
    }
  }

  const runCode = () => {
    if (isRunning) return
    setIsRunning(true)
    setRunStatus('idle')
    setTimeout(() => { runJavaScript(code); setIsRunning(false) }, 50)
  }

  const resetCode = () => {
    setCode(DEFAULT_CODE)
    setName(MY_NAME)
    setAbout(DEFAULT_ABOUT)
    setRunStatus('idle')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault()
      runCode()
    }
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [code])

  return (
    <div className="space-y-3">

      {/* TOP ROW: hero card + terminal — stacked on mobile, side by side on lg */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

        {/* ABOUT / HERO CARD */}
        <div className="rounded-xl p-4 sm:p-7 flex flex-col gap-5">
          <div className="leading-tight">
            <p className="text-3xl sm:text-5xl font-black text-white">Hello..</p>
            <p className="text-3xl sm:text-5xl font-black text-white">
              This is{' '}
              <span className="text-red-500 transition-all duration-300">{name}</span>
            </p>

            <p className="mt-4 sm:mt-5 text-[16px] sm:text-[20px] text-[#b0b7bf] leading-relaxed whitespace-pre-wrap transition-all duration-300">
              {about}
            </p>

            <div className="my-8 sm:my-12 flex items-center gap-4">
              <a
                href={data.github}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full
                           bg-[#161b22] border border-[#30363d]
                           hover:border-white hover:scale-110 transition-all"
              >
                <BsGithub className="text-white" size={23} />
              </a>

              <a
                href={data.leetcode}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full
                           bg-[#161b22] border border-[#30363d]
                           hover:border-[#FFA116] hover:scale-110 transition-all"
              >
                <SiLeetcode className="text-[#FFA116]" size={23} />
              </a>

              <a
                href={data.hackerrank}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full
                           bg-[#161b22] border border-[#30363d]
                           hover:border-[#2EC866] hover:scale-110 transition-all"
              >
                <SiHackerrank className="text-[#2EC866]" size={23} />
              </a>
            </div>
          </div>
        </div>

        {/* TERMINAL */}
        <div className="rounded-xl border border-[#38434f] bg-[#0f1116]
                        shadow-2xl font-mono text-sm flex flex-col min-h-[280px]">

          <div className="flex items-center justify-between px-4 py-2.5
                          bg-[#161b22] rounded-t-xl">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-xs text-gray-400">developer.js</span>
            </div>
          </div>

          <div className="relative flex-1 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-8 pt-3
                            flex flex-col items-end pr-2
                            text-[11px] text-gray-700 select-none font-mono">
              {code.split('\n').map((_, i) => (
                <div key={i} className="leading-5">{i + 1}</div>
              ))}
            </div>
            <textarea
              ref={textareaRef}
              value={code}
              onChange={e => setCode(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full h-full bg-transparent outline-none
                         text-green-400 resize-none leading-5
                         pl-10 pr-4 py-3 text-[12px] sm:text-[13px]"
              style={{ fontFamily: "'Fira Code', 'Cascadia Code', monospace" }}
              spellCheck={false}
            />
          </div>

          <div className="px-4 py-1.5 bg-[#0d1117] flex items-center gap-2 min-h-[28px]">
            {runStatus === 'ok' && (
              <span className="text-[11px] text-green-400 flex items-center gap-1">
                ✓ Ran successfully — preview updated
              </span>
            )}
            {runStatus === 'error' && (
              <span className="text-[11px] text-red-400 flex items-center gap-1">
                ✗ Error — check your syntax
              </span>
            )}
          </div>

          <div className="flex gap-2 p-4">
            <button
              onClick={runCode}
              disabled={isRunning}
              className={`flex-1 py-2 rounded-md text-sm font-semibold
                          transition-all flex items-center justify-center gap-2
                          ${isRunning
                            ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                            : 'bg-green-500 text-black hover:bg-green-400 active:scale-95'
                          }`}
            >
              {isRunning ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10"
                            stroke="currentColor" strokeWidth="4" fill="none"/>
                    <path className="opacity-75" fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Running...
                </>
              ) : <>▶ Run Code</>}
            </button>
            <button
              onClick={resetCode}
              className="flex-1 py-2 bg-[#21262d] border border-[#30363d]
                         text-[#8b949e] text-sm rounded-md
                         hover:bg-[#30363d] hover:text-white active:scale-95 transition-all"
            >
              ↺ Reset
            </button>
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div className="p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-8">SKILLS</h2>

        <SkillRow
          title="Programming Languages"
          skills={[
            { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'CPP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
            { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
          ]}
        />

        <SkillRow
          title="Libraries & Frameworks"
          skills={[
            { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Tailwind', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
            { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
            { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
            { name: 'Matplotlib', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
            { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
          ]}
        />

        <SkillRow
          title="Tools & Databases"
          skills={[
            { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
            { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
            { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
            { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
            { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
            { name: 'VSCode', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
          ]}
        />
      </div>
    </div>
  )
}
