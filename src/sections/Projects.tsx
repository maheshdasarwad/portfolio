import { useState } from 'react'
import { ChevronLeft, ChevronRight, X, ExternalLink } from 'lucide-react'
import { data } from '../data/portfolioData'
import { FaYoutube, FaGithub } from "react-icons/fa"

export default function Projects() {

  const [imageIndexes, setImageIndexes] = useState<Record<number, number>>({})
  const [lightbox, setLightbox] = useState<{ src: string } | null>(null)

  const getImg = (id: number) => imageIndexes[id] || 0
  const setImg = (id: number, idx: number) =>
    setImageIndexes(prev => ({ ...prev, [id]: idx }))

  return (
    <div className="px-4">

      {/* ─── GRID ─── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">

        {data.projects.map(project => {
          const imgIdx = getImg(project.id)
          const hasMultiple = project.images.length > 1

          return (
            <div key={project.id} className="group w-[400px] mb-3">

              {/* IMAGE (Certificate Style) */}
              <div className="relative rounded-2xl overflow-hidden bg-[#161b22] shadow-md hover:shadow-xl">

                <img
                  src={project.images[imgIdx]}
                  onClick={() => setLightbox({ src: project.images[imgIdx] })}
                  className="group w-full h-[240px] object-cover cursor-pointer
                             will-change-transform
                             transition-transform duration-500 ease-out
                             hover:scale-[1.05]"
                />

                {/* Carousel Controls */}
                {hasMultiple && (
                  <>
                    <button
                      onClick={() =>
                        setImg(
                          project.id,
                          (imgIdx + 1) % project.images.length
                        )
                      }
                      className="cursor-pointer absolute -mt-25 right-2 top-1/2 -translate-y-1/2 
                                 bg-black/50 hover:bg-black/70 text-white rounded-full p-1"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}
              </div>

             
              <div className="mt-4 px-1">

                <h3 className="text-lg font-semibold text-white group-hover:text-[#58a6ff] transition">
                  {project.title}
                </h3>

                {/* Links */}
                <div className="flex flex-wrap gap-4 mt-3">
                  {project.demoVideo && (
                    <a
                      href={project.demoVideo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center h-10 w-25 gap-1.5 px-3 py-1.5 border border-[#38434f] text-[#b0b7bf] hover:border-[#0a66c2] hover:text-[#0a66c2] text-[16px] font-semibold rounded-full"
                    >
                      <FaYoutube className='mt-1' size={19} /> Demo
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center h-10 w-25 gap-1.5 px-3 py-1.5 border border-[#38434f] text-[#b0b7bf] hover:border-[#0a66c2] hover:text-[#0a66c2] text-[16px] font-semibold rounded-full"
                    >
                     <FaGithub size={18} />  GitHub
                    </a>
                  )}

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center h-10 w-25 gap-1.5 px-3 py-1.5 border border-[#38434f] text-[#b0b7bf] hover:border-[#0a66c2] hover:text-[#0a66c2] text-[16px] font-semibold rounded-full"
                    >
                      <ExternalLink size={16} /> Live
                    </a>
                  )}
                </div>


                <p className="text-sm text-[#8b949e] mt-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.techStack.map(t => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-[#2d3748] text-[#b0b7bf]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          )
        })}
      </div>

      {/* ─── LIGHTBOX ─── */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-white">
            <X size={30} />
          </button>

          <img
            src={lightbox.src}
            className="max-w-full max-h-[90vh] rounded-xl object-contain"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

    </div>
  )
}