import { GraduationCap, Calendar } from 'lucide-react'
import { data } from '../data/portfolioData'

export default function Education() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

        {/* Education Cards */}
        <div className="space-y-4 w-full">
          {data.education.map((edu, i) => (
            <div
              key={i}
              className="rounded-xl bg-[#1d2226] p-4 sm:p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mt-1 flex items-center justify-center shrink-0">
                  {edu.logo ? (
                    <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain" />
                  ) : (
                    <GraduationCap size={22} className="text-white" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-[16px] sm:text-[18px] font-bold text-[#f5a623] uppercase tracking-wider">
                    {edu.degree}
                  </span>

                  {edu.field && (
                    <h3 className="font-bold text-[15px] sm:text-[17px] text-white mt-0.5">
                      {edu.field}
                    </h3>
                  )}

                  <p className="text-[14px] sm:text-[15px] text-[#0a66c2] font-medium mt-0.5">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap gap-3 sm:gap-6 mt-2">
                    <span className="flex items-center gap-1 text-[13px] sm:text-[15px] text-[#b0b7bf]">
                      <Calendar size={14} /> {edu.startYear} – {edu.endYear}
                    </span>
                    <span className="text-[14px] sm:text-[16px] font-semibold text-[#f5a623]">
                      {edu.gpa}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Illustration — hidden on mobile, visible on md+ */}
        <div className="hidden md:flex items-center justify-end p-3 overflow-hidden">
          <img
            src="Learning-bro.svg"
            alt="Education Illustration"
            className="w-full max-w-[340px]"
          />
        </div>

      </div>
    </div>
  )
}
