import { useState } from 'react'
import { X } from 'lucide-react'
import { data } from '../data/portfolioData'

export default function Certifications() {

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="px-4">

      {/* ─── GRID ─── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {data.certifications.map(cert => (
          <div
            key={cert.id}
            className=""
          >

            {/* IMAGE CARD */}
            <div
              onClick={() => cert.image && setSelectedImage(cert.image)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#161b22] border border-[#30363d]
                         shadow-md hover:shadow-xl "
            >
              <img
                src={cert.image}
                alt={cert.title}
                loading="lazy"
                className="w-[450px] h-[220px] object-cover
                          transform-gpu will-change-transform
                          transition-transform duration-700 ease-out
                          group-hover:scale-[1.5]"
              />
            </div>

            {/* TEXT CONTENT */}
            <div className="mt-4 px-1">

              <h3 className="text-[18px] font-semibold text-white leading-snug">
                {cert.title} - {cert.date}
              </h3>

              <p className="text-sm text-[#8b949e] mt-1">
                {cert.issuer} 
              </p>

            </div>

          </div>
        ))}

      </div>

      {/* ─── MODAL (FULL IMAGE VIEW) ─── */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >

          {/* CLOSE BUTTON */}
          <button
            className="cursor-pointer absolute top-6 right-6 text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>

          {/* IMAGE */}
          <img
            src={selectedImage}
            alt="Certificate"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain
                       animate-[zoomIn_0.5s_ease]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* ANIMATION */}
      <style>{`
        @keyframes zoomIn {
          from {
            transform: scale(0.85);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>

    </div>
  )
}